"use client";

import { useState, type FormEvent } from "react";

export function LocalPreviewForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  if (submitted) return <p className="preview-form-notice" role="status">This is a local preview only. Your information was not sent or saved.</p>;
  return <form className="tasty-form" onSubmit={submit}>
    <div className="tasty-form-row"><label>Name *<input name="name" required /></label><label>Email *<input name="email" type="email" required /></label></div>
    <label>Subject<input name="subject" /></label>
    <label>Comment or Message *<textarea name="message" rows={5} required /></label>
    <button type="submit" className="button">Send Message</button>
  </form>;
}
