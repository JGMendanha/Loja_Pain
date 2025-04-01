"use client"

import { useCartStore } from '@/store';
import CartDrawer from './CartDrawer';

export default function Cart(){
    const useStore = useCartStore()
    return (
        <>
            <div className='flex items-center cursor-pointer relative'
            onClick={() => useStore.toggleCart()}>
                 <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className='bg-slate-100 text-slate-950 
                flex items-center justify-center absolute 
                left-6 bottom-3  
                text-sm font-bold rounded-full 
                h-5 w-5'>
                    {useStore.cart?.length}
                </span>
            </div>
            {
                !useStore.isOpen && (
                    <CartDrawer/>
                )
            }
            
        </>
        
    )
}