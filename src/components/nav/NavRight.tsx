import React from 'react'
import { useProductContext } from 'context/product-context/productContext'
import {ReactComponent as Cartt} from './static/img/cartt.svg'

function NavRight({currencyData, setCurrency, currency}:any) {

  const {cart} = useProductContext()

  return (
    console.log(cart.getTotalPrice()),
    <div className='navright-container'>
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
          <Cartt className='icon-cart' onClick={()=> console.log(cart.showCart())}/>
          {cart.cartList.size<1? '':<span className='cart-number'>{cart.cartList.size}</span>}
        </div>
			</div>
		</div>
  )
}

export default NavRight