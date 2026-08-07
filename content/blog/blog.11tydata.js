import { getWebmentions } from "@chrisburnell/eleventy-cache-webmentions";

export default {
  layout: "post.njk",
  eleventyComputed: {
    webmentions: async (data) => {
      if (!data.webmentionsOptions) {
        return [];
      }
      return getWebmentions(data.webmentionsOptions, `${data.metadata.url}${data.page.url}`);
    },
  },
};
