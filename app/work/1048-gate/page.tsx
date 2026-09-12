import type { Metadata } from "next";
import ProjectCaseStudy from "../../components/project-case-study";

export const metadata: Metadata = {
  title: "1048 Gate Case Study | Two Hounds Run",
  description: "How a 12-team keeper league became a permanent digital headquarters for its current season, history, records, and community.",
};

export default function GateCaseStudy() {
  return <ProjectCaseStudy
    eyebrow="Case study · Fantasy league platform"
    title="1048 Gate"
    titleAccent="League Hub"
    intro="A 12-team keeper league turned into one permanent home for the current season, nine years of history, and everything that makes the league its own."
    liveUrl="https://1048gate.com/"
    liveLabel="Explore 1048 Gate"
    image="/images/projects/1048-gate.webp"
    imageAlt="1048 Gate fantasy football league homepage"
    stats={[["9", "completed seasons"], ["12", "league managers"], ["885", "archived games"], ["4,785", "transactions"]]}
    challengeTitle="The league had years of history, but no permanent home for it."
    challengeCopy="Scores, standings, drafts, rosters, records, playoffs, and transactions existed inside season-by-season ESPN screens. The current year was easy to find; the league's larger story was not. It needed more than another scoreboard."
    buildTitle="One league headquarters, designed around how members actually use it."
    buildCopy="I collected and normalized the historical data, then built a responsive experience that connects the active season to the rivalries, records, championships, decisions, and conversations behind it."
    features={["Current matchups, standings, and championship odds", "Historical seasons, records, playoffs, and draft results", "Manager profiles and championship résumé pages", "Trade board, league voting, and commissioner tools", "Transactions, accepted trades, and waiver history", "Mobile-first access for all twelve members"]}
    systemTitle="A maintainable league platform—not a one-time scrapbook."
    systemCopy="The project combines structured ESPN imports, validation, a purpose-built interface, authenticated league tools, and a deployment pipeline that can carry the archive forward as each new season is played."
    technology={["ESPN data", "Supabase", "JavaScript", "Cloudflare", "GitHub", "Responsive UI"]}
    resultTitle="The league now owns its story."
    resultCopy="1048 Gate has a living headquarters that members can use during the season, revisit between seasons, and keep expanding without losing the history that came before it."
  />;
}
