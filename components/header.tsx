"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-shell">
          <Link href="/" className="logo" aria-label="Webcodder home">
            <Image
              className="brand-logo-image"
              src="/webcodder-logo.png"
              alt="Webcodder Digital Marketing Agency"
              width={2508}
              height={627}
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="nav-cta">
            Start a project <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-button"
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
          className={`mobile-nav ${open ? "open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
