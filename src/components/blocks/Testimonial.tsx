import React from "react";

type TestimonialProps = {
  author: string;
  role: string;
  children: React.ReactNode;
};

export const Testimonial = ({ author, role, children }: TestimonialProps) => {
  return (
    <figure className="my-4 border-l-2 pl-4">
      <blockquote className="text-sky-400 italic">{children}</blockquote>
      <figcaption className="mt-4 font-bold">
        — {author} <span>({role})</span>
      </figcaption>
    </figure>
  );
};
