import type { Metadata } from "next";
import ProjectCaseStudy from "../../components/project-case-study";

export const metadata: Metadata = {
  title: "ArenaTap Case Study | Two Hounds Run",
  description: "How an arena guessing idea became a polished daily sports geography game with 283 venues, groups, streaks, and precision scoring.",
};

export default function ArenaTapCaseStudy() {
  return <ProjectCaseStudy
    eyebrow="Case study · Daily sports game"
    title="Arena"
    titleAccent="Tap"
    intro="A five-round daily sports geography game that asks players to pin the house, name the team, and see how well they really know the map."
    liveUrl="https://arenatap.vercel.app/"
    liveLabel="Play ArenaTap"
    image="/images/projects/arenatap.webp"
    imageAlt="ArenaTap daily sports geography game homepage"
    stats={[["283", "venues"], ["7", "sports categories"], ["5", "daily rounds"], ["1,000", "possible points"]]}
    challengeTitle="The idea was simple. Making every round feel fair was not."
    challengeCopy="A stadium guessing game needs more than a map and a list of teams. Daily selections must be varied, answers must be accurate, close guesses should feel meaningfully different from long misses, and the experience has to stay quick on a phone."
    buildTitle="A complete daily loop built around one satisfying interaction."
    buildCopy="I developed the venue data, round structure, geographic scoring, game states, practice mode, groups, streaks, recap, and sharing together so the product feels like one game rather than a collection of features."
    features={["Four map-pin rounds and one team-identification round", "Custom distance curve with useful partial credit", "NBA, NFL, MLB, NHL, MLS, college football, and ICON venues", "Daily challenge, practice play, streaks, and saved progress", "Private group links and weekly competition", "Atlas study mode and an all-five-results recap"]}
    systemTitle="Daily content, geography, and persistence under one ruleset."
    systemCopy="ArenaTap combines verified venue records, deterministic daily selection, distance calculations, scoring-version safeguards, saved attempts, group leaderboards, and a responsive map interface."
    technology={["React", "TypeScript", "Geospatial scoring", "Edge storage", "Daily generation", "Responsive game UI"]}
    resultTitle="An original sports idea people can play today."
    resultCopy="ArenaTap now has the structure of a real repeatable product: a recognizable brand, a daily reason to return, social competition, and enough venue depth to keep the game growing."
  />;
}
