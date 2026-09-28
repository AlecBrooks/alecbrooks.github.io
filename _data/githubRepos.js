import EleventyFetch from "@11ty/eleventy-fetch";
import metadata from "./metadata.js";

export default async function () {
  const url = "https://api.github.com/users/AlecBrooks/repos?per_page=100&sort=created&direction=desc";
  const headers = { "User-Agent": "abrooks.dev-eleventy-build" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  let repos;
  try {
    repos = await EleventyFetch(url, {
      duration: "1h",
      type: "json",
      fetchOptions: { headers },
    });
  } catch (err) {
    console.warn(`githubRepos: fetch failed (${err.message}), falling back to an empty project list.`);
    return [];
  }

  return repos
    .filter((r) => !r.fork && !r.private && !r.archived)
    // Exclude this portfolio site's own repo and GitHub's special
    // profile-README repo (AlecBrooks/AlecBrooks) - neither is a "project".
    .filter((r) => r.name !== "alecbrooks.github.io" && r.name !== "AlecBrooks")
    .map((r) => ({
      name: r.name,
      fullName: r.full_name,
      description: r.description,
      language: r.language,
      // The list comes from GitHub, but every public repo is mirrored on
      // git.abrooks.dev under the same name, so link there instead.
      url: `${metadata.author.git}/${r.name}`,
      homepage: r.homepage,
      createdAt: r.created_at,
      updatedAt: r.pushed_at,
      stars: r.stargazers_count,
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
