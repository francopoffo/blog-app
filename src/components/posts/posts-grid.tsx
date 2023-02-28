import { Post } from "@/types/post";
import { Posts } from "@/types/posts";
import React from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const PostsGrid: React.FC<{ posts: Posts }> = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts &&
        posts.map((post: Post) => <PostItem key={post.slug} post={post} />)}
    </ul>
  );
};

export default PostsGrid;
