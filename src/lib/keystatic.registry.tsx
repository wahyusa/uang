import { fields } from "@keystatic/core";
import { wrapper } from "@keystatic/core/content-components";
import { Testimonial } from "@/components/Testimonial";

// Keystatic specific to CMS blocks live preview
export const keystaticBlocks = {
  Testimonial: wrapper({
    label: "Testimonial",
    schema: {
      author: fields.text({ label: "Author" }),
      role: fields.text({ label: "Role" }),
    },
    ContentView: (props) => (
      <Testimonial author={props.value.author} role={props.value.role}>
        {props.children}
      </Testimonial>
    ),
  }),
};
