import "server-only";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import PostsOverview from "./blog/components/posts-overview";
import ContactCard from "./sections/contact-card";
import Intro from "./sections/intro";
import RecentExperience from "./sections/recent-experience";
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

      <section className="container mx-auto mt-4 p-4 lg:max-w-screen-lg">
        <Intro />
      </section>

      <section className="container mx-auto mt-4 p-4 lg:max-w-screen-lg">
        <h1 className="text-4xl font-extrabold">My recent experience</h1>
        <RecentExperience />
        <div className="mt-4 text-center">
          <a
            className="inline-block rounded border border-sky-700 p-3 font-medium ring-sky-100 transition-colors hover:bg-gray-100 active:ring-4"
            href="https://www.linkedin.com/in/philipp-page/"
            target="_blank"
          >
            Read more on LinkedIn <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </section>

      <section className="container mx-auto my-4 w-full p-4 lg:max-w-screen-lg">
        <h1 className="text-4xl font-extrabold">Read my thoughts</h1>
        <p className="mt-4 text-gray-800">
          I write mostly about technical topics inspired from my life as a software engineer and personal projects.
        </p>
        <PostsOverview limit={3} />
      </section>
    </>
  );
}
