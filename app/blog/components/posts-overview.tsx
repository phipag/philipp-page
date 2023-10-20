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
    <div key={post.slug} className="mt-8">
      <Link href={`/blog/${post.slug}`} className="transition-opacity hover:opacity-60">
        <h2 className="text-3xl font-bold">{post.title}</h2>
      </Link>

      <p className="pt-1 text-sm text-gray-600">{format(post.date, "MMMM dd, yyyy")}</p>

      <p className="prose pt-2">{post.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className="font-medium no-underline hover:text-sky-700">
        Read more <FontAwesomeIcon icon={faArrowRight} className="ml-0.5" />
      </Link>
    </div>
  ));
}
