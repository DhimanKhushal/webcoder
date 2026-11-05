import type { PortfolioCollection } from "./portfolio";

export type PaidPlatform = "meta-ads" | "google-ads" | "linkedin-ads";
type Topic = { title: string; copy: string };
type Question = { question: string; answer: string };
type PaidPortfolioContent = {
  name: string; intro: string; previewLabel: string; overviewTitle: string; overviewIntro: string;
  services: Topic[]; formatsIntro: string; workIntro: string; journeyTitle: string; journeyIntro: string;
  journey: Topic[]; process: Topic[]; questions: Question[]; enquiry: string; related: PortfolioCollection["slug"][];
};

export const paidPortfolios: Record<PaidPlatform, PaidPortfolioContent> = {
  "meta-ads": {
    name: "Meta Ads",
    intro: "Facebook and Instagram advertising, from the first creative to the campaign journey. Explore formats, audience thinking and the work behind a paid social campaign.",
    previewLabel: "Facebook & Instagram creative",
    overviewTitle: "Creative meets audience.",
    overviewIntro: "A paid social campaign needs more than a good-looking post. The message, audience and destination should work towards the same goal.",
    services: [
      { title: "Creative direction", copy: "Shape the offer, message and visual approach for the people the campaign is intended to reach." },
      { title: "Audience approach", copy: "Plan how to introduce the brand, reach relevant people and reconnect with those who have already shown interest." },
      { title: "Campaign setup & review", copy: "Connect the objective, placements and enquiry journey, then review the available reporting against that brief." },
    ],
    formatsIntro: "Switch between feed, story and Facebook placements to understand how a creative fits its format. The frames are ready for approved campaign screenshots.",
    workIntro: "This space is reserved for client campaign work: the offer, the audience, the creative and the reporting period together. Approved client assets have not been supplied yet.",
    journeyTitle: "After the ad click.",
    journeyIntro: "A campaign should make sense beyond the first impression. Here is how we think about the path from attention to enquiry.",
    journey: [
      { title: "Make the offer clear", copy: "Give the viewer a reason to care and one clear next step, whether the ad introduces a brand, a service or a specific promotion." },
      { title: "Match the destination", copy: "Carry the same message through to the page, form or conversation that follows the click." },
      { title: "Learn from the response", copy: "Use creative feedback and available conversion data to decide what to test and refine next." },
    ],
    process: [
      { title: "Agree the brief", copy: "Define the audience, offer, objective and the action a customer should take." },
      { title: "Create & adapt", copy: "Develop the message and creative variations for the chosen placements." },
      { title: "Launch & check", copy: "Check the destination, tracking requirements and campaign setup before publishing." },
      { title: "Review & improve", copy: "Read the results in context and refine the creative or campaign approach." },
    ],
    questions: [
      { question: "Does this cover both Facebook and Instagram?", answer: "Yes. This portfolio brings together Facebook and Instagram advertising, with creative adapted to relevant placements such as feeds and stories." },
      { question: "Do you create the advertising artwork?", answer: "Creative direction, copy and formats can be included in the brief. We confirm the assets needed and what will be created before the work starts." },
      { question: "Where are the client results?", answer: "Campaign screenshots and source reports are pending from the team. We will publish results with the reporting period and campaign context once those records have been approved." },
      { question: "What do you need to discuss a campaign?", answer: "Your business, the offer, the audience you want to reach and the action you want people to take. Share any existing page, creative or campaign history that could help shape the brief." },
    ],
    enquiry: "Tell us about the offer, the audience and what you want a campaign to help people do.",
    related: ["google-ads", "linkedin-ads", "smo"],
  },
  "google-ads": {
    name: "Google Ads",
    intro: "Search, display and YouTube advertising with a clear path from query or impression to your website. Explore the formats and the thinking behind a relevant campaign.",
    previewLabel: "Google campaign creative",
    overviewTitle: "Meet the right intent.",
    overviewIntro: "Google campaigns connect what people are looking for with a relevant offer. The keywords, ad message and landing page need to tell one clear story.",
    services: [
      { title: "Search campaigns", copy: "Organise relevant queries around the services and offers the business wants to be found for." },
      { title: "Display & video", copy: "Plan visual messages for display and YouTube formats, with creative suited to the placement and audience." },
      { title: "Landing pages & tracking", copy: "Connect the ad to a focused destination and agree how meaningful actions will be measured." },
    ],
    formatsIntro: "Explore search, display and YouTube formats. Each preview shows where the ad message and creative belong; approved campaign examples will replace the placeholders.",
    workIntro: "A useful Google Ads example should show the search theme or audience, the ad, the destination and the reporting period. Client campaign screenshots and reports are currently pending.",
    journeyTitle: "From query to enquiry.",
    journeyIntro: "The click is one part of the journey. We also consider what the person expects to find when they arrive.",
    journey: [
      { title: "Start with the search", copy: "Separate different needs and offers so the campaign can answer the intent behind a relevant query." },
      { title: "Keep the promise on the page", copy: "Match the ad message to the page content and make the next action easy to understand." },
      { title: "Measure useful actions", copy: "Agree which enquiries or other actions matter, then review tracking and reporting in that context." },
    ],
    process: [
      { title: "Research intent", copy: "Understand the offer, search themes, locations and customer questions." },
      { title: "Build the campaign", copy: "Organise campaigns and ad groups, develop copy and select relevant formats." },
      { title: "Check the journey", copy: "Review landing pages, enquiry paths and the conversion tracking requirements." },
      { title: "Review the evidence", copy: "Assess search terms, creative response and relevant actions before making changes." },
    ],
    questions: [
      { question: "Is Google Ads the same as SEO?", answer: "They are different services. Google Ads is paid advertising; SEO focuses on organic search visibility. Both benefit from useful pages and a clear customer journey." },
      { question: "Does this include display and YouTube?", answer: "Those formats are included in the portfolio structure. The choice of channels depends on the campaign brief, available creative and what the business needs to achieve." },
      { question: "Can you work with our existing landing page?", answer: "Yes. We can review the existing page against the campaign message, customer questions and intended action, then agree any changes needed." },
      { question: "Can I see verified campaign results?", answer: "The reporting area is ready, but approved campaign records are still pending. Results will be shown with the source reporting period and relevant context when supplied." },
    ],
    enquiry: "Share your website, the services you want to advertise and the customer action that matters most.",
    related: ["seo", "meta-ads", "websites"],
  },
  "linkedin-ads": {
    name: "LinkedIn Ads",
    intro: "Advertising for professional audiences. Explore how the business offer, audience and campaign format come together across LinkedIn content, messages and lead generation.",
    previewLabel: "LinkedIn campaign creative",
    overviewTitle: "A relevant business offer.",
    overviewIntro: "A professional audience needs a reason to engage. The offer should speak to a real business need and make the next step clear.",
    services: [
      { title: "Audience planning", copy: "Define the roles, organisations or professional needs that make the offer relevant, then shape the campaign around that audience." },
      { title: "Sponsored content & messages", copy: "Develop the campaign message and creative for content-led or direct-message placements, as appropriate to the brief." },
      { title: "Lead generation journey", copy: "Connect an interesting offer to a clear form or landing page and agree how enquiries will be followed up." },
    ],
    formatsIntro: "Switch between sponsored content, message and lead generation previews. The examples are labelled placeholders until the team supplies approved campaign material.",
    workIntro: "Each client campaign will be shown with its professional audience, business offer, creative and lead journey. Approved LinkedIn campaign records are still pending.",
    journeyTitle: "Make the next step clear.",
    journeyIntro: "Business campaigns often need more context before someone is ready to enquire. We look at the offer and the follow-up as well as the ad.",
    journey: [
      { title: "Give the audience a reason", copy: "Build the message around a relevant business need, with an offer that makes sense for the intended professional audience." },
      { title: "Keep the enquiry focused", copy: "Use a clear form or landing page, and request the information needed to have a useful next conversation." },
      { title: "Plan the follow-up", copy: "Agree what happens after someone submits their details, and how the quality of those enquiries will be reviewed." },
    ],
    process: [
      { title: "Define the audience", copy: "Clarify the business problem, intended professionals and the offer they should see." },
      { title: "Develop the message", copy: "Prepare the content, creative and format around that audience's needs." },
      { title: "Connect the journey", copy: "Check the form or landing page and the route to a useful follow-up." },
      { title: "Review lead context", copy: "Look beyond a submission count and discuss relevance, quality and the next campaign decision." },
    ],
    questions: [
      { question: "What makes this different from Meta Ads?", answer: "LinkedIn campaigns are framed around professional audiences and business offers. We shape the message, targeting approach and enquiry journey to fit that context." },
      { question: "Do you work on lead generation campaigns?", answer: "Lead generation can be part of the brief. We agree the offer, the information to collect and the follow-up process before deciding which format to use." },
      { question: "Can we use an existing business offer?", answer: "Yes. Share the service, content or offer you already have. We can assess how clearly it fits the intended audience and what creative or landing-page work is needed." },
      { question: "Where can I see campaign outcomes?", answer: "The campaign-work area is ready for approved examples. Client assets and source reports are pending, so no lead volumes, costs or outcome figures are presented as verified results." },
    ],
    enquiry: "Tell us who you want to reach, the business offer and what a useful enquiry looks like for your team.",
    related: ["meta-ads", "google-ads", "websites"],
  },
};
