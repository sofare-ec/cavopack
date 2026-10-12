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
  return <><PageIntro title="About">{excerptText}</PageIntro>
    <section className="tasty-about tasty-section"><div className="about-story"><div><span className="eyebrow">Our story</span><h2>Mauris Imperdiet Orci Dapibus Commodo Morbi in Faucibus.</h2><p>{excerptText} Etiam elementum euismod commodo.</p><p>Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</p><Link className="button" href="/#products">Browse Products</Link></div><Image src="/sites/tasty/images/chef-big.png" alt="Cook preparing food" width={620} height={620} /></div>
      <div className="about-video"><Image src="/sites/tasty/images/video-cover.jpg" alt="Cooking class preview" width={1200} height={620} /><div><h2>There are a variety of places where you can experience a cooking class</h2><p>{excerptText}</p><Link className="button" href="/#products">Browse Products</Link></div></div>
    </section></>;
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
