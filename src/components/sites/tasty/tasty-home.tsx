"use client";

import Link from "next/link";

import Image from "next/image";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  Apple,
  BookOpenCheck,
  Mail,
} from "lucide-react";
import { TastyFooter, TastyHeader } from "./tasty-shell";

type Recipe = {
  title: string;
  category: string[];
  image: string;
  href: string;
};

const recipes: Recipe[] = [
  {
    title: "Topping Marzipan Tart Cheesecake Sweet Lollipop",
    category: ["Aperitives"],
    image: "/sites/tasty/images/ella-olsson-pb9afvr9-bk-unsplash-800x530.jpg",
    href: "/2021/04/16/topping-marzipan-tart-cheesecake-sweet-lollipop/",
  },
  {
    title: "Topping Carrot Cake Jujubes Lemon Drops",
    category: ["Pizzas"],
    image: "/sites/tasty/images/likemeat-cbnauxsztfo-unsplash-800x530.jpg",
    href: "/2021/04/16/topping-carrot-cake-jujubes-lemon-drops/",
  },
  {
    title: "Muffin Donut Soufflé Piebear Claw Croissant",
    category: ["Aperitives"],
    image: "/sites/tasty/images/ismael-trevino-3e8zzwjcfna-unsplash2-800x530.jpg",
    href: "/2021/04/16/muffin-donut-souffle-piebear-claw-croissant/",
  },
  {
    title: "Bearclaw Dragée Sweet Rolloat Mosering",
    category: ["Salads"],
    image: "/sites/tasty/images/farhad-ibrahimzade-d-domdrwoaq-unsplash-800x530.jpg",
    href: "/2021/04/16/bearclaw-dragee-sweet-rolloat-mosering/",
  },
  {
    title: "Gingerbread Donut Bear Claw Powder",
    category: ["Aperitives"],
    image: "/sites/tasty/images/ella-olsson-2ixtgsgfi-s-unsplash-800x530.jpg",
    href: "/2021/04/16/gingerbread-donut-bear-claw/",
  },
  {
    title: "Sweet roll chupa chups halvah muffin",
    category: ["Deserts", "Salads"],
    image: "/sites/tasty/images/dovile-ramoskaite-xx9smqqcbfy-unsplash-800x530.jpg",
    href: "/2021/04/16/sweet-roll-chupa-chups-halvah-muffin/",
  },
];

const categories = [
  { title: "Aperitives", count: "3 articles", slug: "aperitives", image: "/sites/tasty/images/ella-olsson-pb9afvr9-bk-unsplash-800x530.jpg" },
  { title: "Pizzas", count: "1 article", slug: "pizzas", image: "/sites/tasty/images/likemeat-cbnauxsztfo-unsplash-800x530.jpg" },
  { title: "Salads", count: "3 articles", slug: "salads", image: "/sites/tasty/images/farhad-ibrahimzade-d-domdrwoaq-unsplash-800x530.jpg" },
  { title: "Deserts", count: "3 articles", slug: "deserts", image: "/sites/tasty/images/monika-grabkowska-p1aohbit-ey-unsplash.jpeg" },
  { title: "Soups", count: "1 article", slug: "soups", image: "/sites/tasty/images/nick-karvounis-ymyfbvw7og8-unsplash-800x530.jpg" },
];

const chefs = [
  { name: "Nick Paterson", image: "/sites/tasty/images/chef-nick.jpg" },
  { name: "Jacob Guerrero", image: "/sites/tasty/images/chef-jacob.jpg" },
  { name: "Melissa Prey", image: "/sites/tasty/images/chef-melissa.jpg" },
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
  const [subscribed, setSubscribed] = useState(false);

  const visibleRecipes = useMemo(() => {
    const term = query.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesQuery = !term || recipe.title.toLowerCase().includes(term) || recipe.category.some((item) => item.toLowerCase().includes(term));
      const matchesCategory = !categoryFilter || recipe.category.includes(categoryFilter);
      return matchesQuery && matchesCategory;
    });
  }, [categoryFilter, query]);

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <main className="tasty-site">
      <TastyHeader />

      <section className="hero" id="top">
        <FoodDoodles />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Welcome to</span>
            <h1>Cavopack<br /><span className="hero-tagline">China-based Manufacturer of Luxury Gift Boxes and Paper Packaging</span></h1>
            <p className="hero-description">Paper Bags, Packaging, Gift Boxes, Stickers, Labels, and Bakery Boxes<br />Process: Sampling, Customization, and Quotation</p>
            <div className="hero-actions">
              <Link className="button" href="#recipes"><BookOpenCheck size={18} fill="currentColor" />Cook Now</Link>
              <Link className="button button-outline" href="#recipes"><span className="cloche">♨</span>Explore Recipes</Link>
            </div>
          </div>
          <div className="hero-photo-wrap"><Image className="hero-photo" src="/sites/tasty/images/hero-pancakes.jpg" alt="Golden pancakes with maple syrup" width={720} height={900} priority /></div>
        </div>
      </section>

      <section className="recipes-section section-shell" id="recipes">
        <SectionHeading title="Recipes of the Week">Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.</SectionHeading>
        <div className="recipe-grid">
          {visibleRecipes.map((recipe, index) => <article className="recipe-card" key={recipe.title}>
            <Link className="recipe-image" href={recipe.href}><Image src={recipe.image} alt={recipe.title} width={800} height={520} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link>
            <div className="recipe-content">
              <div className="recipe-tags">{recipe.category.map((tag) => <Link key={tag} href={`/category/${tag.toLowerCase()}/`}>{tag}</Link>)}</div>
              <h3><Link href={recipe.href}>{recipe.title}</Link></h3>
              <div className="recipe-byline"><Image src="/sites/tasty/images/autor-1-150x150.png" alt="Amie" width={42} height={42} /><span>Amie</span><i /> <span>April 16, 2021</span></div>
            </div>
            {index === 0 && query && <span className="sr-only">First search result</span>}
          </article>)}
          {visibleRecipes.length === 0 && <p className="empty-results">No recipes found. Try another search.</p>}
        </div>
        <div className="recipe-actions">
          {(categoryFilter || query) && <button className="clear-filter" onClick={() => { setCategoryFilter(null); setQuery(""); }}>Clear search and filters</button>}
          <Link className="button" href="/recipes/">View all Recipes</Link>
        </div>
      </section>

      <section className="category-section section-shell" aria-labelledby="category-title">
        <div className="section-heading"><h2 id="category-title">Recipes By Category</h2><p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.</p></div>
        <div className="category-grid">{categories.map((category) => <Link className="category-card" href={`/category/${category.slug}/`} key={category.title} aria-label={`Browse ${category.title} recipes`}>
          <Image src={category.image} alt="" width={640} height={620} sizes="(max-width: 640px) 100vw, 25vw" />
          <span className="category-count">{category.count}</span><strong>{category.title}</strong>
        </Link>)}</div>
      </section>

      <section className="app-promo" id="download">
        <div className="app-image"><Image src="/sites/tasty/images/app-kitchen.jpg" alt="Tablet open to a recipe in a bright kitchen" width={1200} height={800} sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="app-copy"><FoodDoodles className="app-doodles" /><div className="app-copy-inner">
          <span className="eyebrow">Best mobile app</span><h2>Download Our App</h2>
          <p>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.</p>
          <div className="store-buttons"><Link href="#newsletter" aria-label="Available on the App Store"><Apple size={26} fill="currentColor" /><span><small>Download on the</small><b>App Store</b></span></Link><Link href="#newsletter" aria-label="Get it on Google Play"><span className="play-triangle">▶</span><span><small>GET IT ON</small><b>Google Play</b></span></Link></div>
        </div></div>
      </section>

      <section className="chefs-section" id="chefs">
        <FoodDoodles />
        <SectionHeading title="Our Qualified Chefs">Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.</SectionHeading>
        <div className="chef-grid">{chefs.map((chef) => <article className="chef-card" key={chef.name}>
          <Image className="chef-photo" src={chef.image} alt={chef.name} width={500} height={500} sizes="(max-width: 760px) 80vw, 300px" />
          <h3>{chef.name}</h3><p>Chef</p><Link href="/about/">Meet our team</Link>
        </article>)}</div>
      </section>

      <section className="community-section" id="community">
        <div className="community-shade" />
        <div className="community-content"><span>Meet chefs around the world</span><h2>Join a Global Community of Change<br className="desktop-break" /> Makers and People Like You</h2>
          <div className="stats-grid"><div><strong>2,000</strong><span>Unique recipes</span></div><div><strong>3,000</strong><span>Awesome members</span></div><div><strong>100%</strong><span>Satisfaction rate</span></div></div>
        </div>
      </section>

      <section className="newsletter-section" id="newsletter">
        <FoodDoodles />
        <div className="newsletter-card"><Mail className="newsletter-icon" size={26} /><h2>Newsletter Updates</h2><p>Enter your email address below to subscribe to our tasty newsletter</p>
          {subscribed ? <div className="success-message" role="status">Email accepted for this preview. Mailing list connection is not configured.</div> : <form className="newsletter-form" onSubmit={submitNewsletter}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button className="button" type="submit">Subscribe</button></form>}
        </div>
      </section>

      <TastyFooter />

    </main>
  );
}
