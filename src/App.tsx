import { useCallback, useMemo, useState } from "react";
import PhotoList from "./Photos"
import PhtotoView from "./PhotoView"
import { Photo } from "./types";
import Dump from "./Dump";

const App = ()=> {
  
  const [getPhoto,setPhoto] = useState<Photo | null>();
  const arrayData =  [...[1, 2, 3, 4, 5]?.map((d) => d + 1)];
  
 


  return (
    <>
      <div className="w-screen h-screen grid overflow-auto bg-[#191919]">
        <div className="flex flex-row w-full">
          <div className="flex-1 min-w-96">
            <PhtotoView photo={getPhoto ?? null} />
            <Dump gridData={arrayData} />
          </div>
          <div className="flex-2">
            <PhotoList onPhotoClicked={setPhoto} />
          </div>
        </div>
      </div>
    </>
  );
}


export default App