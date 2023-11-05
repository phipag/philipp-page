import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ExternalLinkProps {
  readonly href: string;
  readonly text: string;
}

export function ExternalLink({ href, text }: Readonly<ExternalLinkProps>) {
  return (
    <a href={href} target="_blank" className="font-medium no-underline hover:text-sky-700">
      {text} <FontAwesomeIcon icon={faUpRightFromSquare} />
    </a>
  );
}
