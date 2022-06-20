import { createContext, useState, useContext } from "react"

type IproductContext = {
    [key:string]:any
}

const productContext = createContext<IproductContext>({});
export const useProductContext = () => useContext(productContext);

export default function ProductProvider ({ children }:any) {
  const [modalOnOff, setModalOnOff] = useState(false);
  const [currentObj, setCurrentObj] = useState(null);
  const [postFunc, setPostFunc] = useState((f:Function)=>f);
  
  return (
    <productContext.Provider value={
        {modalState:{ modalOnOff, setModalOnOff, 
                      currentObj, setCurrentObj, 
                      postFunc, setPostFunc
                    }
        }
      }
    >
      {children}
    </productContext.Provider>
  );

};