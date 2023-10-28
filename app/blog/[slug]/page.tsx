import "server-only";

import "highlight.js/styles/github-dark.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { AlwaysShowNavbar } from "../../sticky-nav";
import { getAllPosts, getPostData } from "../lib/posts";

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <>
      <AlwaysShowNavbar />
      <div className="mx-auto w-full max-w-prose p-4">
        <Link href="/blog" className="font-medium no-underline hover:text-sky-700">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to all posts
        </Link>
        <div id="show-navbar"></div>
        <article className="prose mt-4 prose-pre:p-0">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </>
  );
}
