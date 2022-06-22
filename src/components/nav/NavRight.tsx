import React from 'react'
import { useProductContext } from 'context/product-context/productContext'
import {ReactComponent as Cartt} from './static/img/cartt.svg'
import CartModal from './cart-modal/CartModal'

function NavRight({currencyData, setCurrency, currency}:any) {

  const {cart, modalState} = useProductContext()

  return (
    <div className='navright-container'>
      {modalState.cartOnOff && <CartModal/>}
      <div className="navright-main">
				<div>Account</div>
        <div>
				  <select className='navright-main__select' name="currency" value={currency} id="cur" onChange={(e) => setCurrency(()=> e.target.value) }>
            {currencyData?.map((item:string) => {
              return (<option key={item} value={item} >{item}</option>)
            })
            }
          </select>
        </div>
				<div className='navright__cart'>
          <Cartt className='icon-cart' onClick={()=>togglecartModal() }/>
          {cart.cartList.size<1? '':<span className='cart-number'>{cart.cartList.size}</span>}
        </div>
			</div>
		</div>
  )

  //
  function togglecartModal() {
    console.log(cart.showCart(), cart.getTotalPrice())
    modalState.setCartOnOff(() => !modalState.cartOnOff )
    //@ts-ignore
    document.querySelector("body").style.overflow = "hidden";
  }
}

export default NavRight