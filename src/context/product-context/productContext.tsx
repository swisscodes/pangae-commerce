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
        {
          modalState:{ modalOnOff, setModalOnOff, 
                      currentObj, setCurrentObj, 
                      postFunc, setPostFunc
                    },
          cart:cart,
        }
      }
    >
      {children}
    </productContext.Provider>
  );

};


class Cart {
  totalPrice:number = 0
  cartList:Map<number, any> = new Map()

  addToCart(id:number, item:any, quantity=1) {
    item.quantity = quantity
    this.cartList.set(id, item)
    console.log(this.cartList)
  }

  showCart() {
    for(const [item, value] of this.cartList.entries()) {
      console.log(item,value)
    }
  }

  getTotalPrice() {
    for(const [item, value] of this.cartList.entries()) {
      this.totalPrice += value?.price
    }
    console.log(this.totalPrice)
  }
}

const cart = new Cart()