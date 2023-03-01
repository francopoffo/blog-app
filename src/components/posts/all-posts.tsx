import React from "react";
import PostsGrid from "./posts-grid";
import { Posts } from "@/types/posts";
import classes from "./all-posts.module.css";

const AllPosts: React.FC<{ posts: Posts }> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
