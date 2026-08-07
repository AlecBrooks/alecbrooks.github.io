import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
  const url = "https://public.tableau.com/public/apis/bff/v1/author-profile/alec.brooks";
  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json",
      fetchOptions: {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; abrooks.dev-eleventy-build)" },
      },
    });
    return { vizCount: data.visibleWorkbookCount };
  } catch (err) {
    console.warn(`tableauStats: fetch failed (${err.message}), falling back to null.`);
    return { vizCount: null };
  }
}
