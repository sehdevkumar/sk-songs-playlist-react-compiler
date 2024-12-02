import { useState } from "react";
import { Photo } from "../types";
import Dump from "./Dump";
import PhotoList from "./Photos";
import PhtotoView from "./PhotoView";
const GallaryCompiler = () => {

    const [getPhoto,setPhoto] = useState<Photo | null>();
  const arrayData =  [...[1, 2, 3, 4, 5]?.map((d) => d + 1)];
  
 

    return (
  
        <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm">
              <PhtotoView photo={getPhoto ?? null} />
            </div>
            <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm p-4">
              <Dump gridData={arrayData} />
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm">
              <PhotoList onPhotoClicked={setPhoto} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default GallaryCompiler