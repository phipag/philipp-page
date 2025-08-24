import "server-only";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Link from "next/link";
import { getAllMdxData } from "../lib/mdx";

export interface PostsOverviewProps {
  limit?: number;
}

export default async function PostsOverview(params: PostsOverviewProps) {
  const posts = await getAllMdxData();
  const sortedPosts = posts
    .sort((a, b) => {
      if (a.frontmatter.date < b.frontmatter.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, params.limit);

  return sortedPosts.map((post) => (
    <div key={post.slug} className="mt-6">
      <Link href={`/blog/${post.slug}`} className="transition-opacity hover:opacity-60">
        <h2 className="inline-block text-3xl font-bold">{post.frontmatter.title}</h2>
      </Link>

      <time className="mt-1 block text-sm leading-none font-normal text-gray-600">
        {format(post.frontmatter.date, "MMMM dd, yyyy")}
      </time>

      <p className="mt-2 mb-1 leading-relaxed text-gray-800">{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className="font-medium no-underline hover:text-sky-700">
        Read more <FontAwesomeIcon icon={faArrowRight} className="ml-0.5" />
      </Link>
    </div>
  ));
}
