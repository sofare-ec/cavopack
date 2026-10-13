import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { TastyShell } from "./tasty-shell";
import { industries, products } from "./tasty-data";
import { notFound } from "next/navigation";
import { InquiryModule } from "./tasty-inquiry-module";

const excerptText = "Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.";

function Breadcrumbs({ parts }: { parts: { label: string; href?: string }[] }) {
  return <div className="tasty-breadcrumbs"><Link href="/">Home</Link>{parts.map((part, i) => <span key={`${part.label}-${i}`}> / {part.href ? <Link href={part.href}>{part.label}</Link> : part.label}</span>)}</div>;
}

function PageIntro({ title, children = excerptText }: { title: string; children?: ReactNode }) {
  return <section className="tasty-page-intro"><span className="eyebrow">Cavopack</span><h1>{title}</h1><div>{children}</div></section>;
}

function AboutPage() {
  return <div className="about-page">
    <section className="about-hero" aria-labelledby="about-title">
      <span className="eyebrow">About Cavopack</span>
      <h1 id="about-title">Packaging made for<br />your brand and business.</h1>
      <p>From gift boxes and tote bags to labels and bakery boxes, we help businesses develop custom packaging tailored to their specifications and bulk order needs.</p>
    </section>

    <div className="about-shell">
      <section className="about-overview" aria-labelledby="about-overview-title">
        <div className="about-overview-copy">
          <span className="eyebrow">Who we are</span>
          <h2 id="about-overview-title">Your packaging project.<br />Our focus.</h2>
          <p>Cavopack focuses on custom packaging for brands and business purchasing needs. We bring product requirements, packaging choices and brand presentation into one conversation.</p>
          <p>Explore gift boxes, tote bags, packaging boxes, labels, hang tags and bakery packaging. Tell us what you need to pack, how it should look and the quantities you have in mind.</p>
          <dl className="about-details">
            <div><dt>Made for your brand</dt><dd>Size, structure, materials and print requirements.</dd></div>
            <div><dt>Planned for your business</dt><dd>Product use, order quantity and delivery needs.</dd></div>
          </dl>
          <Link className="about-text-link" href="/#products">Explore our packaging range</Link>
        </div>
        <figure className="about-overview-image">
          <Image src="/sites/tasty/images/product-intro-factory.webp" alt="Factory building and loading area shown as a packaging manufacturing reference" width={2000} height={952} sizes="(max-width: 760px) 100vw, 50vw" preload />
          <figcaption>Packaging manufacturing scene · illustrative reference</figcaption>
        </figure>
      </section>

      <section className="about-capabilities" aria-labelledby="about-capabilities-title">
        <div className="about-section-heading">
          <div><span className="eyebrow">Production &amp; quality</span><h2 id="about-capabilities-title">The details that shape<br />your packaging.</h2></div>
          <p>Define the structure, print finish and quality requirements for your project before moving into production.</p>
        </div>
        <div className="about-capability-grid">
          <article className="about-capability-card">
            <Image src="/sites/tasty/images/product-type-03.webp" alt="Printed paper packaging box illustrating materials and structure" width={800} height={530} sizes="(max-width: 760px) 100vw, 33vw" />
            <div><span className="about-card-number">01 / Materials &amp; structure</span><h3>A fit for your product.</h3><p>Discuss dimensions, materials, box construction and the protection your product needs.</p></div>
          </article>
          <article className="about-capability-card">
            <Image src="/sites/tasty/images/product-type-01.webp" alt="Red gift box illustrating printed branding and decorative finishes" width={800} height={530} sizes="(max-width: 760px) 100vw, 33vw" />
            <div><span className="about-card-number">02 / Printing &amp; finishing</span><h3>A finish for your brand.</h3><p>Share your artwork, colours and finish preferences so the packaging reflects your brand.</p></div>
          </article>
          <article className="about-capability-card">
            <Image className="about-inspection-image" src="/sites/tasty/images/community-factory.webp" alt="Illustrative production scene with a worker examining a packaging box" width={2000} height={953} sizes="(max-width: 760px) 100vw, 33vw" />
            <div><span className="about-card-number">03 / Quality requirements</span><h3>Clear expectations.</h3><p>Agree on appearance, construction and packing requirements before production. Image shown is a production scene reference.</p></div>
          </article>
        </div>
      </section>

      <section className="about-process" aria-labelledby="about-process-title">
        <div className="about-process-heading"><span className="eyebrow">How we work together</span><h2 id="about-process-title">From your brief to delivery.</h2><p>A clear starting point for your custom packaging project.</p></div>
        <ol className="about-process-grid">
          <li><span>01</span><h3>Share your requirements</h3><p>Tell us your product, packaging type, size and estimated order quantity.</p></li>
          <li><span>02</span><h3>Confirm details &amp; quote</h3><p>Discuss materials, artwork, specifications and the quotation for your project.</p></li>
          <li><span>03</span><h3>Agree on samples</h3><p>Confirm sampling requirements and review the details before approving production.</p></li>
          <li><span>04</span><h3>Plan production &amp; delivery</h3><p>Agree on the production schedule, packing and delivery arrangements.</p></li>
        </ol>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div><span className="eyebrow">Start a conversation</span><h2 id="about-cta-title">Have a packaging<br />project in mind?</h2><p>Send us your specifications, reference images and order quantity. Let’s discuss the next steps for your packaging.</p>
          <div className="about-cta-actions"><a className="button" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer"><Image src="/sites/tasty/images/whatsapp.png" alt="" width={20} height={20} />Discuss Your Project</a><a className="button button-outline" href="mailto:sofare@cavopack.com">Email Cavopack</a></div>
        </div>
        <div className="about-cta-contact"><span>Contact Cavopack</span><a href="mailto:sofare@cavopack.com">sofare@cavopack.com</a><a href="tel:+8613506614950">(+86) 13506614950</a><Link className="about-text-link" href="/contact/">Visit our contact page</Link></div>
      </section>
    </div>
  </div>;
}

function IndustriesPage() {
  return <><PageIntro title="Industries">Industry information about Cavopack’s packaging solutions will be added here.</PageIntro><Breadcrumbs parts={[{ label: "Industries" }]} />
    <section className="tasty-empty"><h2>Industry details are coming soon.</h2></section>
  </>;
}

function IndustryPage({ industry }: { industry: (typeof industries)[number] }) {
  const description = `Custom packaging for ${industry.title.toLowerCase()} businesses. Contact us to discuss your requirements.`;
  return <><PageIntro title={`${industry.title} Packaging`}><><Breadcrumbs parts={[{ label: "Industries", href: "/#industry" }, { label: industry.title }]} />{description}</></PageIntro>
    <section className="tasty-article">
      <figure className="article-cover"><Image src={industry.image} alt={`${industry.title} packaging scene`} width={1100} height={720} priority /></figure>
      <div className="article-body"><p>{description}</p><Link className="button" href="/contact/">Get Custom Quote</Link></div>
    </section>
  </>;
}

function ProductPage({ product }: { product: (typeof products)[number] }) {
  return <><PageIntro title={product.label}>{product.title}</PageIntro>
    <section className="tasty-article">
      <figure className="article-cover"><Image src={product.image} alt={product.title} width={800} height={530} priority /></figure>
      <div className="article-body"><p>{product.title}</p><a className="button" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer">Get Custom Quote</a></div>
    </section>
  </>;
}

function ContactPage() {
  return <><PageIntro title="Contact">{excerptText}</PageIntro>
    <section className="tasty-contact tasty-section"><div className="contact-details"><article><h2>Physical Address</h2><p>304 North Cardinal St.<br />Dorchester Center, MA 02124</p></article><article><h2>Email Address</h2><p>info@company.com<br />contact@company.com</p></article><article><h2>Phone Numbers</h2><p>1-555-123-4567<br />1-800-123-4567</p></article><p className="template-note">These address and phone details are sample content from the original demo page, not verified Cavopack contact details.</p></div>
      <div className="contact-copy"><h2>Dolor consectetur adipiscing</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.</p><div className="contact-highlights"><h3>Mauris nunc congue suscipit</h3><p>Nullam condimentum leo id elit sagittis auctor</p><h3>Dolor sit amet consectetur adipiscing</h3></div></div>
    </section><InquiryModule />
  </>;
}

export default function TastyContentPage({ slug }: { slug: string[] }) {
  const path = slug.join("/");
  const industry = industries.find((item) => item.slug === path);
  const product = products.find((item) => item.slug === path);
  let content: ReactNode;
  if (path === "about") content = <AboutPage />;
  else if (path === "industries") content = <IndustriesPage />;
  else if (path === "contact") content = <ContactPage />;
  else if (product) content = <ProductPage product={product} />;
  else if (industry) content = <IndustryPage industry={industry} />;
  else notFound();
  return <TastyShell>{content}</TastyShell>;
}
