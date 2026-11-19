"use client";

import { useState } from "react";

// Opens the visitor's email app with the message filled in.
// To send from your own server instead, replace handleSubmit with a fetch() to an API route.
export default function ContactForm({ email }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Hello from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nReply to: ${data.get("from")}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__field">
        <span>Your name</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="form__field">
        <span>Your email</span>
        <input name="from" type="email" required autoComplete="email" />
      </label>
      <label className="form__field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn btn--pink">
        Send message
      </button>
      {sent && (
        <p className="form__note" role="status">
          Your email app should open now. If it doesn't, write to {email}.
        </p>
      )}
    </form>
  );
}
