import { createContext, useState, useContext } from "react"

type IproductContext = {
    [key:string]:any
}

const productContext = createContext<IproductContext>({});
export const useProductContext = () => useContext(productContext);

export default function ProductProvider ({ children }:any) {
  const [modalOnOff, setModalOnOff] = useState(false);
  const [cartOnOff, setCartOnOff] = useState(false);
  const [currentObj, setCurrentObj] = useState(null);
  const [postFunc, setPostFunc] = useState((f:Function)=>f);

  
  
  return (
    <productContext.Provider value={
        {
          modalState:{ modalOnOff, setModalOnOff, 
                      currentObj, setCurrentObj,
                      cartOnOff, setCartOnOff,
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
    var totalPrice:number = 0
    for(const [_, value] of this.cartList.entries()) {
      totalPrice += (value?.price * value?.quantity)
    }
    return totalPrice
  }
}

const cart = new Cart()