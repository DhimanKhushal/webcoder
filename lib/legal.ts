/**
 * Legal page content.
 *
 * DRAFT NOTICE — these documents are plain-language drafts written from how the
 * site actually behaves. They are not legal advice and need review by a qualified
 * lawyer before launch, in particular the governing-law section.
 *
 * The Privacy Policy is deliberately not here yet. It has to state where form
 * submissions go, and at the time of writing the contact, newsletter and project
 * scope forms do not send their data anywhere. Write it once they are wired up.
 */

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  summary: string;
  /** ISO date for the <time> element. */
  updatedOn: string;
  updatedLabel: string;
  sections: LegalSection[];
}

export const termsAndConditions: LegalDocument = {
  eyebrow: "Legal",
  title: "Terms & Conditions",
  summary:
    "The terms that apply when you use this website. Client projects are covered separately, by the written agreement for that project.",
  updatedOn: "2026-10-26",
  updatedLabel: "26 October 2026",
  sections: [
    {
      id: "about-these-terms",
      heading: "About these terms",
      paragraphs: [
        "This website is operated by Webcodder, a digital agency based at SCO 114–115, 2nd Floor, Sector 34-A, Chandigarh, Punjab 160022, India. In these terms, “we”, “us” and “our” mean Webcodder, and “you” means anyone using the site.",
        "By using this website you agree to these terms. If you do not agree with them, please do not use the site.",
      ],
    },
    {
      id: "using-this-website",
      heading: "Using this website",
      paragraphs: ["You may browse the site and share links to it. When you do, you agree not to:"],
      list: [
        "use the site for anything unlawful, or in a way that infringes anyone else's rights;",
        "attempt to gain unauthorised access to the site, its hosting, or any connected system;",
        "interfere with the site's operation, including by introducing malicious code or placing an unreasonable load on it;",
        "submit information through the site that is false, or that belongs to someone else without their permission.",
      ],
    },
    {
      id: "information-on-this-site",
      heading: "Information on this site",
      paragraphs: [
        "The content on this site, including service descriptions, typical timelines, process outlines and case studies, is general information about how we work. It is not a quote, an offer or a guarantee of any result.",
        "Anything produced by interactive tools on the site, such as the project scope builder and its suggested timelines, team or budget ranges, is an indicative starting point for a conversation. It is not binding on either side.",
        "We work to keep the site accurate and current, but we do not promise that every page is complete, error-free or up to date at all times.",
      ],
    },
    {
      id: "project-engagements",
      heading: "Project engagements",
      paragraphs: [
        "A project with us begins only once both sides have agreed a written proposal or contract. That document sets out the scope, fees, timeline, ownership of the work produced, confidentiality and any other terms specific to the project.",
        "If anything in that agreement conflicts with these website terms, the project agreement takes precedence for that project.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "The design, text, graphics, code and other material on this site belong to Webcodder or are used with permission. You may not copy, republish or reuse them commercially without our written consent, beyond what the law otherwise allows.",
        "Client names, logos, screenshots and other work shown in our portfolio and case studies remain the property of their respective owners.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-party links and services",
      paragraphs: [
        "This site links to, and in places embeds, services run by other companies, including Google Maps and social networks. Those services are governed by their own terms and privacy policies. We are not responsible for their content or for how they operate.",
      ],
    },
    {
      id: "liability",
      heading: "Disclaimer and limitation of liability",
      paragraphs: [
        "This website is provided on an “as is” and “as available” basis. To the extent permitted by law, we exclude all warranties about the site, including that it will be uninterrupted, secure or free of errors.",
        "To the extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of, or inability to use, this website. Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. The date at the top of this page shows when they last changed. Continuing to use the site after an update means you accept the revised terms.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of India. Any dispute arising from them or from your use of this website is subject to the exclusive jurisdiction of the courts at Chandigarh.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "Questions about these terms can be sent to opt.webcodder@gmail.com, or by phone on +91-829-829-5419. Our office is at SCO 114–115, 2nd Floor, Sector 34-A, Chandigarh, Punjab 160022.",
      ],
    },
  ],
};
