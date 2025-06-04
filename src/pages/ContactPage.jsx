import { useState } from "react";
import "./ContactPage.css";
import BG1 from "../assets/contact1.png";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "Reservation Inquiry: Availability and Rates",
    "Special Requests for Upcoming Stay",
    "Feedback and Suggestions on Recent Visit",
  ];

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email.";
    if (!form.subject) errs.subject = "Please select a subject.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Replace with API call if needed
      console.log("Contact form submitted:", form);
      setForm({ name: "", email: "", subject: "", message: "" }); // Clear form fields
    }
  }

  return (
    <section>
      <div className="contact-sect">
        <div className="contact-overlay">
          <h1 className="contact-text">Contact</h1>
        </div>
      </div>

      <div className="content1">
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <span className="contact-icon" aria-label="address">
              {/* Location pin SVG */}
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#C5A46D"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </span>
            <div className="contact-info-text">
              3891 Ranchview Dr. Richardson,
              <br />
              California 62639
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon" aria-label="email">
              {/* Mail envelope SVG */}
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#C5A46D"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <div className="contact-info-text">info@hotelbeach.com</div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon" aria-label="phone">
              {/* Phone SVG */}
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#C5A46D"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.06.73 3.03a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.97.36 1.98.6 3.03.73A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <div className="contact-info-text">(603) 555-0123</div>
          </div>
        </div>
      </div>

      <div className="conto">
        <div className="background">
          <div>
            <img src={BG1} alt="img-bg" />
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2 className="form-title">Request Info</h2>
            <p className="form-desc">
              Have a question, comment, or need assistance? We're here to help!
              Reach out to us using the contact information below.
            </p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                autoComplete="off"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@framer.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                autoComplete="off"
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={errors.subject ? "error" : ""}
              >
                <option value="">Select...</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <span className="form-error">{errors.subject}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here..."
                value={form.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
                rows={5}
              />
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            {submitted && (
              <div className="form-success">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
