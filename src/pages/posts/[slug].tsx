import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import { GetStaticPropsContext } from "next";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../../helpers/posts-util";
import { Post } from "@/types/post";

const PostDetailPage: React.FC<{ post: Post }> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.description} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params!;

  const slug = params.slug;

  const postData: Post = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
