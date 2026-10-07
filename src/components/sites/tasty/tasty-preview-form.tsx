"use client";

import { useState, type FormEvent } from "react";

export function LocalPreviewForm({ kind }: { kind: "comment" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  if (submitted) return <p className="preview-form-notice" role="status">This is a local preview only. Your information was not sent or saved.</p>;
  return <form className="tasty-form" onSubmit={submit}>
    <div className="tasty-form-row"><label>Name *<input name="name" required /></label><label>Email *<input name="email" type="email" required /></label></div>
    {kind === "contact" && <label>Subject<input name="subject" /></label>}
    {kind === "comment" && <label>Website<input name="website" type="url" /></label>}
    <label>{kind === "comment" ? "Add Comment *" : "Comment or Message *"}<textarea name="message" rows={5} required /></label>
    <button type="submit" className="button">{kind === "comment" ? "Post Comment" : "Send Message"}</button>
  </form>;
}

export function PrintRecipeButton() {
  return <button type="button" onClick={() => window.print()}>Print</button>;
}
