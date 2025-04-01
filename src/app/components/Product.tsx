import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage"
import { formatPrice } from "@/lib/utils"
import AddCart from "./addCart"
import Link from "next/link"

type ProductProps = {
    product: ProductType 
}

export default function product({product} : ProductProps){
    return( 
        
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 ">
 
                    <div className="relative max-h-72 flex-1 text-gray-100">
                        <ProductImage product={product} fill/>
                    </div>

                    <Link href={`/product/${product.id}`}>
                        <div className="flex justify-between font-bold my-3 text-gray-100">
                            <p className="w-40 truncate">
                                {product.name}
                            </p>
                            <p className="text-md text-slate-100">
                                ${formatPrice(product.price)}
                            </p>
                        </div>
                    </Link>

            <AddCart product={product} />
        </div>
    )
}