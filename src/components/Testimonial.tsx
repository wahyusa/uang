import React from "react";

type TestimonialProps = {
  author: string;
  role: string;
  children: React.ReactNode;
};

export default function Testimonial({
  author,
  role,
  children,
}: TestimonialProps) {
  return (
    <figure className="border-l-2 pl-4 my-4">
      <blockquote className="italic text-sky-400">{children}</blockquote>
      <figcaption className="mt-4 font-bold">
        — {author} <span>({role})</span>
      </figcaption>
    </figure>
  );
}
