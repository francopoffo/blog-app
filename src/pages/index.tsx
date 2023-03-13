import React from "react";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Head from "next/head";
import Hero from "@/components/home-page/Hero";
import { Posts } from "@/types/posts";
import { getFeaturedPosts } from "helpers/posts-util";

const Home: React.FC<{ posts: Posts }> = (props) => {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="A blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
}

export default Home;
