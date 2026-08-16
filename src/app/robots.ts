import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Everything is open to everyone.
 *
 * The AI crawlers are named explicitly even though `*` already permits them:
 * a blanket allow is ambiguous about intent, and Google-Extended in
 * particular is what decides whether this page can be used in AI Overviews.
 * Naming them states the position rather than leaving it to a default.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — model training
  "OAI-SearchBot", // OpenAI — ChatGPT search results
  "ChatGPT-User", // OpenAI — user-initiated fetches
  "ClaudeBot", // Anthropic
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl — feeds many models
  "Bytespider",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
