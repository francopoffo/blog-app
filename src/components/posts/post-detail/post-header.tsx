import React from "react";
import Image from "next/legacy/image";
import classes from "./post-header.module.css";

const PostHeader: React.FC<{ title: string; image: string }> = (props) => {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={300} height={200} />
    </header>
  );
};

export default PostHeader;
