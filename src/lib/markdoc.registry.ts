import { Config } from "@markdoc/markdoc";
import { Testimonial } from "@/components/Testimonial";

export const markdocConfig: Config = {
  tags: {
    Testimonial: {
      render: "Testimonial",
      attributes: {
        author: { type: String },
        role: { type: String },
      },
    },
  },
};

// Tells React what to render
export const markdocBlocks = {
  Testimonial: Testimonial,
};
