import "server-only";

import { Metadata } from "next";
import PostsOverview from "./blog/components/posts-overview";
import ContactCard from "./sections/contact-card";
import Intro from "./sections/intro";
import { ShowNavBarBelow } from "./sticky-nav";

export const metadata: Metadata = {
  title: "Home | Philipp Page",
  description: "My personal website.",
};

export default function Home() {
  return (
    <>
      <section className="mt-4 flex justify-center">
        <ContactCard />
      </section>
      <ShowNavBarBelow />
      <section className="container prose mx-auto mt-4 p-4">
        <Intro />
      </section>
      <section className="mx-auto mt-4 w-full max-w-prose p-4">
        <h1 className="text-4xl font-extrabold">Read my thoughts ...</h1>
        <PostsOverview limit={3} />
      </section>
    </>
  );
}
