"use client";

import Link from 'next/link';
import logo from '@/app/images/logo.png';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { useCartStore } from '@/store';

export default function Navbar() {

  const useStore = useCartStore()
  
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

      <div className='flex items-center gap-10'>

        <div className='flex items-center cursor-pointer relative'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className='bg-slate-100 text-slate-950 
          flex items-center justify-center absolute 
          left-6 bottom-3  
          text-sm font-bold rounded-full 
          h-5 w-5'>
            2
          </span>
        </div>

        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal'>
            </SignInButton>
          </SignedOut>
        </div>

      </div>

    </nav>
  );
}