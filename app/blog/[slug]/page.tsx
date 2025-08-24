import "server-only";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Link from "next/link";
import { AlwaysShowNavbar } from "../../sticky-nav";
import { getMdxFiles } from "../lib/mdx";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const files = await getMdxFiles();
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

type Props = {
  readonly params: Promise<{ slug: string }>;
};

export default async function Post(props: Props) {
  const { slug } = await props.params;
  const mdxModule = await import(`../../../posts/${slug}.mdx`);
  const { default: PostContent, frontmatter } = mdxModule;

  return (
    <>
      <AlwaysShowNavbar />
      <div className="mx-auto w-full max-w-prose p-4">
        <Link href="/blog" className="font-medium no-underline hover:text-sky-700">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to all posts
        </Link>
        <div id="show-navbar"></div>
        <article className="prose prose-code:before:content-none prose-code:after:content-none prose-pre:p-0 mt-4">
          <h1>{frontmatter.title}</h1>
          <time className="-mt-4 mb-8 block text-sm leading-none font-normal text-gray-600">
            {format(frontmatter.date, "MMMM dd, yyyy")}
          </time>
          <PostContent />
        </article>
      </div>
    </>
  );
}
