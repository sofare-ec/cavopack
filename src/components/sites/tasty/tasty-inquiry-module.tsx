import { LocalPreviewForm } from "./tasty-preview-form";

// 询单模块：独立保存，供 Contact 页面及后续询单使用。
export function InquiryModule() {
  return <section className="tasty-contact-form" id="message" aria-labelledby="inquiry-title"><div><span className="eyebrow">Your packaging brief</span><h2 id="inquiry-title">Request a Custom Quote</h2><p>Share what you have in mind. You can leave undecided specifications blank.</p></div><LocalPreviewForm /></section>;
}
