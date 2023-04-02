import Head from "next/head";
import Image from "next/image";
import philippPageProfilePicture from "../../public/philipp-page.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <Head>
        <title>Philipp Page</title>
        <meta name="description" content="Philipp Page's personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-grow flex-col items-center justify-center gap-8 bg-gray-50 md:flex-row">
        <Image
          className="h-[15rem] w-[15rem] rounded-full drop-shadow-md"
          src={philippPageProfilePicture}
          alt="Philipp Page picture"
        />
        <div>
          <h1 className="font-serif text-5xl font-extrabold">
            Philipp
            <br />
            <span className="text-sky-700">Page</span>
          </h1>
          <p className="mt-2 md:text-2xl">
            Software Engineer at{" "}
            <FontAwesomeIcon
              className="hover:text-[#ff9900] md:text-2xl"
              icon={faAws}
            />
          </p>
          <ul className="text-gray-800">
            <li>M. Sc. Information Systems 🎓</li>
            <li>Based in Dublin 🇮🇪</li>
          </ul>
          <ul className="flex flex-row gap-x-2 text-xl text-gray-800">
            <li>
              <FontAwesomeIcon
                className="hover:text-[#0077B5]"
                icon={faLinkedin}
              />
            </li>
            <li>
              <FontAwesomeIcon className="hover:text-[#333]" icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon
                className="hover:text-[#1da1f2]"
                icon={faTwitter}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
