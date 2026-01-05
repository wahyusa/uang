// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";
import { wrapper } from "@keystatic/core/content-components";

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
          components: {
            Testimonial: wrapper({
              label: "Testimonial",
              schema: {
                author: fields.text({ label: "Author" }),
                role: fields.text({ label: "Role" }),
              },
            }),
          },
        }),
      },
    }),
  },
});
