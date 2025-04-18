"use client"

import { useCartStore } from "@/store"
import { ProductType } from "@/types/ProductType"

export default function Product({product}: {product: ProductType}){
    const {addProduct} = useCartStore();

    return (
        <button onClick={() => addProduct(product)}  className="rounded-md bg-slate-300 text-slate-950 
            px-3.5 py-2.5 text-sm text-center ">Adicionar ao carrinho
        </button>
    )
}