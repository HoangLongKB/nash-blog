import { Post } from '@/types/post';
import { GetStaticPropsContext } from 'next';
import React from 'react';

type Props = {
  post: Post;
};

const PostDetail = ({ post }: Props) => {
  return (
    <div className="text-black max-w-[40rem] mx-auto my-20">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-xl opacity-80 mt-5">{post.body}</p>
    </div>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10'
  );
  const posts = (await res.json()) as Post[];

  const paths = posts.map((post) => ({
    params: { slug: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const rs = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.slug}`
  );
  const post = (await rs.json()) as Post;
  return {
    props: {
      post,
    },
  };
}
