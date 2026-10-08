import TastyContentPage from "@/components/sites/tasty/tasty-content-page";
import { tastyRecipes } from "@/components/sites/tasty/tasty-data";

const fixedRoutes = [
  "recipes",
  "recipes/page/2",
  "about",
  "industries",
  "contact",
  "GIFT BOXES",
  "author/admin_tasty",
  "category/aperitives",
  "category/pizzas",
  "category/salads",
  "category/deserts",
  "category/soups",
];

const recipeRoutes = tastyRecipes.map((recipe) => {
  const day = recipe.date.includes("13") ? "13" : recipe.date.includes("14") ? "14" : "16";
  return `2021/04/${day}/${recipe.slug}`;
});

export const dynamicParams = false;

export function generateStaticParams() {
  return [...fixedRoutes, ...recipeRoutes].map((route) => ({ slug: route.split("/") }));
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <TastyContentPage slug={slug} />;
}
