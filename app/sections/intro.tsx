import "server-only";

import { ExternalLink } from "../components/external-link";

export default function Intro() {
  return (
    <div className="leading-relaxed">
      <h1 className="text-4xl font-extrabold">Hey there!</h1>
      <p className="mt-4 text-gray-800">
        Welcome to my personal website! My name is Philipp and I currently work as an SA Engineer at AWS where I lead
        the{" "}
        <ExternalLink
          href="https://github.com/aws-powertools/powertools-lambda-java"
          text="Powertools for AWS Lambda open-source project in Java"
        />
        , a developer toolkit helping you to implement Serverless best-practices. Prior to my open-source activities, I
        built the software for the next generation of{" "}
        <ExternalLink href="https://aws.amazon.com/edge/" text="edge networks" /> leveraged, for example, in{" "}
        <ExternalLink href="https://aws.amazon.com/outposts/" text="AWS Outposts" />.
      </p>
      <p className="mt-2 text-gray-800">
        I have more than 5 years of freelancing experience where I advised clients on building sustainable and
        cost-effective cloud-based software solutions that streamline their business operations. Read more about me
        below.
      </p>
    </div>
  );
}
