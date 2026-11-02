"use client";

import { tw } from "@/lib/tailwind";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={tw("site-header")}>
      <div className={tw("container")}>
        <div className={tw("nav-shell")}>
          <Link href="/" className={tw("logo")} aria-label="Webcodder home" onClick={() => setOpen(false)}>
            <Image
              className={tw("brand-logo-image")}
              src="/webcodder-logo.png"
              alt="Webcodder Digital Marketing Agency"
              width={2508}
              height={627}
              priority
            />
          </Link>
          <nav className={tw("desktop-nav")} aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={tw(`nav-link ${pathname === link.href ? "active" : ""}`)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className={tw("nav-cta")}>
            Start a project <ArrowUpRight size={15} />
          </Link>
          <button
            className={tw("menu-button")}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className={tw(`mobile-nav ${open ? "open" : ""}`)}
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
