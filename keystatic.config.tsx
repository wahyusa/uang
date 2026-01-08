// keystatic.config.tsx
import { config, fields, collection } from "@keystatic/core";
import { keystaticBlocks } from "@/lib/keystatic.registry";

export default config({
  // 1. Logic to switch between Local (Dev) and GitHub (Prod)
  storage:
    process.env.NODE_ENV === "development"
      ? { kind: "local" }
      : {
          kind: "github",
          repo: "wahyusa/uang",
        },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          components: keystaticBlocks,
        }),
      },
    }),
  },
});
