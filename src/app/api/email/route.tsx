import Email from '@/lib/emails/contactInquiry';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
  from: 'onboarding@resend.com',
  to: 'michaeladu493@gmail.com',
  subject: 'New Lead Info',
  react: Email(),
});
}
