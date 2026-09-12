import type { Metadata } from "next";
import ProjectCaseStudy from "../../components/project-case-study";

export const metadata: Metadata = {
  title: "Keystone Beat Case Study | Two Hounds Run",
  description: "How Two Hounds Run is building a focused Pennsylvania sports desk around live data and a controlled editorial workflow.",
};

export default function KeystoneBeatCaseStudy() {
  return <ProjectCaseStudy
    eyebrow="Case study · Pennsylvania sports platform"
    title="Keystone"
    titleAccent="Beat"
    intro="A focused Pennsylvania sports desk that brings the teams, scores, schedules, odds, and stories people care about into one calm, useful destination."
    liveUrl="https://keystonebeat.com/"
    liveLabel="Visit Keystone Beat"
    image="/images/projects/keystone-beat.webp"
    imageAlt="Keystone Beat live Pennsylvania sports scores page"
    stats={[["15+", "PA teams"], ["6", "sports covered"], ["Live", "score updates"], ["1", "editorial desk"]]}
    challengeTitle="Pennsylvania sports coverage is everywhere—and that is the problem."
    challengeCopy="Following Philadelphia, Pittsburgh, and the colleges usually means bouncing among national scoreboards, team pages, social feeds, and disconnected news sources. The idea was to create a smaller desk with a clear Pennsylvania point of view."
    buildTitle="Live information in front, editorial judgment behind it."
    buildCopy="I designed the public experience around quick daily use, then built a private editorial workflow for reviewing, approving, rejecting, and publishing sourced story candidates without turning the public site into another generic dashboard."
    features={["Live scores and game status across Pennsylvania teams", "Schedules, standings, teams, odds, and calendar views", "Team and regional filters for a focused daily board", "Automated discovery with a controlled approval queue", "Editor-only publishing and source-aware story handling", "Responsive presentation designed like a modern sports page"]}
    systemTitle="A data pipeline and a publishing system working together."
    systemCopy="Keystone Beat separates collection, normalization, review, and publication so unreliable inputs cannot quietly become public content. Cloud infrastructure handles recurring jobs, structured storage, live APIs, and protected editorial access."
    technology={["TypeScript", "Cloudflare Workers", "D1", "Sports APIs", "Automated ingest", "Editorial controls"]}
    resultTitle="A small desk for a big sports state."
    resultCopy="The foundation is live: a fast public scoreboard and a maintainable editorial system that can grow into a distinctive Pennsylvania sports destination without losing control of quality."
  />;
}
