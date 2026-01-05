import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={`/posts`}>List of all posts</Link>
    </div>
  );
}
