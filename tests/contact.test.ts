import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { company } from '../src/config/company.ts';
import { buildEnquiryMessage, getContactHref, getEmailHref, getPhoneHref, getWhatsAppHref } from '../src/lib/contact.ts';

const originalConfig = { ...company };
afterEach(() => Object.assign(company, originalConfig));

test('unconfigured contact channels never create outgoing links', () => {
  company.whatsappNumber = '';
  company.email = '';
  company.phone = '';
  assert.equal(getContactHref('whatsapp'), null);
  assert.equal(getContactHref('email'), null);
  assert.equal(getPhoneHref(), null);
});

test('WhatsApp normalizes international formatting and includes the supplied message', () => {
  company.whatsappNumber = '+91 (98765) 43210';
  const message = 'A home & office?\nPlease call +91 90000 00000. #Enquiry';
  const url = new URL(getContactHref('whatsapp', message)!);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/919876543210');
  assert.equal(url.searchParams.get('text'), message);
  assert.equal(Array.from(url.searchParams).length, 1);
  assert.equal(url.hash, '');
});

test('WhatsApp uses the configured introductory message by default', () => {
  company.whatsappNumber = '919876543210';
  company.whatsappMessage = 'A configured greeting & enquiry.';
  assert.equal(new URL(getWhatsAppHref()!).searchParams.get('text'), company.whatsappMessage);
});

test('invalid WhatsApp destinations cannot become active links', () => {
  for (const value of ['WHATSAPP_NUMBER', '0', '0123456789', '12345', '1234567890123456', '919876543210?text=other', '91 letters']) {
    company.whatsappNumber = value;
    assert.equal(getWhatsAppHref(), null, value);
  }
});

test('email preserves exact special characters and line breaks without adding query fields', () => {
  company.email = ' hello@example.com ';
  const message = 'Hello & thank you.\nSite: 20% ready?\nBudget #1 + #2';
  const url = new URL(getContactHref('email', message)!);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'hello@example.com');
  assert.equal(url.searchParams.get('subject'), `Construction enquiry — ${company.name}`);
  assert.equal(url.searchParams.get('body'), message);
  assert.equal(Array.from(url.searchParams).length, 2);
  assert.equal(url.hash, '');
});

test('email rejects placeholders and destinations containing query injection', () => {
  for (const value of ['EMAIL_ADDRESS', 'hello@', '@example.com', 'hello@example.com?bcc=someone@example.com', 'hello@example.com&bcc=someone@example.com', 'hello@example.com\r\nBcc: someone@example.com']) {
    company.email = value;
    assert.equal(getEmailHref(), null, value);
  }
});

test('enquiries include every supplied field in readable text and preserve multiline messages', () => {
  const enquiry = {
    name: '  Asha & Ravi  ',
    phone: '  +91 98765 43210 ',
    email: ' asha@example.com ',
    workType: 'Building Construction',
    message: ' First floor extension.\nPlease discuss access & timing. ',
  };
  assert.equal(buildEnquiryMessage(enquiry), [
    company.whatsappMessage,
    '',
    'Name: Asha & Ravi',
    'Phone: +91 98765 43210',
    'Email: asha@example.com',
    'Type of work: Building Construction',
    '',
    'First floor extension.\nPlease discuss access & timing.',
  ].join('\n'));
});

test('phone links normalize real numbers and reject placeholder values', () => {
  company.phone = '+91 (98765) 43210';
  assert.equal(getPhoneHref(), 'tel:+919876543210');
  for (const value of ['Phone coming soon', '123', '+91;ext=123', '0123456789']) {
    company.phone = value;
    assert.equal(getPhoneHref(), null, value);
  }
});
