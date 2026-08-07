import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
  const url = "https://www.kaggle.com/api/v1/datasets/list?user=alecbrooks";
  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json",
      fetchOptions: {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; abrooks.dev-eleventy-build)" },
      },
    });
    return { datasetCount: data.length };
  } catch (err) {
    console.warn(`kaggleStats: fetch failed (${err.message}), falling back to null.`);
    return { datasetCount: null };
  }
}
