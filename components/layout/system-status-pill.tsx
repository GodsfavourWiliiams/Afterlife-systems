'use client';

import { useEffect, useMemo, useState } from 'react';
import type { SystemStatusPayload } from '@/lib/system-status';

type BadgeState = 'loading' | 'operational' | 'degraded' | 'outage';

const POLL_INTERVAL_MS = 60_000;

const SystemStatusPill = () => {
  const [badgeState, setBadgeState] = useState<BadgeState>('loading');
  const [label, setLabel] = useState('Checking System Status');
  const [message, setMessage] = useState('Running health checks...');

  useEffect(() => {
    let active = true;

    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/system-status', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`Status fetch failed with ${response.status}`);
        }

        const payload = (await response.json()) as SystemStatusPayload;
        if (!active) {
          return;
        }

        setBadgeState(payload.state);
        setLabel(payload.label);
        setMessage(payload.message);
      } catch {
        if (!active) {
          return;
        }

        setBadgeState('outage');
        setLabel('Status Check Failed');
        setMessage('Unable to reach monitoring endpoint.');
      }
    };

    fetchStatus();
    const intervalId = setInterval(fetchStatus, POLL_INTERVAL_MS);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  const style = useMemo(() => {
    if (badgeState === 'operational') {
      return {
        wrapper: 'border-emerald-500/20 bg-emerald-500/10',
        dot: 'bg-emerald-500',
        text: 'text-emerald-400'
      };
    }

    if (badgeState === 'degraded') {
      return {
        wrapper: 'border-amber-500/20 bg-amber-500/10',
        dot: 'bg-amber-400',
        text: 'text-amber-300'
      };
    }

    if (badgeState === 'outage') {
      return {
        wrapper: 'border-rose-500/20 bg-rose-500/10',
        dot: 'bg-rose-400',
        text: 'text-rose-300'
      };
    }

    return {
      wrapper: 'border-slate-500/20 bg-slate-500/10',
      dot: 'bg-slate-400',
      text: 'text-slate-300'
    };
  }, [badgeState]);

  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-3 py-1 ${style.wrapper}`}
      aria-live="polite"
      title={message}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} ${badgeState !== 'outage' ? 'animate-pulse' : ''}`} />
      <span className={`text-xs font-semibold ${style.text}`}>{label}</span>
    </div>
  );
};

export default SystemStatusPill;
