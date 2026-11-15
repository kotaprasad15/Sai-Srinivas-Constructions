import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { company } from '../config/company';
import { services } from '../data/services';
import { buildEnquiryMessage, getContactHref, getPhoneHref, type ContactChannel } from '../lib/contact';
import ContactAction from './ContactAction';
import './contact.css';

export default function Contact() {
  const id = useId();
  const [channel, setChannel] = useState<ContactChannel>(
    getContactHref('whatsapp') || !getContactHref('email') ? 'whatsapp' : 'email',
  );
  const [feedback, setFeedback] = useState('');
  const [prepared, setPrepared] = useState('');
  const [copied, setCopied] = useState(false);
  const draftRef = useRef<HTMLTextAreaElement>(null);
  const phoneHref = getPhoneHref();
  const emailHref = getContactHref('email');
  const readyHref = prepared ? getContactHref(channel, prepared) : null;

  useEffect(() => {
    function handleUnavailable(event: Event) {
      const requested = (event as CustomEvent<ContactChannel>).detail;
      setChannel(requested);
      setFeedback(`${requested === 'whatsapp' ? 'WhatsApp contact details' : 'Our email address'} will be available soon. You can prepare and copy your enquiry using the form.`);
    }
    window.addEventListener('contact:unconfigured', handleUnavailable);
    return () => window.removeEventListener('contact:unconfigured', handleUnavailable);
  }, []);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = ['name', 'phone', 'email', 'workType', 'message'] as const;
    for (const field of fields) {
      if (!String(data.get(field) ?? '').trim()) {
        setFeedback('Please complete all fields before preparing your enquiry.');
        const control = event.currentTarget.elements.namedItem(field);
        if (control instanceof HTMLElement) control.focus();
        return;
      }
    }
    setPrepared(buildEnquiryMessage({
      name: String(data.get('name')),
      phone: String(data.get('phone')),
      email: String(data.get('email')),
      workType: String(data.get('workType')),
      message: String(data.get('message')),
    }));
    setCopied(false);
    setFeedback(getContactHref(channel)
      ? `Your enquiry is ready below. Continue in ${channel === 'whatsapp' ? 'WhatsApp' : 'your email app'} to review and send it.`
      : 'Your enquiry is ready to copy. Our contact details will be available soon; this enquiry has not been sent.');
  }

  async function copyEnquiry() {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(prepared);
      setCopied(true);
      setFeedback('Enquiry copied. It has not been sent.');
    } catch {
      draftRef.current?.focus();
      draftRef.current?.select();
      setFeedback('Select and copy the enquiry text below. It has not been sent.');
    }
  }

  function changeChannel(next: ContactChannel) {
    setChannel(next);
    setCopied(false);
    if (prepared) {
      setFeedback(getContactHref(next)
        ? `Continue in ${next === 'whatsapp' ? 'WhatsApp' : 'your email app'} to review and send your enquiry.`
        : 'Contact details will be available soon. You can copy your enquiry below; it has not been sent.');
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading" tabIndex={-1}>
      <div className="container contact-layout">
        <div className="contact-intro reveal">
          <div className="eyebrow"><span /> GET IN TOUCH</div>
          <h2 id="contact-heading">Let’s Build<br />Something <span>Together.</span></h2>
          <p className="contact-description">Have a construction requirement or a project in mind? Get in touch with us to discuss your needs.</p>
          <div className="contact-actions">
            <ContactAction channel="whatsapp" className="contact-shortcut"><MessageCircle size={18} aria-hidden="true" /> WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></ContactAction>
            <ContactAction channel="email" className="contact-shortcut"><Mail size={18} aria-hidden="true" /> Email us <ArrowUpRight size={17} aria-hidden="true" /></ContactAction>
          </div>
          <dl className="contact-details">
            <div><Phone size={19} aria-hidden="true" /><div><dt>CALL US</dt><dd>{phoneHref ? <a href={phoneHref}>{company.phone}</a> : company.phone || 'Phone number coming soon'}</dd></div></div>
            <div><Mail size={19} aria-hidden="true" /><div><dt>WRITE TO US</dt><dd>{emailHref ? <a href={emailHref}>{company.email}</a> : 'Email address coming soon'}</dd></div></div>
            <div><MapPin size={19} aria-hidden="true" /><div><dt>VISIT US</dt><dd>{company.address || 'Business address coming soon'}</dd></div></div>
          </dl>
        </div>
        <div className="contact-form-panel reveal">
          <div className="contact-form-heading"><h3>Tell us about your project.</h3><span>LET’S START A CONVERSATION</span></div>
          <form onSubmit={prepareEnquiry} onChange={(event) => {
            const target = event.target;
            if ((target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) && target.name !== 'channel' && prepared) {
              setPrepared('');
              setCopied(false);
              setFeedback('Your details have changed. Prepare your enquiry again to include the updates.');
            }
          }} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field"><label htmlFor={`${id}-name`}>Your name <span>*</span></label><input id={`${id}-name`} name="name" autoComplete="name" placeholder="Full name" required maxLength={100} /></div>
              <div className="contact-field"><label htmlFor={`${id}-phone`}>Phone number <span>*</span></label><input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required minLength={7} maxLength={25} /></div>
            </div>
            <div className="contact-field"><label htmlFor={`${id}-email`}>Email address <span>*</span></label><input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
            <div className="contact-field"><label htmlFor={`${id}-type`}>Type of construction work <span>*</span></label><select id={`${id}-type`} name="workType" defaultValue="" required><option value="" disabled>Select an area of work</option>{services.map(service => <option value={service.title} key={service.title}>{service.title}</option>)}</select></div>
            <div className="contact-field"><label htmlFor={`${id}-message`}>Your message <span>*</span></label><textarea id={`${id}-message`} name="message" rows={3} placeholder="A little about your project and what you have in mind…" required maxLength={2000} /></div>
            <fieldset className="contact-channels"><legend>Continue your enquiry via</legend><div>{(['whatsapp', 'email'] as const).map(option => <label key={option} className={channel === option ? 'is-selected' : ''}><input type="radio" name="channel" value={option} checked={channel === option} onChange={() => changeChannel(option)} />{option === 'whatsapp' ? <MessageCircle size={16} aria-hidden="true" /> : <Mail size={16} aria-hidden="true" />}{option === 'whatsapp' ? 'WhatsApp' : 'Email'}</label>)}</div></fieldset>
            <button className="button button-primary contact-submit" type="submit">Prepare enquiry <ArrowUpRight size={19} aria-hidden="true" /></button>
            <p className="contact-form-note">Your details stay in your browser until you choose to send them through WhatsApp or email.</p>
          </form>
          <p id="contact-feedback" className={`contact-feedback${feedback ? ' is-visible' : ''}`} role="status" aria-live="polite" tabIndex={-1}>{feedback}</p>
          {prepared && <div className="contact-prepared">
            <label htmlFor={`${id}-draft`}>Your enquiry</label>
            <textarea ref={draftRef} id={`${id}-draft`} readOnly rows={7} value={prepared} />
            <div className="contact-draft-actions">
              {readyHref && <a href={readyHref} className="button button-primary" target={channel === 'whatsapp' ? '_blank' : undefined} rel={channel === 'whatsapp' ? 'noopener noreferrer' : undefined}>Continue in {channel === 'whatsapp' ? 'WhatsApp' : 'email'} <ArrowUpRight size={17} aria-hidden="true" /></a>}
              <button type="button" className="contact-copy" onClick={copyEnquiry}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{copied ? 'Copied' : 'Copy enquiry'}</button>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
}
