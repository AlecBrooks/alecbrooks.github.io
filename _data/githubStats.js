import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
  const url = "https://api.github.com/search/commits?q=author:AlecBrooks";
  const headers = {
    "User-Agent": "abrooks.dev-eleventy-build",
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json",
      fetchOptions: { headers },
    });
    return { commitCount: data.total_count };
  } catch (err) {
    console.warn(`githubStats: fetch failed (${err.message}), falling back to null.`);
    return { commitCount: null };
  }
}
