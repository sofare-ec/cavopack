import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { TastyShell } from "./tasty-shell";
import { categorySlugs, categoryTitle, recipeHref, tastyRecipes, type TastyRecipe } from "./tasty-data";
import { LocalPreviewForm, PrintRecipeButton } from "./tasty-preview-form";

const excerptText = "Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.";

function Breadcrumbs({ parts }: { parts: { label: string; href?: string }[] }) {
  return <div className="tasty-breadcrumbs"><Link href="/">Home</Link>{parts.map((part, i) => <span key={`${part.label}-${i}`}> / {part.href ? <Link href={part.href}>{part.label}</Link> : part.label}</span>)}</div>;
}

function PageIntro({ title, children = excerptText }: { title: string; children?: ReactNode }) {
  return <section className="tasty-page-intro"><span className="eyebrow">Cavopack</span><h1>{title}</h1><div>{children}</div></section>;
}

function RecipeGrid({ recipes }: { recipes: TastyRecipe[] }) {
  return <div className="recipe-grid">{recipes.map((recipe) => <article className="recipe-card" key={recipe.slug}>
    <Link className="recipe-image" href={recipeHref(recipe)}><Image src={recipe.image} alt={recipe.title} width={800} height={530} /></Link>
    <div className="recipe-content"><div className="recipe-tags">{recipe.category.map((cat) => <Link key={cat} href={`/category/${cat.toLowerCase()}/`}>{cat}</Link>)}</div>
      <h2><Link href={recipeHref(recipe)}>{recipe.title}</Link></h2><Link className="recipe-byline" href="/author/admin_tasty/"><Image src="/sites/tasty/images/autor-1-150x150.png" alt="" width={42} height={42} /><span>Amie</span><i /><span>{recipe.date}</span></Link>
    </div>
  </article>)}</div>;
}

function ArchivePage({ title, items, page = 1 }: { title: string; items: TastyRecipe[]; page?: number }) {
  return <><PageIntro title={title}><><Breadcrumbs parts={[{ label: title }]} />Browse all articles from this section. Each card opens its own local detail page.</></PageIntro>
    <section className="tasty-archive"><RecipeGrid recipes={items} />
      {title === "Recipes" && <nav className="tasty-pagination" aria-label="Recipe pages">{page > 1 && <Link href="/recipes/">← Newer posts</Link>}<Link className={page === 1 ? "is-current" : ""} href="/recipes/">1</Link><Link className={page === 2 ? "is-current" : ""} href="/recipes/page/2/">2</Link>{page === 1 && <Link href="/recipes/page/2/">Older posts →</Link>}</nav>}
    </section></>;
}

function RecipeArticle({ recipe }: { recipe: TastyRecipe }) {
  return <><PageIntro title={recipe.title}><><Breadcrumbs parts={[{ label: "Recipes", href: "/recipes/" }, { label: recipe.title }]} />{recipe.excerpt}</></PageIntro>
    <article className="tasty-article">
      <div className="article-meta"><Link href={`/category/${recipe.category[0].toLowerCase()}/`}>{recipe.category.join(", ")}</Link><span>By <Link href="/author/admin_tasty/">Amie</Link></span><time>{recipe.date}</time><Link href="#comments">Leave a comment</Link></div>
      <figure className="article-cover"><Image src={recipe.image} alt={recipe.title} width={1100} height={720} priority /></figure>
      <div className="article-body">
        <section className="recipe-box" id="wpzoom-recipe-card"><div className="recipe-box-heading"><Image src={recipe.image} alt="" width={74} height={74} /><div><h2>{recipe.title}</h2><p>Recipe by Amie</p></div><PrintRecipeButton /></div>
          <div className="recipe-facts"><span>Course <b>{recipe.course}</b></span>{recipe.cuisine && <span>Cuisine <b>{recipe.cuisine}</b></span>}<span>Difficulty <b>{recipe.difficulty}</b></span><span>Servings <b>4 servings</b></span><span>Prep time <b>30 minutes</b></span><span>Cooking time <b>40 minutes</b></span><span>Calories <b>300 kcal</b></span></div>
          <div className="recipe-box-columns"><section><h3>Ingredients</h3><ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>Directions</h3><ol>{recipe.directions.map((item) => <li key={item}>{item}</li>)}</ol></section></div>
          <p className="template-note">This page preserves the recipe text shown in the source template. Verify ingredients and methods before using them.</p>
        </section>
      </div>
      <section className="tasty-comments" id="comments">{recipe.slug === "hello-world" && <article className="sample-comment" id="comment-2"><h3><Link href="/author/admin_tasty/">A WordPress Commenter</Link></h3><Link href="#comment-2">April 13, 2021 / 8:23 PM</Link><p>Hi, this is a comment.</p><Link href="#respond">Reply</Link></article>}<h2 id="reply-title">Leave a Reply</h2><p>Your email address will not be published. Required fields are marked *</p><div id="respond"><LocalPreviewForm kind="comment" /></div></section>
      <nav className="article-related"><Link href="/recipes/">← All recipes</Link><Link href={`/category/${recipe.category[0].toLowerCase()}/`}>More in {recipe.category[0]} →</Link></nav>
    </article></>;
}

function AboutPage() {
  return <><PageIntro title="About">{excerptText}</PageIntro><Breadcrumbs parts={[{ label: "About" }]} />
    <section className="tasty-about tasty-section"><div className="about-story"><div><span className="eyebrow">Our story</span><h2>Mauris Imperdiet Orci Dapibus Commodo Morbi in Faucibus.</h2><p>{excerptText} Etiam elementum euismod commodo.</p><p>Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</p><Link className="button" href="/recipes/">Browse Products</Link></div><Image src="/sites/tasty/images/chef-big.png" alt="Cook preparing food" width={620} height={620} /></div>
      <div className="about-video"><Image src="/sites/tasty/images/video-cover.jpg" alt="Cooking class preview" width={1200} height={620} /><div><h2>There are a variety of places where you can experience a cooking class</h2><p>{excerptText}</p><Link className="button" href="/recipes/">Browse Products</Link></div></div>
      <section className="about-chefs"><h2>Our Qualified Chefs</h2><p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non.</p><div className="chef-grid">{["Nick Paterson", "Jacob Guerrero", "Melissa Prey"].map((name, i) => <article className="chef-card" key={name}><Image className="chef-photo" src={`/sites/tasty/images/chief-${i + 1}.jpg`} alt={name} width={500} height={500} /><h3>{name}</h3><p>Chef</p></article>)}</div></section>
      <section className="grandma-panel"><Image src="/sites/tasty/images/grandma-avatar.png" alt="Grandma's Recipes" width={150} height={150} /><div><span>By Dorothy Valdez</span><h2>Grandma’s Recipes</h2><p>Relive the golden days with nostalgic recipes straight from her kitchen.</p><Link href="/recipes/">Explore all recipes</Link></div></section>
      <section className="about-testimonials"><h2>Testimonials</h2><p>Fusce dignissim blandit justo, eget elementum risus tristique.</p><div className="testimonial-grid">{["Ethan Lucas", "Sara Freeman", "Kelly Carpenter"].map((name, i) => <article key={name}><Image src={`/sites/tasty/images/user-${i + 1}.png`} alt="" width={72} height={72} /><p>Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet.</p><strong>{name}</strong></article>)}</div></section>
    </section></>;
}

function IndustriesPage() {
  return <><PageIntro title="Industries">Industry information about Cavopack’s packaging solutions will be added here.</PageIntro><Breadcrumbs parts={[{ label: "Industries" }]} />
    <section className="tasty-empty"><h2>Industry details are coming soon.</h2></section>
  </>;
}

function GiftBoxesPage() {
  return <><PageIntro title="gift boxes" /><Breadcrumbs parts={[{ label: "gift boxes" }]} />
    <section className="tasty-article">
      <figure className="article-cover"><Image src="/sites/tasty/images/product-type-01.webp" alt="Cavopack red custom gift box" width={800} height={530} priority /></figure>
      <div className="article-body"><p>Customizable rigid gift boxes with consistent quality for bulk orders.</p><a className="button" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer">Get Quote</a></div>
    </section>
  </>;
}

function ContactPage() {
  return <><PageIntro title="Contact">{excerptText}</PageIntro><Breadcrumbs parts={[{ label: "Contact" }]} />
    <section className="tasty-contact tasty-section"><div className="contact-details"><article><h2>Physical Address</h2><p>304 North Cardinal St.<br />Dorchester Center, MA 02124</p></article><article><h2>Email Address</h2><p>info@company.com<br />contact@company.com</p></article><article><h2>Phone Numbers</h2><p>1-555-123-4567<br />1-800-123-4567</p></article><p className="template-note">These address and phone details are sample content from the original demo page, not verified Cavopack contact details.</p></div>
      <div className="contact-copy"><h2>Dolor consectetur adipiscing</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.</p><div className="contact-highlights"><h3>Mauris nunc congue suscipit</h3><p>Nullam condimentum leo id elit sagittis auctor</p><h3>Dolor sit amet consectetur adipiscing</h3></div></div>
    </section><section className="tasty-contact-form" id="message"><div><span className="eyebrow">Get in touch</span><h2>Get In Touch</h2><p>Nullam condimentum leo id elit sagittis auctor.</p></div><LocalPreviewForm kind="contact" /></section>
  </>;
}

function NotFoundPage() {
  return <div className="tasty-empty"><h1>Page not found</h1><p>Choose a local page from the menu.</p><Link className="button" href="/recipes/">Browse Products</Link></div>;
}

export default function TastyContentPage({ slug }: { slug: string[] }) {
  let content: ReactNode;
  const path = slug.join("/");
  if (path === "recipes") content = <ArchivePage title="Recipes" items={tastyRecipes.slice(0, 9)} />;
  else if (path === "recipes/page/2") content = <ArchivePage title="Recipes" items={tastyRecipes.slice(9)} page={2} />;
  else if (path === "about") content = <AboutPage />;
  else if (path === "industries") content = <IndustriesPage />;
  else if (path === "contact") content = <ContactPage />;
  else if (path === "gift-boxes") content = <GiftBoxesPage />;
  else if (path === "author/admin_tasty") content = <ArchivePage title="Articles by Amie" items={tastyRecipes} />;
  else if (slug[0] === "category" && slug.length === 2 && categorySlugs.includes(slug[1] as typeof categorySlugs[number])) {
    const category = slug[1];
    content = <ArchivePage title={`Category ${categoryTitle(category)}`} items={tastyRecipes.filter((recipe) => recipe.category.some((tag) => tag.toLowerCase() === category))} />;
  } else {
    const recipe = tastyRecipes.find((item) => item.slug === slug.at(-1));
    content = recipe ? <RecipeArticle recipe={recipe} /> : <NotFoundPage />;
  }
  return <TastyShell>{content}</TastyShell>;
}
