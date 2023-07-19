import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Intro() {
  return (
    <>
      <h1>Hey there!</h1>
      <p>
        Welcome to my website! I&apos;m a software engineer based in Dublin. I hold a M.Sc. in Information Systems from
        the University of Cologne in Germany. The core principles of my work are building scalable and maintainable
        software that end-users as well as developers enjoy to use.
      </p>
      <p>
        In over 5 years of professional working experience as a freelancer I consulted clients in building sustainable,
        cost-efficient cloud-based software solutions to facilitate their business processes.
        {/*TODO: Include references to a portfolio here.*/}
      </p>
      <p>
        Currently, at Amazon Web Services (AWS), I contribute to building the software for the next generation of{" "}
        <a href="https://aws.amazon.com/edge/" className="no-underline hover:text-sky-700" target="_blank">
          frontier networks <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>{" "}
        leveraged, for example, in{" "}
        <a href="https://aws.amazon.com/" className="no-underline hover:text-sky-700" target="_blank">
          AWS Outposts <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
        .
      </p>
    </>
  );
}
