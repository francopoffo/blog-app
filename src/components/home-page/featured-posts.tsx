import React from "react";
import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
import { Posts } from "@/types/posts";

const FeaturedPosts: React.FC<{ posts: Posts }> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
