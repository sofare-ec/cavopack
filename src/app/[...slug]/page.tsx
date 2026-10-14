import TastyContentPage from "@/components/sites/tasty/tasty-content-page";
import { industries, products } from "@/components/sites/tasty/tasty-data";
import { productLandingContent } from "@/components/sites/tasty/product-landing-data";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["about", "industries", "contact", ...products.map((product) => product.slug), ...industries.map((industry) => industry.slug)].map((route) => ({ slug: [route] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug.join("/"));
  if (!product) return {};
  const content = productLandingContent[product.slug];
  return { title: `${content.heading} | Cavopack`, description: content.description, alternates: { canonical: `https://www.cavopack.com/${product.slug}/` } };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <TastyContentPage slug={slug} />;
}
