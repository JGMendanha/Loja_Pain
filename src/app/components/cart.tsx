"use client"

import { useCartStore } from '@/store';

export default function Cart(){
    const useStore = useCartStore()
    return (
        <>
            <div className='flex items-center cursor-pointer relative'
            onClick={() => useStore.toggleCart()}>
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
            {
                !useStore.isOpen && (
                    <div onClick={() => useStore.toggleCart()} className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>
                        <div onClick={(e) => e.stopPropagation()}  className='absolute bg-slate-950 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll'>
                            <h1>Carrinho</h1>
                            {
                                useStore.cart.map((item) =>(
                                    <div key={item.id}>{item.name}</div>
                                ))
                            }
                        </div>
                    </div>
                    
                )
            }
            
        </>
        
    )
}