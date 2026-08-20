import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Small-Business Websites | Two Hounds Run",
  description: "Clear, mobile-friendly websites for local businesses, contractors, services, and organizations.",
};

export default function WebsitesPage() {
  return <ServicePage
    eyebrow="Websites for small businesses"
    title="A website that makes your business easier to trust."
    intro="Clear, mobile-friendly websites for contractors, local services, organizations, and independent businesses that need a more credible home online."
    audience="Businesses doing good work whose current website is outdated, unclear, difficult to update—or missing entirely."
    problems={["Customers cannot quickly understand what you do or where you serve.", "The site looks dated or works poorly on phones.", "Important calls, quote requests, or inquiries are getting lost.", "You depend entirely on social media or a generic directory listing."]}
    deliverables={[{ title: "Service website", copy: "A focused website that explains what you do, builds trust, and makes the next step obvious." }, { title: "Website refresh", copy: "A clearer structure and stronger presentation for an existing web presence that has fallen behind." }, { title: "Landing page", copy: "A single-purpose page for a service, campaign, event, or new offer." }, { title: "Ongoing improvements", copy: "Practical updates, new pages, content changes, and performance cleanup after launch." }]}
    examples={["My business is good, but my website does not look like it.", "Customers keep calling with questions the website should answer.", "I need something professional without a huge agency process.", "Our current site is hard to use on a phone."]}
    faqs={[{ question: "Do I need finished copy and photos?", answer: "No. Existing notes, service lists, rough ideas, and usable photos are enough to begin organizing the right message." }, { question: "Can you work with an existing site?", answer: "Yes. The first step is deciding whether a focused refresh or a cleaner rebuild makes more sense." }, { question: "How much does a website cost?", answer: "Scope depends on the number of pages, content needs, integrations, and launch support. We define the useful version first, then price that work clearly." }]}
    subject="Small-business website project"
  />;
}
