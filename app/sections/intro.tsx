import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Intro() {
  return (
    <>
      <h1>Hey,</h1>
      <p>
        welcome to my website! I&apos;m a software engineer based in Dublin. I
        graduated with a M. Sc. in Information Systems from the University of
        Cologne, Germany.
      </p>
      <p>
        Currently, I work as a software engineer at AWS where I build the
        software for the next generation of{" "}
        <a href="https://aws.amazon.com/outposts" target="_blank">
          frontier networks <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
        .
      </p>
    </>
  );
}
