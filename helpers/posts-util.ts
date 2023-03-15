import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";
import { Posts } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "content");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: any): Post {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: Post = {
    slug: postSlug,
    title: data.title,
    date: data.date,
    image: data.image,
    description: data.description,
    isFeatured: data.isFeatured,
    content,
  };

  return postData;
}

export function getAllPosts(): Posts {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts;
}

export function getFeaturedPosts(): Posts {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
