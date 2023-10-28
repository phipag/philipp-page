import "server-only";

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeHighlight from "rehype-highlight";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  [key: string]: any;
}

export async function getPostData(slug: string) {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use unified pipe to parse markdown into html
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  return fileNames
    .map((fileName) => {
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        ...matterResult.data,
      } as Post;
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
