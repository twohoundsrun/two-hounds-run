import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Workflow Automation | Two Hounds Run",
  description: "Right-sized workflow automation for repetitive spreadsheets, reporting, imports, and everyday operations.",
};

export default function AutomationPage() {
  return <ServicePage
    eyebrow="Workflow automation"
    title="Spend less time repeating the same work."
    intro="Practical automation for small teams and organizations that have outgrown manual spreadsheets, copy-and-paste reporting, and disconnected daily processes."
    audience="People who know a process works—but also know it takes too long, depends on one person, or creates too many avoidable mistakes."
    problems={["The same information is copied between files or systems.", "Recurring reports take hours to assemble.", "A spreadsheet has become too fragile or complicated.", "Important steps live only in one person's memory."]}
    deliverables={[{ title: "Spreadsheet workflow", copy: "A cleaner workbook or lightweight system with validation, formulas, and repeatable outputs." }, { title: "Data import", copy: "Turn recurring exports into organized records without rebuilding the process each time." }, { title: "Scheduled reporting", copy: "Generate the information people need on a predictable schedule and in a useful format." }, { title: "Operations tool", copy: "A focused internal tool built around the actual steps your team follows." }]}
    examples={["Every Monday I spend two hours rebuilding the same report.", "We copy data between three spreadsheets and mistakes keep happening.", "Only one person knows how this process works.", "I know this can be automated, but I do not know where to start."]}
    faqs={[{ question: "Do I need to know what software should be used?", answer: "No. Describe the current steps, inputs, and desired result. The technology choice comes after the workflow is understood." }, { question: "Do you replace our existing systems?", answer: "Often the best solution improves the tools you already use or connects gaps between them. A total replacement is not the default." }, { question: "Can we start small?", answer: "Yes. A focused first workflow is often the safest way to prove value before expanding." }]}
    subject="Workflow automation project"
  />;
}
