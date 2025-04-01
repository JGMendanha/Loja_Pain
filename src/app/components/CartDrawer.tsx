"use client";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from 'next/image';
import CheckoutButton from "./CheckoutButton";
import Checkout from "./Checkout";

export default function cartDrawer(){
    const useStore = useCartStore();

    return(
        <div onClick={() => useStore.toggleCart()} className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>
            <div onClick={(e) => e.stopPropagation()}  className='absolute bg-slate-950 right-0 top-0 w-1/3.5 h-screen p-8 overflow-y-scroll'>
                <button onClick={() => useStore.toggleCart()} className="font-bold text-sm text-slate-100 border p-4">
                    Comprar mais items
                </button>
                <div className="border-t border-slate-100 my-4"></div>
                {
                    useStore.onCheckout === 'cart' && (
                        <>
                            {
                                useStore.cart.map((item) =>(
                                    <div key={item.id} className="flex gap-4 py-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}  // Correção: "alt" em vez de "att"
                                            width={80}
                                            height={80}
                                            className="object-cover w-24"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="w-42 truncate">{item.name}</h2>
                                            <h2>Quantidade: {item.quantity}</h2>
                                            <p className="text-sm font-bold">{formatPrice(item.price)}</p>
                                            <div className="flex gap-4">
                                                <button onClick={() => useStore.addProduct(item)} className="font-bold text-sm text-green-400 p-1">
                                                    Adicionar
                                                </button>
                                                <button onClick={() => useStore.removeProduct(item)} className="font-bold text-sm text-red-400 p-1 ">
                                                    Remover
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
                
                {
                    useStore.cart.length > 0 && useStore.onCheckout === 'cart' && (
                        <CheckoutButton/>
                    )
                }

                {
                    useStore.onCheckout === 'checkout' && (
                        <Checkout/>
                    )
                }
            </div>
        </div>
    )
}