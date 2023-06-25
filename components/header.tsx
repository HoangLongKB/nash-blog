import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="relative text-white flex flex-col w-full h-[25rem]">
      <nav className="flex z-10 w-full justify-between p-5">
        <h1 className='text-2xl font-semibold'>Nash Blog</h1>
        <ul className='flex gap-x-5 text-lg font-medium'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1 className='text-4xl font-bold z-10 m-auto'>NASH BLOG</h1>
      <Image
        src="/images/header.png"
        alt="Picture of the forest"
        className="object-cover z-0"
        fill
        priority
      />
    </div>
  );
};

export default Header;
