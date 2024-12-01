
const Dump = ({gridData}: { gridData: Array<number>})=> {
      
    
    console.log("hello i am dump")
    
    

    return  (
          <div className="w-full h-full border-b-4 bottom-5">

             {
                gridData.map((d,i)=> {
                     return  (
                         <p key={i} className="text-white font-mono text-lg p-6">{d}</p>
                     )
                })
             }
             
          </div>
    )

}


export default Dump