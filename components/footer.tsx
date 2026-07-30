import Link from "next/link";
import { ArrowUpRight, Braces } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="logo">
              <span className="logo-mark"><Braces size={18} /></span>
              webcodder
            </div>
            <h2>Have a query? Drop us an email.</h2>
            <a className="footer-email" href="mailto:opt.webcodder@gmail.com">
              opt.webcodder@gmail.com <ArrowUpRight size={22} />
            </a>
          </div>
          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="tel:+918298295419">+91-829-829-5419</a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SCO+114-115+2nd+Floor+Sector+34-A+Chandigarh+Punjab+160022"
                target="_blank"
                rel="noreferrer"
              >
                SCO 114–115, 2nd Floor,<br />
                Sector 34-A, Chandigarh,<br />
                Punjab 160022
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Webcodder. All rights reserved.</span>
          <span>Built with strategy, pixels & clean code.</span>
        </div>
      </div>
    </footer>
  );
}
