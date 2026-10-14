"use client";

import { useState, type FormEvent } from "react";

export function LocalPreviewForm({ packagingType = "" }: { packagingType?: string }) {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return <form className="tasty-form" onSubmit={submit}>
    <p className="inquiry-preview-note">This form is a preview and does not send or save your information. For enquiries, please email us or use WhatsApp.</p>
    <div className="tasty-form-row"><label>Name (required)<input name="name" autoComplete="name" required /></label><label>Email (required)<input name="email" type="email" autoComplete="email" required /></label></div>
    <div className="tasty-form-row"><label>Packaging Type (optional)<select name="packagingType" defaultValue={packagingType}><option value="">Select a packaging type</option><option>Gift boxes</option><option>Tote bags</option><option>Packaging boxes</option><option>Bakery boxes</option><option>Labels &amp; stickers</option><option>Hang tags</option><option>Other / Not sure</option></select></label><label>Estimated Quantity (optional)<input name="quantity" placeholder="e.g. 1,000 pieces or not sure" /></label></div>
    <label>Project Details (required)<span className="inquiry-field-help" id="project-details-help">Please share the product, dimensions, materials or finishes you have in mind, and the delivery destination.</span><textarea name="message" rows={5} aria-describedby="project-details-help" required /></label>
    <p className="inquiry-attachment-note">Have reference images or artwork? You can send them to <a href="mailto:sofare@cavopack.com">sofare@cavopack.com</a>.</p>
    <button type="submit" className="button">Preview Quote Request</button>
    {submitted && <p className="preview-form-notice" role="status">Preview only: your information has not been sent or saved. Please contact us by email or WhatsApp to request a quote.</p>}
  </form>;
}
