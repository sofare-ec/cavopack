"use client";

import Link from "next/link";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TastyFooter, TastyHeader } from "./tasty-shell";
import { industries } from "./tasty-data";

type Recipe = {
  title: string;
  category: string[];
  categoryLabel?: string;
  image: string;
  href: string;
};

const heroSlides = [
  { src: "/sites/tasty/images/hero-cavopack-red-gift-box.webp", alt: "Woman presenting a red Cavopack gift box", href: "/gift-boxes/", width: 1500, height: 1500 },
  { src: "/sites/tasty/images/hero-cavopack-design-shopping-bag.webp", alt: "Cavopack design shopping bag against a red background", href: "/tote-bag/", width: 1500, height: 1500 },
  { src: "/sites/tasty/images/hero-canvas-tote-bag.webp", alt: "Woman carrying a beige canvas tote bag", href: "/tote-bag/", width: 1500, height: 1500 },
  { src: "/sites/tasty/images/hero-cavopack-kraft-gift-box.webp", alt: "Woman holding a Cavopack kraft gift box", href: "/packaging/", width: 1500, height: 1500 },
  { src: "/sites/tasty/images/hero-cupcake-bakery-box.webp", alt: "Hand holding a yellow bakery box with cupcakes", href: "/brkery-boxes/", width: 1500, height: 1500 },
  { src: "/sites/tasty/images/hero-kraft-package-sealing.webp", alt: "Hands sealing a Cavopack kraft package with a branded paper band", href: "/label/", width: 1500, height: 1500 },
  { src: "/sites/tasty/images/hero-cavopack-hang-tags.webp", alt: "Cavopack paper hang tags on a garment", href: "/hang-tag/", width: 1500, height: 1500 },
];

const recipes: Recipe[] = [
  {
    title: "Custom rigid gift boxes, crafted to your brand specifications with consistent quality for bulk orders.",
    category: ["Aperitives"],
    categoryLabel: "gift boxes",
    image: "/sites/tasty/images/product-type-01.webp",
    href: "/gift-boxes/",
  },
  {
    title: "Custom-branded tote bags, tailored to your needs with consistent quality for bulk orders.",
    category: ["Pizzas"],
    categoryLabel: "TOTE BAG",
    image: "/sites/tasty/images/product-type-02.webp",
    href: "/tote-bag/",
  },
  {
    title: "Custom packaging designed to protect products, showcase brands, and support efficient bulk orders.",
    category: ["Aperitives"],
    categoryLabel: "PACKAGING",
    image: "/sites/tasty/images/product-type-03.webp",
    href: "/packaging/",
  },
  {
    title: "Custom bakery boxes with secure closures, convenient handles, and standout branding.",
    category: ["Salads"],
    categoryLabel: "BRKERY BOXES",
    image: "/sites/tasty/images/product-type-04.webp",
    href: "/brkery-boxes/",
  },
  {
    title: "Custom self-adhesive labels for bottles and packaging, tailored to your brand and product specifications.",
    category: ["Aperitives"],
    categoryLabel: "LABEL",
    image: "/sites/tasty/images/product-type-05.webp",
    href: "/label/",
  },
  {
    title: "Custom hang tags add polished branding and clear product information to packaging.",
    category: ["Deserts", "Salads"],
    categoryLabel: "HANG TAG",
    image: "/sites/tasty/images/product-type-06.webp",
    href: "/hang-tag/",
  },
];

function FoodDoodles({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`food-doodles ${className}`} />;
}

function SectionHeading({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default function TastyHome() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (carouselPaused) return;
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 4000);
    return () => window.clearInterval(timer);
  }, [carouselPaused]);

  const visibleRecipes = useMemo(() => {
    const term = query.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesQuery = !term || recipe.title.toLowerCase().includes(term) || recipe.category.some((item) => item.toLowerCase().includes(term));
      const matchesCategory = !categoryFilter || recipe.category.includes(categoryFilter);
      return matchesQuery && matchesCategory;
    });
  }, [categoryFilter, query]);

  return (
    <main className="tasty-site">
      <TastyHeader />

      <section className="hero" id="top">
        <FoodDoodles />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Welcome to</span>
            <h1>Cavopack<br /><span className="hero-tagline">Custom packaging solutions tailored to your brand, built for bulk orders.</span></h1>
            <p className="hero-description"><span className="hero-description-products">Custom gift boxes, tote bags, stickers, labels, bakery boxes, and more—tailored to your brand, crafted to your specifications, and produced for your business. Contact us to discuss your custom packaging needs.</span></p>
            <div className="hero-actions">
              <a className="button" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer"><Image src="/sites/tasty/images/whatsapp.png" alt="" width={18} height={18} />Inquiry Now</a>
              <Link className="button button-outline" href="/contact/"><Image src="/sites/tasty/images/email-quote.png" alt="" width={18} height={18} />Get Custom Quote</Link>
            </div>
          </div>
          <div className="hero-photo-wrap" aria-roledescription="carousel" aria-label="Cavopack packaging photos" onPointerEnter={(event) => { if (event.pointerType === "mouse") setCarouselPaused(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setCarouselPaused(false); }} onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const startX = touchStartX.current; touchStartX.current = null; setCarouselPaused(false); const endX = event.changedTouches[0]?.clientX; if (startX === null || endX === undefined) return; const delta = endX - startX; if (Math.abs(delta) < 45) return; setHeroSlide((current) => (current + (delta < 0 ? 1 : -1) + heroSlides.length) % heroSlides.length); }} onTouchCancel={() => { touchStartX.current = null; setCarouselPaused(false); }} onFocusCapture={() => setCarouselPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCarouselPaused(false); }}>
            <Link className="hero-slide-link" href={heroSlides[heroSlide].href} aria-label={`Explore ${heroSlides[heroSlide].alt}`}><Image className="hero-photo" src={heroSlides[heroSlide].src} alt={heroSlides[heroSlide].alt} width={heroSlides[heroSlide].width} height={heroSlides[heroSlide].height} priority={heroSlide === 0} /></Link>
            <button className="hero-carousel-control hero-carousel-previous" type="button" aria-label="Previous image" onClick={() => setHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}><ChevronLeft size={22} /></button>
            <button className="hero-carousel-control hero-carousel-next" type="button" aria-label="Next image" onClick={() => setHeroSlide((current) => (current + 1) % heroSlides.length)}><ChevronRight size={22} /></button>
            <div className="hero-carousel-dots" aria-label="Choose image">{heroSlides.map((slide, index) => <button key={slide.src} className={index === heroSlide ? "is-active" : ""} type="button" aria-label={`Show image ${index + 1}`} aria-current={index === heroSlide ? "true" : undefined} onClick={() => setHeroSlide(index)} />)}</div>
          </div>
        </div>
      </section>

      <section className="product-intro-section" id="product-intro">
        <div className="product-intro-shade" />
        <div className="product-intro-content"><span>Meet chefs around the world</span><h2>Join a Global Community of Change<br className="product-intro-break" /> Makers and People Like You</h2>
          <div className="product-intro-stats"><div><strong>2,000</strong><span>Unique recipes</span></div><div><strong>3,000</strong><span>Awesome members</span></div><div><strong>100%</strong><span>Satisfaction rate</span></div></div>
        </div>
      </section>

      <section className="recipes-section section-shell" id="products">
        <SectionHeading title="Explore By Product Type">Start with the packaging type that best fits your project. Each type has its own page with material options and key details. Looking for more styles? Contact us to explore additional options and request a quote.</SectionHeading>
        <div className="recipe-grid">
          {visibleRecipes.map((recipe, index) => <article className="recipe-card" key={recipe.title}>
            <Link className="recipe-image" href={recipe.href}><Image src={recipe.image} alt={recipe.title} width={800} height={520} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link>
            <div className="recipe-content">
              <div className="recipe-tags">{recipe.category.slice(0, recipe.categoryLabel ? 1 : undefined).map((tag) => <Link id={recipe.categoryLabel ? "gift-boxes" : undefined} key={tag} href={`/category/${tag.toLowerCase()}/`}>{recipe.categoryLabel ?? tag}</Link>)}</div>
              <h3><Link href={recipe.href}>{recipe.title}</Link></h3>
              <div className="recipe-byline"><a className="recipe-whatsapp" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer" aria-label="Request a packaging quote on WhatsApp"><Image src="/sites/tasty/images/whatsapp-logo.png" alt="WhatsApp" width={42} height={42} /></a><a className="recipe-quote" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer">Get Custom Quote</a></div>
            </div>
            {index === 0 && query && <span className="sr-only">First search result</span>}
          </article>)}
          {visibleRecipes.length === 0 && <p className="empty-results">No recipes found. Try another search.</p>}
        </div>
        <div className="recipe-actions">
          {(categoryFilter || query) && <button className="clear-filter" onClick={() => { setCategoryFilter(null); setQuery(""); }}>Clear search and filters</button>}
          <span className="recipe-actions-divider" aria-hidden="true" />
        </div>
      </section>

      <section className="category-section section-shell" aria-labelledby="industry">
        <div className="section-heading"><h2 id="industry">Explore by Industry</h2><p>Discover packaging solutions tailored to your industry. From gift boxes and paper bags to bakery packaging and labels, we offer customizable options to support your brand and business needs. Contact us to discuss your project and request a quote.</p></div>
        <div className="category-grid">{industries.map((industry) => <Link className="category-card" href={`/${industry.slug}/`} key={industry.slug} aria-label={`Explore ${industry.title} packaging`}>
          <span className="category-image"><Image src={industry.image} alt="" width={640} height={620} sizes="(max-width: 640px) 100vw, 25vw" /></span>
          <strong>{industry.title}</strong>
        </Link>)}</div>
      </section>

      <section className="community-section" id="community">
        <div className="community-shade" />
        <div className="community-content"><span>Meet chefs around the world</span><h2>Join a Global Community of Change<br className="desktop-break" /> Makers and People Like You</h2>
          <div className="stats-grid"><div><strong>2,000</strong><span>Unique recipes</span></div><div><strong>3,000</strong><span>Awesome members</span></div><div><strong>100%</strong><span>Satisfaction rate</span></div></div>
        </div>
      </section>

      <TastyFooter />

    </main>
  );
}
