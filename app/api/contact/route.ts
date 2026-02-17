import { NextRequest, NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/site-constants';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  company?: string;
}

const sanitize = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const validatePayload = (payload: ContactPayload) => {
  const errors: string[] = [];

  if (!payload.firstName || payload.firstName.length < 2) {
    errors.push('First name must be at least 2 characters.');
  }
  if (!payload.lastName || payload.lastName.length < 2) {
    errors.push('Last name must be at least 2 characters.');
  }
  if (!payload.email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(payload.email)) {
    errors.push('A valid email address is required.');
  }
  if (!payload.message || payload.message.length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  if (payload.message.length > 4000) {
    errors.push('Message is too long.');
  }

  return errors;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload: ContactPayload = {
      firstName: sanitize(body.firstName),
      lastName: sanitize(body.lastName),
      email: sanitize(body.email),
      message: sanitize(body.message),
      company: sanitize(body.company)
    };

    if (payload.company) {
      return NextResponse.json({ success: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        {
          error: 'Email backend is not configured.',
          code: 'CONTACT_NOT_CONFIGURED'
        },
        { status: 503 }
      );
    }

    const errors = validatePayload(payload);
    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0] }, { status: 400 });
    }

    const from = process.env.CONTACT_FROM_EMAIL ?? 'Afterlife Systems <hello@afterlifesystems.space>';
    const to = process.env.CONTACT_RECIPIENT_EMAIL ?? CONTACT_EMAIL;
    const subject = `New website inquiry from ${payload.firstName} ${payload.lastName}`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\\n/g, '<br/>')}</p>
    `;

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject,
        html
      })
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json(
        {
          error: 'Failed to send message.',
          details: resendError
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}
