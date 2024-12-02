import Action from "./Action";
import InventoryControl from "./InventoryControl";
import ProductPage from "./Product";

const Estore = () => {
    
    return  (
           <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm p-4 w-full h-full">

               <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                   Estore
               </h1>

               <div className="flex flex-col lg:flex-row gap-8">
                   <div className="lg:w-1/2">
                       <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm">
                           <ProductPage />
                       </div>
                   </div>
                   <div className="lg:w-1/2 space-y-6">
                       <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm">
                           <Action />
                       </div>
                       <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm p-4">
                           <InventoryControl />
                       </div>
                   </div>
               </div>

           </div>
    ) 


};

export default Estore;