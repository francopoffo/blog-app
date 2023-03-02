import Head from "next/head";
import PostContent from "@/components/posts/post-detail/post-content";

export default function SinglePost() {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="A blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostContent />
    </>
  );
}
