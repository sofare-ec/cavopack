import TastyContentPage from "@/components/sites/tasty/tasty-content-page";
import { industries, products } from "@/components/sites/tasty/tasty-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["about", "industries", "contact", ...products.map((product) => product.slug), ...industries.map((industry) => industry.slug)].map((route) => ({ slug: [route] }));
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <TastyContentPage slug={slug} />;
}
