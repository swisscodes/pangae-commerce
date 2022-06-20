import './cartmodal.css'
import React from 'react'
import { useProductContext } from 'context/product-context/productContext'

function CartModal() {

	const {modalState} = useProductContext()
	
  return (
		console.log(modalState?.currentObj),
    <div className='cartmodal-container'>
      <div className="cartmodal-main">
				<div className='util-modalx'><button onClick={()=>modalState.setModalOnOff(()=> !modalState.modalOnOff)}>X</button></div>
				<div className='util-cartmodal_title'><h2>{modalState?.currentObj.title}</h2></div>
				
				<div className='cartmodal-body'>
					<p><i>Includes: Charcoal Cleanser, Ultra-Hydrating Moisturizing Balm, Exfoliating Rub, 
						Anti-Wrinkle Serum, Dark Circle Defense</i>
					</p>
					<p>from {modalState?.currentObj.currency==='USD'?'$':modalState?.currentObj.currency} {modalState?.currentObj.price}</p>
				</div>
			</div>
		</div>
  )
}

export default CartModal