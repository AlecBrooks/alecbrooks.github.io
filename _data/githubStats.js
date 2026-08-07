import EleventyFetch from "@11ty/eleventy-fetch";

async function fetchCommitCount(headers) {
  const url = "https://api.github.com/search/commits?q=author:AlecBrooks";
  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json",
      fetchOptions: { headers },
    });
    return data.total_count;
  } catch (err) {
    console.warn(`githubStats: commit count fetch failed (${err.message}), falling back to null.`);
    return null;
  }
}

async function fetchStatus(headers) {
  const query = `query {
    user(login: "AlecBrooks") {
      status {
        emojiHTML
        message
        indicatesLimitedAvailability
      }
    }
  }`;

  try {
    const data = await EleventyFetch("https://api.github.com/graphql", {
      duration: "1h",
      type: "json",
      fetchOptions: {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      },
    });
    const status = data.data?.user?.status;
    if (!status) return { message: null, emoji: null, busy: false };
    const emoji = status.emojiHTML ? status.emojiHTML.replace(/<\/?div>/g, "") : null;
    return {
      message: status.message,
      emoji,
      busy: status.indicatesLimitedAvailability,
    };
  } catch (err) {
    console.warn(`githubStats: status fetch failed (${err.message}), falling back to null.`);
    return { message: null, emoji: null, busy: false };
  }
}

export default async function () {
  const headers = {
    "User-Agent": "abrooks.dev-eleventy-build",
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [commitCount, status] = await Promise.all([
    fetchCommitCount(headers),
    fetchStatus(headers),
  ]);

  return { commitCount, status };
}
