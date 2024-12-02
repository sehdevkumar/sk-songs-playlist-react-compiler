const InventoryControl = () => {
    return (
        <div className="w-full h-full">
            <h1 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Inventory Control</h1>
            <div className="flex flex-col gap-4">
                <button className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-xl backdrop-blur-sm p-4 hover:from-blue-500 hover:to-purple-600 text-white font-bold">Quantity + </button>
                <button className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-xl backdrop-blur-sm p-4 hover:from-blue-500 hover:to-purple-600 text-white font-bold">Quantity - </button>
            </div>
        </div>
    );
};      

export default InventoryControl;