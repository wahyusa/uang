// src/app/posts/[slug]/page.tsx
import { createReader } from "@keystatic/core/reader";
import React from "react";
import Markdoc from "@markdoc/markdoc";

import keystaticConfig from "../../../../../keystatic.config";

import { markdocConfig, markdocBlocks } from "@/lib/markdoc.registry";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const post = await reader.collections.posts.read(params.slug);

  if (!post) {
    return <div>No Post Found</div>;
  }

  const { node } = await post.content();

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <>
      <h1>{post.title}</h1>
      {Markdoc.renderers.react(renderable, React, {
        components: markdocBlocks,
      })}
      <hr />
      <a href={`/posts`}>Back to Posts</a>
    </>
  );
}
