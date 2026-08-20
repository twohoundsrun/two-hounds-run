import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Custom Data Tools & Dashboards | Two Hounds Run",
  description: "Custom dashboards, historical archives, data cleanup, and sports-data tools built around real questions.",
};

export default function DataToolsPage() {
  return <ServicePage
    eyebrow="Custom data tools & dashboards"
    title="Turn scattered data into something people can use."
    intro="Custom dashboards, historical archives, data cleanup, and sports tools for organizations with important information trapped in exports, APIs, old files, or generic software."
    audience="Leagues, organizations, and teams that have data but lack a clear, reliable way to explore it, explain it, or keep it useful over time."
    problems={["Historical records are spread across seasons, files, or platforms.", "Generic dashboards do not answer the questions people actually ask.", "Exports are inconsistent, duplicated, or difficult to trust.", "Useful analysis requires too much manual cleanup."]}
    deliverables={[{ title: "Custom dashboard", copy: "A focused interface for the metrics, comparisons, and decisions that actually matter." }, { title: "Historical archive", copy: "Organized records that preserve years of activity in one searchable home." }, { title: "Data cleanup", copy: "Validated, consistent information ready for analysis, reporting, or migration." }, { title: "Sports & fantasy tool", copy: "League sites, stat trackers, odds research, and purpose-built fan experiences." }]}
    examples={["We have years of records but no useful way to explore them.", "The platform stores our data, but it does not tell our story.", "These exports never match and we do not trust the totals.", "We need a dashboard built around our questions, not generic charts."]}
    faqs={[{ question: "Can you work with APIs and old exports?", answer: "Yes. The first phase is understanding access, coverage, inconsistencies, and what must be validated before presentation." }, { question: "Does every project need a complex database?", answer: "No. The smallest reliable structure that supports the outcome is usually the best choice." }, { question: "Can the tool grow over time?", answer: "Yes. Projects can begin with a focused dataset or workflow and expand once the foundation proves useful." }]}
    subject="Custom data tool project"
  />;
}
