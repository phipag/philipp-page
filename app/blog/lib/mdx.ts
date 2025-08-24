import fs from "fs";
import path from "path";

export type MdxData = {
  readonly slug: string;
  readonly frontmatter: Record<string, any>;
};

const CONTENT_DIR = path.join(process.cwd(), "posts");

export async function getMdxFiles(dir: string = ""): Promise<string[]> {
  const fullPath = dir ? path.join(CONTENT_DIR, dir) : CONTENT_DIR;
  const files = await fs.promises.readdir(fullPath);
  return files.filter((file) => path.extname(file) === ".mdx");
}

export async function getAllMdxData(dir: string = ""): Promise<MdxData[]> {
  const files = await getMdxFiles(dir);
  const dataPromises = files.map(async (filename) => {
    const slug = filename.replace(".mdx", "");
    const mdxModule = await import(`../../../posts/${dir ? `${dir}/` : ""}${slug}.mdx`);
    return {
      slug,
      frontmatter: mdxModule.frontmatter,
    };
  });
  return Promise.all(dataPromises);
}
