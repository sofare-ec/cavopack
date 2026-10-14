import Image from "next/image";
import Link from "next/link";
import { products } from "./tasty-data";
import { productLandingContent } from "./product-landing-data";
import { InquiryModule } from "./tasty-inquiry-module";

export function ProductLandingPage({ product }: { product: (typeof products)[number] }) {
  const content = productLandingContent[product.slug];
  const whatsapp = `https://wa.me/8613506614950?text=${encodeURIComponent(`Hello, Cavopack team. I'm interested in custom ${product.label.toLowerCase()}. I'd like to discuss size, quantity and printing requirements.`)}`;
  return <div className="landing-page">
    <nav className="landing-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#products">Products</Link><span>/</span><span aria-current="page">{product.label}</span></nav>
    <section className="landing-hero" aria-labelledby="landing-title">
      <figure className="landing-hero-image"><Image src={`/sites/tasty/images/landing/${product.slug}.webp`} alt={`Illustrative ${product.label.toLowerCase()} design reference`} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" preload /><figcaption>Illustrative design reference · final specifications agreed per project</figcaption></figure>
      <div className="landing-hero-copy"><span className="eyebrow">Custom {product.label}</span><h1 id="landing-title">{content.heading}</h1><p>{content.description}</p>
        <ul className="landing-benefits"><li>Custom dimensions</li><li>Branding requirements</li><li>Bulk order enquiries</li></ul>
        <div className="landing-actions"><a className="button" href="#message">Request a Quote</a><a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
        <p className="landing-hero-note">Have a reference image? Send it with your estimated quantity to start.</p>
      </div>
    </section>
    <nav className="landing-section-nav" aria-label="Product page sections"><a href="#styles">Styles</a><a href="#customization">Customization</a><a href="#ordering">Ordering</a><a href="#questions">FAQs</a><a href="#message">Your enquiry</a></nav>
    <section className="landing-section" id="styles" aria-labelledby="styles-title">
      <div className="landing-heading"><span className="eyebrow">Choose a starting point</span><h2 id="styles-title">Styles to discuss for your project.</h2><p>Use these ideas to describe what you need. Construction, materials and availability are confirmed during your enquiry.</p></div>
      <div className="landing-style-grid">{content.styles.map((style, index) => <article className="landing-style-card" key={style.name}><span className="landing-number">0{index + 1}</span><h3>{style.name}</h3><p>{style.description}</p><a href={`https://wa.me/8613506614950?text=${encodeURIComponent(`Hello, Cavopack team. I'd like to discuss ${product.label.toLowerCase()}: ${style.name}.`)}`} target="_blank" rel="noopener noreferrer">Discuss this style <span aria-hidden="true">↗</span></a></article>)}</div>
    </section>
    <section className="landing-section landing-customization" id="customization" aria-labelledby="customization-title">
      <div className="landing-heading"><span className="eyebrow">Define the details</span><h2 id="customization-title">Made around your requirements.</h2><p>Share your preferences or ask us to discuss a suitable direction. You do not need a finished specification to start.</p></div>
      <dl className="landing-specifications">{content.specifications.map(spec => <div key={spec.name}><dt>{spec.name}</dt><dd>{spec.description}</dd></div>)}</dl>
    </section>
    <section className="landing-detail-section" aria-labelledby="detail-title">
      <figure><Image src={product.image} alt={`Additional ${product.label.toLowerCase()} illustrative packaging reference`} width={800} height={530} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>Packaging design illustration</figcaption></figure>
      <div><span className="eyebrow">Product considerations</span><h2 id="detail-title">Look beyond the surface.</h2>{content.details.map(detail => <article key={detail.name}><h3>{detail.name}</h3><p>{detail.description}</p></article>)}</div>
    </section>
    <section className="landing-section landing-ordering" id="ordering" aria-labelledby="ordering-title">
      <div className="landing-heading"><span className="eyebrow">Before you order</span><h2 id="ordering-title">A clear brief. An agreed plan.</h2></div>
      <div className="landing-order-grid">
        <article><span className="landing-number">01</span><h3>Order quantity</h3><p>Share your estimated quantity. Minimum order requirements and pricing depend on the selected specifications.</p></article>
        <article><span className="landing-number">02</span><h3>Samples &amp; approval</h3><p>Agree on sample type, cost and timing. Review the product details before approving production.</p></article>
        <article><span className="landing-number">03</span><h3>Production &amp; delivery</h3><p>Confirm production time, packing and shipping separately, based on your destination and required date.</p></article>
        <article><span className="landing-number">04</span><h3>Artwork &amp; references</h3><p>Send artwork, dimensions or reference images. File and layout requirements can be discussed with your brief.</p></article>
      </div>
    </section>
    <section className="landing-section landing-faq" id="questions" aria-labelledby="questions-title"><div className="landing-heading"><span className="eyebrow">Useful answers</span><h2 id="questions-title">{product.label} FAQs</h2></div><div>{content.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    <section className="landing-enquiry" aria-labelledby="enquiry-title"><div><span className="eyebrow">Start your project</span><h2 id="enquiry-title">Let’s discuss your<br />{product.label.toLowerCase()}.</h2><p>Send the size, quantity and any references you have. Undecided details can be discussed together.</p><a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a><a className="landing-email" href={`mailto:sofare@cavopack.com?subject=${encodeURIComponent(`Custom ${product.label} enquiry`)}`}>sofare@cavopack.com</a></div><InquiryModule key={product.slug} packagingType={content.quoteType} /></section>
    <section className="landing-section landing-related" aria-labelledby="related-title"><div className="landing-heading"><h2 id="related-title">Complete your packaging range.</h2></div><div className="landing-related-grid">{content.related.map(slug => {
      const related = products.find(item => item.slug === slug)!;
      return <Link key={slug} className="landing-related-card" href={`/${slug}/`}><Image src={`/sites/tasty/images/landing/${slug}.webp`} alt={`Illustrative ${related.label.toLowerCase()} reference`} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 33vw" /><span>{related.label}<span aria-hidden="true">↗</span></span></Link>;
    })}</div></section>
  </div>;
}
