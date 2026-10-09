"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export function TastyHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const productActive = pathname.startsWith("/recipes") || pathname.startsWith("/category/") || !!pathname.match(/^\/20\d\d\//);
  const nav = [
    ["Home", "/", pathname === "/"],
    ["Products", "/#products", !!productActive],
    ["Industries", "/#industry", pathname.startsWith("/industries/")],
    ["About", "/about/", pathname.startsWith("/about/")],
    ["Contact", "/contact/", pathname.startsWith("/contact/")],
  ] as const;
  return <header className="site-header">
    <div className="brand-row"><Link className="brand" href="/" aria-label="Cavopack home"><span>Cavopack</span></Link><span className="brand-qualifier">China-Based Manufacturer of Luxury Gift Boxes and Paper Packaging</span></div>
    <nav className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
      <div className="nav-social"><span>Custom packaging for your brand</span></div>
      <button className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <div className="nav-links">{nav.map(([label, href, active]) => <Link key={label} className={active ? "active" : ""} href={href} onClick={(event) => {
        setOpen(false);
        const sectionId = href.startsWith("/#") ? href.slice(2) : "";
        const section = pathname === "/" && sectionId ? document.getElementById(sectionId) : null;
        if (section && window.location.hash === `#${sectionId}`) {
          event.preventDefault();
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}>{label}</Link>)}<a className="nav-whatsapp" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
    </nav>
  </header>;
}

export function TastyFooter() {
  return <>
    <footer className="site-footer" id="footer"><div className="footer-columns">
      <div><h3>Cavopack</h3><Link href="/">Introduction</Link><Link href="/recipes/">Products</Link><Link href="/about/">About us</Link></div>
      <div><h3>Useful Links</h3><Link href="/recipes/">All products</Link><Link href="/category/aperitives/">Aperitives</Link><Link href="/category/pizzas/">Pizzas</Link><Link href="/category/salads/">Salads</Link><Link href="/category/deserts/">Deserts</Link><Link href="/category/soups/">Soups</Link></div>
      <div><h3>Contact Us</h3><p>Mattis ullamcorper velit sed ullamcorper.</p><p>Phone: (+63) 555 1212<br />Fax: (+63) 555 0100</p><p>Need help or have a question?<br />Contact us at: <Link href="/contact/">Contact page</Link></p></div>
      <div><h3>Explore</h3><p>Browse the pages and categories in this local site copy.</p><Link href="/author/admin_tasty/">Articles by Amie</Link><Link href="/contact/">Contact and enquiries</Link></div>
    </div><div className="copyright">Copyright © 2025 - Cavopack</div></footer>
  </>;
}

export function TastyShell({ children }: { children: ReactNode }) {
  return <main className="tasty-site"><TastyHeader />{children}<TastyFooter /></main>;
}
