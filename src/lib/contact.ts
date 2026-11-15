import { company } from '../config/company.ts';

export type ContactChannel = 'whatsapp' | 'email';

export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  workType: string;
  message: string;
}

export function getWhatsAppHref(message = company.whatsappMessage): string | null {
  const number = company.whatsappNumber.replace(/[\s()+-]/g, '');
  if (!/^[1-9]\d{6,14}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getEmailHref(message = company.whatsappMessage): string | null {
  const email = company.email.trim();
  if (!/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) return null;
  return `mailto:${email}?subject=${encodeURIComponent('Construction enquiry — ' + company.name)}&body=${encodeURIComponent(message)}`;
}

export function getContactHref(channel: ContactChannel, message?: string): string | null {
  return channel === 'whatsapp' ? getWhatsAppHref(message) : getEmailHref(message);
}

export function buildEnquiryMessage(enquiry: Enquiry): string {
  return [
    company.whatsappMessage,
    '',
    `Name: ${enquiry.name.trim()}`,
    `Phone: ${enquiry.phone.trim()}`,
    `Email: ${enquiry.email.trim()}`,
    `Type of work: ${enquiry.workType}`,
    '',
    enquiry.message.trim(),
  ].join('\n');
}

export function getPhoneHref(): string | null {
  const phone = company.phone.replace(/[\s().-]/g, '');
  return /^\+?[1-9]\d{6,14}$/.test(phone) ? `tel:${phone}` : null;
}
