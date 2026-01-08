// src/app/keystatic/[[...params]]/page.tsx
import { KeystaticApp } from "../cms";

// Tell Next.js to only build the root "/keystatic" HTML file.
// https://nextjs.org/docs/app/guides/static-exports
export function generateStaticParams() {
  return [{ params: [] }];
}

// Render the actual client side Admin UI
export default function Page() {
  return <KeystaticApp />;
}
