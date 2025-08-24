"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import philippPageProfilePicture from "../public/images/philipp-page.jpeg";

import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function AlwaysShowNavbar() {
  return (
    <>
      <div id="show-navbar" className="absolute -top-1"></div>
      <div className="mt-20" />
    </>
  );
}

export function ShowNavBarBelow() {
  return <div id="show-navbar"></div>;
}

export default function StickyNav() {
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const mainContentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(false);
        } else {
          setShow(true);
        }
      });
    });

    if (document.getElementById("show-navbar") !== null) {
      mainContentObserver.observe(document.getElementById("show-navbar") as HTMLElement);
    }
  }, [pathname]); // Re-evaluate whether to show the navbar when the user navigates

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 z-50 w-full bg-white p-2 shadow-sm transition duration-500">
        <div className="mx-auto flex max-w-prose flex-row items-center justify-start gap-4">
          <Link href="/">
            <Image
              className="h-16 w-16 rounded-full drop-shadow-md"
              src={philippPageProfilePicture}
              alt="Philipp Page picture"
              placeholder="blur"
            />
          </Link>
          <div>
            <h1 className="text-xl font-extrabold">
              Philipp <span className="text-sky-700">Page</span>
            </h1>
            <ul className="flex flex-row gap-x-2 text-2xl text-gray-800">
              <li>
                <a href="https://www.linkedin.com/in/philipp-page/" target="_blank">
                  <FontAwesomeIcon className="hover:text-[#0077B5]" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/phipag" target="_blank">
                  <FontAwesomeIcon className="hover:text-[#333]" icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/PagePhilipp" target="_blank">
                  <FontAwesomeIcon className="hover:text-gray-700" icon={faXTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  );
}
