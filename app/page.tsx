import { Metadata } from "next";
import ContactCard from "./sections/contact-card";
import Intro from "./sections/intro";

export const metadata: Metadata = {
  title: "Home | Philipp Page",
};

export default function Home() {
  return (
    <>
      <section className="mt-4 flex justify-center">
        <ContactCard />
      </section>
      {/* show-navbar class used in sticky-nav to determine visibility */}
      <div id="show-navbar"></div>
      <section className="prose mx-auto mt-4 max-w-screen-md p-4">
        <Intro />
      </section>
    </>
  );
}
