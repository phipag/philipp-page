import "server-only";

import { Metadata } from "next";
import { AlwaysShowNavbar } from "../sticky-nav";
import PostsOverview from "./components/posts-overview";

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog posts",
};

export default async function Blog() {
  return (
    <>
      <AlwaysShowNavbar />
      <div className="mx-auto w-full max-w-prose p-4">
        <h1 className="text-5xl font-extrabold">Blog</h1>
        <PostsOverview />
      </div>
    </>
  );
}
