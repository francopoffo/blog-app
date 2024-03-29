import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/legacy/image";
import { Post } from "@/types/post";

const PostItem: React.FC<{ post: Post }> = (props) => {
  const { title, image, description, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
