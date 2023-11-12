import "server-only";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export interface PostsOverviewProps {
  limit?: number;
}

export default function PostsOverview(params: PostsOverviewProps) {
  const posts = getAllPosts();
  if (params.limit) posts.splice(params.limit, posts.length - params.limit);

  return posts.map((post) => (
    <div key={post.slug} className="mt-6">
      <Link href={`/blog/${post.slug}`} className="transition-opacity hover:opacity-60">
        <h2 className="inline-block text-3xl font-bold">{post.title}</h2>
      </Link>

      <time className="mt-1 block text-sm font-normal leading-none text-gray-600">
        {format(post.date, "MMMM dd, yyyy")}
      </time>

      <p className="mb-1 mt-2 leading-relaxed text-gray-800">{post.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className="font-medium no-underline hover:text-sky-700">
        Read more <FontAwesomeIcon icon={faArrowRight} className="ml-0.5" />
      </Link>
    </div>
  ));
}
