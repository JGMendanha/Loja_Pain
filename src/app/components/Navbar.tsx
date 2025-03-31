"use client";

import Link from 'next/link';
import logo from '@/app/images/logo.png';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  
  return (
    <nav className='fixed 
      top-0 
      w-full 
      flex items-center 
      py-2 px-8 z-50
      justify-between 
      bg-slate-950
      text-gray-100'>

      <Link className='text-nd h-12 font-extrabold
        flex items-center' href="/">

        <img
          src={logo.src}
          alt="Logo Pain Gaming"
          className="h-8 mr-2"
        />
        paiN Gaming
      </Link>

      <div className='flex items-center gap-8'>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode='modal'>
          </SignInButton>
        </SignedOut>
      </div>

    </nav>
  );
}