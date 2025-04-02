'use client'

import { useCartStore } from "@/store"

export default function Checkout(){
    const cartStore = useCartStore()

    return (
        <div className="flex flex-col gap-8">
            <h1>
                Checkout
            </h1>

            <button onClick={() =>  {cartStore.setCheckout('cart'); cartStore.resetCart()}} className="font-bold text-sm text-slate-100 border p-4">
                Finalizar pagamento
            </button>
        </div>
    )
}