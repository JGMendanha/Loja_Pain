import ProductImage from "@/app/components/ProductImage";
import Stripe from "stripe";
import { formatPrice } from "@/lib/utils";
import AddCart from "@/app/components/addCart";

type ProductPageParams = {
    params:{
        id: string;
    };
};

async function getProduct(id: string) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2025-02-24.acacia"
    })

    const product = await stripe.products.retrieve(id);

    const price = await stripe.prices.list({
        product: product.id,
    });

    return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency,
    };
}

export default async function ProductPage({params: {id}}: ProductPageParams ){
    const product = await getProduct(id);
    return(
        <div className="pt-16">
            <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8 p-10 bg-slate-950">
                <ProductImage product={product} />
                <div className="flex flex-col">
                    <div className="pb-4">
                        <h1 className="text-2xl font-bold text-slate-100">{product.name}</h1>
                        <h2 className="text-2xl font-bold text-slate-100">{formatPrice(product.price)}</h2>
                    </div>
                    <div className="pb-4 max-w-sm">
                        <p className="text-slate-100 text-md break-words">{product.description}</p>
                    </div>
                    <AddCart product={product}/>
                </div>
            </div>
        </div>
        
    )
}