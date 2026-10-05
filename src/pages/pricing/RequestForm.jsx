import { useState } from "react";
import { Check, Send } from "lucide-react";
import { Field } from "../../components/Field.jsx";
export function RequestForm({ onDone }) {
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="success">
        <Check size={22} />
        <h3>Request captured</h3>
        <p>
          Connect the current production submission endpoint through{" "}
          <code>VITE_CONTACT_FORM_ENDPOINT</code> to deliver this request to the
          same backend.
        </p>
        <button className="button primary" onClick={onDone}>
          Close
        </button>
      </div>
    );
  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <p className="form-intro">
        Tell us a little about your project — our team will confirm specs and
        get you deployed.
      </p>
      <Field label="Full Name *" placeholder="John Doe" required />
      <Field
        label="Work Email *"
        placeholder="john@company.com"
        type="email"
        required
      />
      <Field label="Phone Number *" placeholder="+91 98765 43210" required />
      <Field label="Company / Project" placeholder="Acme Pvt Ltd" />
      <Field label="Message (Optional)" area />
      <button className="button primary" type="submit">
        Submit Request
        <Send size={17} />
      </button>
    </form>
  );
}

// function Contact() {
//   const [done, setDone] = useState(false);
//   return (
//     <>
//       <PageHero
//         eyebrow="Contact"
//         title="Contact Us"
//         description="Ready to scale your infrastructure? Get in touch with our experts."
//       />
//       <Section>
//         <div className="contact-grid">
//           <div className="contact-intro">
//             <p>
//               Requesting pricing for — fill in the form below and we'll send you
//               a tailored quote.
//             </p>
//             <div className="contact-block">
//               <span>General Inquiries</span>
//               <a href="mailto:info@datenfarmen.com">info@datenfarmen.com</a>
//             </div>
//             <div className="contact-block">
//               <span>CEO / Leadership</span>
//               <a href="mailto:Vishal.patel@datenfarmen.in">
//                 Vishal.patel@datenfarmen.in
//               </a>
//             </div>
//             <div className="contact-block">
//               <span>Headquarters</span>
//               <p>Ankleshwar, Gujarat, India</p>
//             </div>
//           </div>
//           <div className="card form-card">
//             {done ? (
//               <div className="success">
//                 <Check size={22} />
//                 <h3>Message prepared</h3>
//                 <p>
//                   Connect the current production form endpoint through{" "}
//                   <code>VITE_CONTACT_FORM_ENDPOINT</code> to deliver the message
//                   to the live backend.
//                 </p>
//               </div>
//             ) : (
//               <form
//                 className="form-grid"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   setDone(true);
//                 }}
//               >
//                 <Field label="Full Name" placeholder="John Doe" required />
//                 <Field
//                   label="Email Address"
//                   placeholder="john@company.com"
//                   type="email"
//                   required
//                 />
//                 <Field label="Interest" placeholder="Colocation, Cloud, etc." />
//                 <Field label="Message" area required />
//                 <button className="button primary" type="submit">
//                   Send Message
//                   <Send size={17} />
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </Section>
//     </>
//   );
// }
