import './cartmodal.css'
import React from 'react'
import { useProductContext } from 'context/product-context/productContext'

function CartModal() {

	const {modalState, cart} = useProductContext()

  return (
    <div className='cartmodal-container'>
			<div className='util-overlay' onClick={()=>overLayToggle()}></div>
			<div className='cartmodal-main'>
					<div className="">My Shopping Cart</div>
					<div>Total: {cart.getTotalPrice()}</div>
			</div>
		</div>
  )

	//
	function overLayToggle() {
		modalState.setCartOnOff(() => !modalState.cartOnOff)
		//@ts-ignore
		document.querySelector("body").style.overflow = "initial";
	}
}

export default CartModal