// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";
import { keystaticBlocks } from "@/lib/keystatic.registry"; // Import the registry

export default config({
  storage: {
    kind: "local",
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
          // Keystatic specific to CMS blocks live preview
          components: keystaticBlocks,
        }),
      },
    }),
  },
});
