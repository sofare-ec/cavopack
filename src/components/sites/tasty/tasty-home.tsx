"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  Apple,
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Clock3,
  Mail,
  Menu,
  X,
} from "lucide-react";

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
    image: "/sites/tasty/images/category-sweets.jpg",
    href: "#recipes",
  },
  {
    title: "Topping Carrot Cake Jujubes Lemon Drops",
    category: ["Pizzas"],
    image: "/sites/tasty/images/recipe-pizza.jpg",
    href: "#recipes",
  },
  {
    title: "Muffin Donut Soufflé Piebear Claw Croissant",
    category: ["Aperitives"],
    image: "/sites/tasty/images/recipe-avocado.jpg",
    href: "#recipes",
  },
  {
    title: "Bearclaw Dragée Sweet Rolloat Mosering",
    category: ["Salads"],
    image: "/sites/tasty/images/recipe-salad.jpg",
    href: "#recipes",
  },
  {
    title: "Gingerbread Donut Bear Claw Powder",
    category: ["Aperitives"],
    image: "/sites/tasty/images/recipe-bowl.jpg",
    href: "#recipes",
  },
  {
    title: "Sweet roll chupa chups halvah muffin",
    category: ["Deserts", "Salads"],
    image: "/sites/tasty/images/recipe-berries.jpg",
    href: "#recipes",
  },
];

const categories = [
  { title: "Sweets", count: "98", image: "/sites/tasty/images/category-sweets.jpg" },
  { title: "Burgers", count: "23", image: "/sites/tasty/images/category-burger.jpg" },
  { title: "Drinks", count: "34", image: "/sites/tasty/images/category-drinks.jpg" },
  { title: "Pizzas", count: "54", image: "/sites/tasty/images/category-pizza.jpg" },
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

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links${compact ? " social-links-compact" : ""}`} aria-label="Social links">
      <a href="#community" aria-label="Facebook"><span className="facebook-glyph">f</span></a>
      <a href="#community" aria-label="X social"><span className="x-glyph">𝕏</span></a>
      <a href="#community" aria-label="Instagram"><svg viewBox="0 0 24 24" width={compact ? 15 : 16} height={compact ? 15 : 16} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r=".8" fill="currentColor"/></svg></a>
    </div>
  );
}

export default function TastyHome() {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [trendOffset, setTrendOffset] = useState(0);

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
      <header className="site-header">
        <div className="brand-row">
          <a className="brand" href="#top" aria-label="Cavopack home"><Image className="brand-mark" src="/sites/tasty/images/cavopack-box-symbol.png" alt="" width={34} height={34} /><span>Cavopack</span></a>
        </div>
        <nav className={`primary-nav${mobileMenuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-social"><SocialLinks compact /></div>
          <button className="mobile-menu-toggle" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="nav-links">
            <a className="active" href="#top" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#recipes" onClick={() => setMobileMenuOpen(false)}>Product</a>
            <a href="#chefs" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#footer" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
          <a className="button button-small submit-recipe" href="#newsletter">Submit Recipe</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <FoodDoodles />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Receipe of the day</span>
            <h1>Tasty Fluffy<br />Pancakes</h1>
            <div className="hero-meta">
              <div className="hero-author"><Image src="/sites/tasty/images/chef-melissa.jpg" alt="Rachel Bradley" width={42} height={42} /><strong>By Rachel Bradley</strong></div>
              <div className="hero-time"><Clock3 size={31} /><strong>1 hour and 30 mins</strong></div>
            </div>
            <p className="hero-description">The Best Fluffy Pancakes recipe you will fall in love with. Full of tips and tricks to help you make the best pancakes… ever!</p>
            <div className="hero-actions">
              <a className="button" href="#recipes"><BookOpenCheck size={18} fill="currentColor" />Cook Now</a>
              <a className="button button-outline" href="#recipes"><span className="cloche">♨</span>Explore Recipes</a>
            </div>
          </div>
          <div className="hero-photo-wrap"><Image className="hero-photo" src="/sites/tasty/images/hero-pancakes.jpg" alt="Golden pancakes with maple syrup" width={720} height={900} priority /></div>
        </div>
      </section>

      <section className="recipes-section section-shell" id="recipes">
        <SectionHeading title="Recipes of the Week">Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.</SectionHeading>
        <div className="recipe-grid">
          {visibleRecipes.map((recipe, index) => <article className="recipe-card" key={recipe.title}>
            <a className="recipe-image" href={recipe.href}><Image src={recipe.image} alt={recipe.title} width={800} height={520} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></a>
            <div className="recipe-content">
              <div className="recipe-tags">{recipe.category.map((tag) => <button key={tag} onClick={() => setCategoryFilter(categoryFilter === tag ? null : tag)}>{tag}</button>)}</div>
              <h3><a href={recipe.href}>{recipe.title}</a></h3>
              <div className="recipe-byline"><Image src="/sites/tasty/images/chef-melissa.jpg" alt="Amie" width={42} height={42} /><span>Amie</span><i /> <span>April 16, 2021</span></div>
            </div>
            {index === 0 && query && <span className="sr-only">First search result</span>}
          </article>)}
          {visibleRecipes.length === 0 && <p className="empty-results">No recipes found. Try another search.</p>}
        </div>
        <div className="recipe-actions">
          {(categoryFilter || query) && <button className="clear-filter" onClick={() => { setCategoryFilter(null); setQuery(""); }}>Clear search and filters</button>}
          <a className="button" href="#recipes">View all Recipes</a>
        </div>
      </section>

      <section className="category-section section-shell" aria-labelledby="category-title">
        <div className="section-heading"><h2 id="category-title">Recipes By Category</h2><p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.</p></div>
        <div className="category-grid">{categories.map((category) => <a className="category-card" href="#recipes" key={category.title} aria-label={`Browse ${category.title} recipes`}>
          <Image src={category.image} alt="" width={640} height={620} sizes="(max-width: 640px) 100vw, 25vw" />
          <span className="category-count">{category.count}</span><strong>{category.title}</strong>
        </a>)}</div>
      </section>

      <section className="app-promo" id="download">
        <div className="app-image"><Image src="/sites/tasty/images/app-kitchen.jpg" alt="Tablet open to a recipe in a bright kitchen" width={1200} height={800} sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="app-copy"><FoodDoodles className="app-doodles" /><div className="app-copy-inner">
          <span className="eyebrow">Best mobile app</span><h2>Download Our App</h2>
          <p>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.</p>
          <div className="store-buttons"><a href="#newsletter" aria-label="Available on the App Store"><Apple size={26} fill="currentColor" /><span><small>Download on the</small><b>App Store</b></span></a><a href="#newsletter" aria-label="Get it on Google Play"><span className="play-triangle">▶</span><span><small>GET IT ON</small><b>Google Play</b></span></a></div>
        </div></div>
      </section>

      <section className="chefs-section" id="chefs">
        <FoodDoodles />
        <SectionHeading title="Our Qualified Chefs">Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.</SectionHeading>
        <div className="chef-grid">{chefs.map((chef) => <article className="chef-card" key={chef.name}>
          <Image className="chef-photo" src={chef.image} alt={chef.name} width={500} height={500} sizes="(max-width: 760px) 80vw, 300px" />
          <h3>{chef.name}</h3><p>Chef</p><SocialLinks />
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

      <section className="trending-strip" aria-label="Trending recipes"><div className="trending-title"><span>Trending now</span><div><button aria-label="Previous recipes" onClick={() => setTrendOffset((trendOffset + 3) % 4)}><ArrowLeft size={16} /></button><button aria-label="Next recipes" onClick={() => setTrendOffset((trendOffset + 1) % 4)}><ArrowRight size={16} /></button></div></div>
        <div className="trending-list">{["Slow Cooker Beef Bourguignon", "Topping Marzipan Tart Cheesecake Sweet Lollipop", "Fennel Slaw with Mint Vinaigrette", "Blueberry Buttermilk Pancakes"].map((title, i) => { const item = recipes[(i + trendOffset) % recipes.length]; return <a className="trending-item" href="#recipes" key={title}><Image src={i === 0 ? "/sites/tasty/images/recipe-avocado.jpg" : item.image} alt="" width={70} height={70} /><span>{title}</span></a>; })}</div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="footer-columns">
          <div><h3>Meet Tasty</h3><a href="#top">Introduction</a><a href="#recipes">Recipes</a><a href="#chefs">Our Chefs</a><a href="#community">Pricing Plans</a><a href="#community">Roadmap</a></div>
          <div><h3>Useful Links</h3><a href="#top">Introduction</a><a href="#chefs">About Us</a><a href="#download">App Features</a><a href="#footer">Cookies Policy</a><a href="#footer">Privacy Policy</a><a href="#footer">Terms &amp; Conditions</a></div>
          <div><h3>Contact Us</h3><p>Mattis ullamcorper velit sed ullamcorper.</p><p>Phone: (+63) 555 1212<br />Fax: (+63) 555 0100</p><p>Need help or have a question?<br />Contact us at: <a href="mailto:info@contact.com">info@contact.com</a></p></div>
          <div><h3>Download Our App</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Seddo eiusmod tempor incididunt ut labore et dolore magna.</p><div className="footer-store-links"><a href="#download">App Store</a><a href="#download">Google Play</a></div></div>
        </div>
        <div className="copyright">Copyright © 2025 - WordPress Theme by <a href="https://creativethemes.com/" target="_blank" rel="noreferrer">CreativeThemes</a></div>
      </footer>

    </main>
  );
}
