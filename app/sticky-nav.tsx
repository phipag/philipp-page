"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import philippPageProfilePicture from "../public/images/philipp-page.jpeg";

import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyNav() {
  const [show, setShow] = useState<boolean>(false);

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

    mainContentObserver.observe(document.getElementById("show-navbar") as HTMLElement);
  }, []);

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
      <div className="fixed top-0 z-50 w-full bg-white p-2 shadow transition duration-500">
        <div className="mx-auto flex max-w-screen-md flex-row items-center justify-start gap-4">
          <Image
            className="h-16 w-16 rounded-full drop-shadow-md"
            src={philippPageProfilePicture}
            alt="Philipp Page picture"
            placeholder="blur"
          />
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
                  <FontAwesomeIcon className="hover:text-[#1da1f2]" icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  );
}
