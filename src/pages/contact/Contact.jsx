import { useState } from "react";
import { Check, Send } from "lucide-react";
import { Field } from "../../components/Field.jsx";
import { PageHero } from "../../components/PageHero.jsx";
import { Section } from "../../components/Section.jsx";
export function Contact() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Formspree endpoint from the original Datenfarmen contact form
  const FORM_ENDPOINT = "https://formspree.io/f/mkgdzavp";

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setDone(false);
    setError(false);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setDone(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Ready to scale your infrastructure? Get in touch with our experts."
      />

      <Section>
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-intro">
            <p>
              Requesting pricing for — fill in the form below and we'll send you
              a tailored quote.
            </p>

            <div className="contact-block">
              <span>General Inquiries</span>
              <a href="mailto:info@datenfarmen.com">info@datenfarmen.com</a>
            </div>

            <div className="contact-block">
              <span>CEO / Leadership</span>
              <a href="mailto:Vishal.patel@datenfarmen.in">
                vishal.patel@datenfarmen.in
              </a>
            </div>

            <div className="contact-block">
              <span>Headquarters</span>
              <p>Ankleshwar, Gujarat, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card form-card">
            {done ? (
              <div className="success">
                <Check size={22} />

                <h3>Message Sent Successfully</h3>

                <p>
                  Thank you for contacting Datenfarmen Centers. Your message has
                  been submitted successfully. Our team will get back to you
                  soon.
                </p>

                <button
                  type="button"
                  className="button primary"
                  onClick={() => {
                    setDone(false);
                    setError(false);
                  }}
                >
                  Send Another Message
                  <Send size={17} />
                </button>
              </div>
            ) : (
              <form className="form-grid" onSubmit={handleSubmit}>
                {/* Full Name */}
                <Field
                  label="Full Name"
                  placeholder="John Doe"
                  name="name"
                  required
                />

                {/* Email */}
                <Field
                  label="Email Address"
                  placeholder="john@company.com"
                  type="email"
                  name="email"
                  required
                />

                {/* Interest */}
                <Field
                  label="Interest"
                  placeholder="Colocation, Cloud, VPS, etc."
                  name="interest"
                />

                {/* Message */}
                <Field label="Message" name="message" area required />

                {/* Email subject shown in Formspree */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Inquiry - Datenfarmen Centers"
                />

                {/* Error Message */}
                {error && (
                  <div className="form-error">
                    <p>
                      Something went wrong while sending your message. Please
                      try again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  className="button primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      Sending...
                      <span className="button-spinner" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
