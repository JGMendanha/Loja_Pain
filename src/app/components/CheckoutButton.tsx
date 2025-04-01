'use client';

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CheckoutButton(){
    const router = useRouter();
    const cartStore = useCartStore();
    const { user } = useUser();

    const handleCheckout = async () => {
        if(!user){
            cartStore.toggleCart();
            router.push('/sing-in')
            return;
        }
        cartStore.setCheckout('checkout')
    }

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    return (
        <div className=" flex flex-col gap-4">
            <p className="font-bold">Total: {formatPrice(totalPrice)}</p>
            <button onClick={handleCheckout} className="font-bold border rounded-md p-3 bg-green-500">
                Finalizar compra
            </button>
        </div>
    )
}