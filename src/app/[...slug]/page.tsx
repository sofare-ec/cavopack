import TastyContentPage from "@/components/sites/tasty/tasty-content-page";
import { industries, products } from "@/components/sites/tasty/tasty-data";
import { productLandingContent } from "@/components/sites/tasty/product-landing-data";
import { industryLandingContent } from "@/components/sites/tasty/industry-landing-data";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["about", "industries", "contact", ...products.map((product) => product.slug), ...industries.map((industry) => industry.slug)].map((route) => ({ slug: [route] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const product = products.find(item => item.slug === path);
  const industry = industries.find(item => item.slug === path);
  const content = product ? productLandingContent[path] : industry ? industryLandingContent[path] : undefined;
  if (content) return { title: `${content.heading} | Cavopack`, description: content.description, alternates: { canonical: `https://www.cavopack.com/${path}/` } };
  if (path === "industries") return { title: "Packaging by Industry | Cavopack", description: "Explore custom packaging ideas for cosmetics, jewelry, bakery, clothing, candles, perfume, e-commerce and gift shops.", alternates: { canonical: "https://www.cavopack.com/industries/" } };
  return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <TastyContentPage slug={slug} />;
}
