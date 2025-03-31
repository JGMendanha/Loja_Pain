import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage"

type ProductProps = {
    product: ProductType 
}

export default function product({product} : ProductProps){
    return(
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 ">

            <div className="relative max-h-72 flex-1 text-gray-100">
                <ProductImage product={product} fill/>
            </div>

            <div className="flex justify-between font-bold my-3 text-gray-100">
                <p className="w-40 truncate">
                    {product.name}
                </p>
                <p className="text-md text-slate-100">
                    ${product.price}
                </p>
            </div>

            <button className="rounded-md bg-slate-300 text-slate-950 
            px-3.5 py-2.5 text-sm text-center ">Adicionar ao carrinho</button>
        </div>
    )
}