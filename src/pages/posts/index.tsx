import React from "react";
import Head from "next/head";
import AllPosts from "@/components/posts/all-posts";
import { Posts } from "@/types/posts";
import { getAllPosts } from "helpers/posts-util";

const AllPostsPage: React.FC<{ posts: Posts }> = (props) => {
  return (
    <>
      <Head>
        <title>All posts - Blog App</title>
        <meta name="description" content="All posts of the blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
