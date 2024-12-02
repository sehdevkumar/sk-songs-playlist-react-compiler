import { useEffect, useState } from "react";
import { Product, useStore} from "./ZustandStore";

const ProductPage = () => {
   const [getProduct,setProduct] = useState<Product[] | null>();
   const addToCart = useStore(store=> store.addToCart)
   const products = useStore(store=> store.products)


   useEffect(()=> {
     setProduct(products)
   },[])

   const onProductClicked = (product: Product) => {
       addToCart(product)
   }

    return (
        <div className="w-full h-full grid overflow-auto gap-4">
             {
                getProduct?.map((d,i)=> {
                     return  (
                         <div key={i} className="bg-gray-800/50 rounded-xl flex flex-col justify-center items-center shadow-xl backdrop-blur-sm p-4">
                             <h1 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{d.title}</h1>
                             <img className="w-full rounded-sm h-full max-h-[200px] max-w-[200px] object-cover" src={d.image} alt="Product" />
                             <p className="text-white font-mono text-lg p-6"> {d.description}</p>
                             <p className="text-white font-mono text-lg p-6"> ${d.price}</p>
                             <button onClick={()=> onProductClicked(d)}  className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-xl backdrop-blur-sm p-4 hover:from-blue-500 hover:to-purple-600 text-white font-bold">Add to Cart</button>
                         </div>
                     )
                })  
             }
        </div>
    )
}   
export default ProductPage