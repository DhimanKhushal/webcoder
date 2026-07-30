"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-hero>Get in touch</p>
          <h1 data-hero>Let&apos;s make<br /><span>something matter.</span></h1>
          <div className="page-hero-copy" data-hero>
            <p />
            <p>
              Have a project in mind, a problem to solve or simply want to say
              hello? Drop us a line. We usually reply within one business day.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <div className="contact-stack">
            <div className="contact-card" data-reveal>
              <span><Mail size={15} /> Have a query? Drop us an email</span>
              <a href="mailto:opt.webcodder@gmail.com">opt.webcodder@gmail.com</a>
            </div>
            <div className="contact-card" data-reveal>
              <span><Phone size={15} /> Contact us</span>
              <a href="tel:+918298295419">+91-829-829-5419</a>
            </div>
            <div className="contact-card" data-reveal>
              <span><MapPin size={15} /> Our office address</span>
              <p>SCO 114–115, 2nd Floor, Sector 34-A, Chandigarh, Punjab 160022</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit} data-reveal>
            <h2 aria-live="polite">{sent ? "Message received." : "Tell us about your project."}</h2>
            {sent ? (
              <>
                <p className="section-copy">
                  Thank you. Your brief is ready to send—email us at
                  opt.webcodder@gmail.com and our team will get back to you.
                </p>
                <a className="button" href="mailto:opt.webcodder@gmail.com">
                  Open email <ArrowUpRight size={18} />
                </a>
              </>
            ) : (
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" required placeholder="Aman Sharma" />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" required placeholder="aman@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91" />
                </div>
                <div className="field">
                  <label htmlFor="service">I need help with</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>UI/UX Design</option>
                    <option>Website Development</option>
                    <option>Software Development</option>
                    <option>Branding</option>
                    <option>E-commerce</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Project details</label>
                  <textarea id="message" name="message" required placeholder="A little about your idea, timeline and goals..." />
                </div>
                <div className="field full">
                  <button className="button" type="submit">
                    Send enquiry <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
