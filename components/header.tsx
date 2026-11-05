"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ServicesMenu } from "./services-menu";
import { PortfolioMenu } from "./portfolio-menu";
import styles from "./services-menu.module.css";

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
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "portfolio" | null>(null);

  function changeDropdown(menu: "services" | "portfolio", nextOpen: boolean) {
    setOpenDropdown((current) => nextOpen ? menu : current === menu ? null : current);
  }

  function closeMobileNavigation() {
    setOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenDropdown(null);
      }
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <div className={`nav-shell ${styles.shell}`}>
          <Link href="/" className="logo" aria-label="Webcodder home">
            <Image
              className="brand-logo-image"
              src="/webcodder-logo.png"
              unoptimized
              alt="Webcodder"
              width={1000}
              height={250}
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => link.href === "/services" ? (
              <ServicesMenu key={`${pathname}-services`} active={pathname === "/services"} open={openDropdown === "services"} onOpenChange={(value) => changeDropdown("services", value)} />
            ) : link.href === "/portfolio" ? (
              <PortfolioMenu key={`${pathname}-portfolio`} pathname={pathname} active={pathname === "/portfolio" || pathname.startsWith("/portfolio/")} open={openDropdown === "portfolio"} onOpenChange={(value) => changeDropdown("portfolio", value)} />
            ) : (
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
            onClick={() => {
              setOpen((value) => !value);
              setOpenDropdown(null);
            }}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          data-lenis-prevent
          className={`mobile-nav ${styles.mobileNavigation} ${open ? "open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          {links.map((link) => link.href === "/services" ? (
            <ServicesMenu
              key={`${pathname}-${open}-services`}
              mobile
              active={pathname === "/services"}
              open={open && openDropdown === "services"}
              onOpenChange={(value) => changeDropdown("services", value)}
              onNavigate={closeMobileNavigation}
            />
          ) : link.href === "/portfolio" ? (
            <PortfolioMenu
              key={`${pathname}-${open}-portfolio`}
              mobile
              pathname={pathname}
              active={pathname === "/portfolio" || pathname.startsWith("/portfolio/")}
              open={open && openDropdown === "portfolio"}
              onOpenChange={(value) => changeDropdown("portfolio", value)}
              onNavigate={closeMobileNavigation}
            />
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileNavigation}
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
