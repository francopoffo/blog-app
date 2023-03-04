import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const dummy_post = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-05-20",
};

const PostContent: React.FC = () => {
  const imagePath = `/images/posts/${dummy_post.slug}/${dummy_post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={dummy_post.title} image={imagePath} />
      <ReactMarkdown>{dummy_post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
