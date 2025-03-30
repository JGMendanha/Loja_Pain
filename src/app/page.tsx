import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";

async function getProducts(){
  const response = await fetch('https://fakestoreapi.com/products')

  if(!response.ok){
    throw new Error("Falha na busca de produtos")
  }

  return response.json()
}

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="max-w-8xl mx-auto pt-8 px-8">
      <div className="grid grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-10 xl:gap-6">

        {products.map((product: ProductType) => {
          return <Product key={product.id} product={product} />
        })}

      </div>
    </div>
  )
}
