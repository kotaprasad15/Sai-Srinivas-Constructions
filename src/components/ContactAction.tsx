import type { ReactNode } from 'react';
import { getContactHref, type ContactChannel } from '../lib/contact';

interface ContactActionProps {
  channel: ContactChannel;
  className?: string;
  children?: ReactNode;
}

export default function ContactAction({ channel, className, children }: ContactActionProps) {
  const href = getContactHref(channel);
  const label = children ?? (channel === 'whatsapp' ? 'WhatsApp' : 'Email');

  if (href) {
    return (
      <a className={className} href={href} target={channel === 'whatsapp' ? '_blank' : undefined}
        rel={channel === 'whatsapp' ? 'noopener noreferrer' : undefined}>
        {label}
      </a>
    );
  }

  function showContactAvailability() {
    window.dispatchEvent(new CustomEvent('contact:unconfigured', { detail: channel }));
    document.getElementById('contact')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
    document.getElementById('contact-feedback')?.focus({ preventScroll: true });
  }

  return <button type="button" className={className} onClick={showContactAvailability}>{label}</button>;
}
