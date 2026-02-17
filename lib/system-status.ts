export type ServiceState = 'operational' | 'degraded';

export interface ServiceCheck {
  id: string;
  label: string;
  state: ServiceState;
  detail: string;
}

export interface SystemStatusPayload {
  state: ServiceState;
  label: string;
  message: string;
  checkedAt: string;
  checks: ServiceCheck[];
}

export const getSystemStatus = (): SystemStatusPayload => {
  const checks: ServiceCheck[] = [
    {
      id: 'website',
      label: 'Website',
      state: 'operational',
      detail: 'Core web pages are available.'
    }
  ];

  const hasResendApiKey = Boolean(process.env.RESEND_API_KEY);
  const hasFromAddress = Boolean(process.env.CONTACT_FROM_EMAIL);
  const hasRecipientAddress = Boolean(process.env.CONTACT_RECIPIENT_EMAIL);
  const contactConfigured = hasResendApiKey && hasFromAddress && hasRecipientAddress;

  checks.push({
    id: 'contact-email',
    label: 'Contact Email',
    state: contactConfigured ? 'operational' : 'degraded',
    detail: contactConfigured
      ? 'Contact form email delivery is configured.'
      : 'Contact form email delivery is pending configuration.'
  });

  const overallState: ServiceState = checks.some((check) => check.state === 'degraded')
    ? 'degraded'
    : 'operational';

  return {
    state: overallState,
    label: overallState === 'operational' ? 'All Systems Operational' : 'Partial Service Degradation',
    message:
      overallState === 'operational'
        ? 'All monitored services are running normally.'
        : 'At least one monitored service needs attention.',
    checkedAt: new Date().toISOString(),
    checks
  };
};
