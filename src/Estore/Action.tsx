import { useStore } from "./ZustandStore"

const Action = () => {

    const cart = useStore(store => store.cart)
    const removeFromCart = useStore(store => store.removeFromCart)

    return (
        <div className="w-full p-4 h-full flex flex-col gap-4  items-center">
            <h1 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Cart</h1>

            {
                cart.items.map((d, i) => {
                    return (
                        <div key={i} className="bg-gray-800/50 rounded-xl flex flex-row w-full items-center shadow-xl backdrop-blur-sm p-4">
                            <img className="w-[50px] h-[50px] rounded-sm object-cover" src={d.image} alt="Product" />
                            <div className="flex flex-col ml-4">
                                <p className="text-white font-mono text-lg">{d.title}</p>
                                <div className="text-white font-mono text-lg flex flex-row gap-x-4"> ${d.price * d.quantity}
                                <button onClick={() =>removeFromCart(d.id)} className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 text-white font-bold">X</button>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
               !cart.items.length && <p className="text-white font-mono text-lg">Cart is empty</p>
            }

            <button className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-xl backdrop-blur-sm p-4 hover:from-blue-500 hover:to-purple-600 text-white font-bold">Buy Now</button>
        </div>
    )
}
export default Action