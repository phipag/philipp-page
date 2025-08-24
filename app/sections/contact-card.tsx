import "server-only";

import { faAws, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import philippPageProfilePicture from "../../public/images/philipp-page.jpeg";

export default function ContactCard() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Image
        className="h-60 w-60 rounded-full drop-shadow-md"
        src={philippPageProfilePicture}
        alt="Philipp Page picture"
        placeholder="blur"
      />
      <div>
        <h1 className="text-5xl font-extrabold">
          Philipp
          <br />
          <span className="text-sky-700">Page</span>
        </h1>
        <p className="mt-2 md:text-2xl">
          Software Engineer at{" "}
          <a href="https://aws.amazon.com/" target="_blank">
            <FontAwesomeIcon className="hover:text-[#ff9900]" icon={faAws} />
          </a>
        </p>
        <ul className="text-gray-800">
          <li>Zurich 🇨🇭</li>
        </ul>
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
  );
}
