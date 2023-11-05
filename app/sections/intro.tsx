import "server-only";

import { ExternalLink } from "../components/external-link";

export default function Intro() {
  return (
    <div className="leading-relaxed">
      <h1 className="text-4xl font-extrabold">Hey there!</h1>
      <p className="mt-4 text-gray-800">
        Welcome to my website! I&apos;m a Dublin-based software engineer with a M.Sc. in Information Systems from the
        University of Cologne in Germany. My work revolves around creating scalable and user-friendly software, both for
        end-users and fellow developers.
      </p>
      <p className="mt-2 text-gray-800">
        With over 5 years of freelancing experience, I have advised clients on building sustainable and cost-effective
        cloud-based software solutions that streamline their business operations.
        {/*TODO: Include references to a portfolio here.*/}
      </p>
      <p className="mt-2 text-gray-800">
        Currently, at Amazon Web Services (AWS), I&apos;m involved in developing the software for the next generation of{" "}
        <ExternalLink href="https://aws.amazon.com/edge/" text="edge networks" /> leveraged, for example, in{" "}
        <ExternalLink href="https://aws.amazon.com/outposts/" text="AWS Outposts" />.
      </p>
    </div>
  );
}
