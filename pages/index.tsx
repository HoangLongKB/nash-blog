import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Post } from '@/types/post';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="w-full text-black mt-10">
      <ul className="mx-auto flex flex-col w-full gap-y-5 max-w-[40rem] items-center justify-start">
        {posts.map((post) => (
          <li className="flex flex-col w-full" key={post.id}>
            <Link
              href={`posts/${post.id}`}
              className="w-full text-3xl font-bold text-teal-700"
            >
              {post.title}
            </Link>
            <p className="w-full truncate">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const rs = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10'
  );
  const posts = await rs.json();
  return {
    props: {
      posts,
    },
  };
}
