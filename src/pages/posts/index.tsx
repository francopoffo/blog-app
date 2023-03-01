import Head from "next/head";
import AllPosts from "@/components/posts/all-posts";
import { Posts } from "@/types/posts";

export default function AllPostsPage() {
  const dummy_posts: Posts = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting started with NextJS",
      image: "getting-started-nextjs.png",
      description: "NextJS is the best framework for React",
      date: "2022-05-20",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting started with NextJS",
      image: "getting-started-nextjs.png",
      description: "NextJS is the best framework for React",
      date: "2022-05-20",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting started with NextJS",
      image: "getting-started-nextjs.png",
      description: "NextJS is the best framework for React",
      date: "2022-05-20",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting started with NextJS",
      image: "getting-started-nextjs.png",
      description: "NextJS is the best framework for React",
      date: "2022-05-20",
    },
  ];

  return (
    <>
      <Head>
        <title>All posts - Blog App</title>
        <meta name="description" content="All posts of the blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllPosts posts={dummy_posts} />
    </>
  );
}
