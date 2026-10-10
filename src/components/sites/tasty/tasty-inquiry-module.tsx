import { LocalPreviewForm } from "./tasty-preview-form";

// 询单模块：保留供后续恢复，目前不在 Contact 页面显示。
export function InquiryModule() {
  return <section className="tasty-contact-form" id="message"><div><span className="eyebrow">Get in touch</span><h2>Get In Touch</h2><p>Nullam condimentum leo id elit sagittis auctor.</p></div><LocalPreviewForm kind="contact" /></section>;
}
