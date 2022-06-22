import './cartmodal.css'
import React from 'react'
import { useProductContext } from 'context/product-context/productContext'

function CartModal() {

	const {modalState, cart} = useProductContext()

  return (
		console.log(modalState?.currentObj),
	<>
		<div className='overlay'></div>
		<div className='cartmodal-container'>
			<div className="cartmodal-main">
				<div className='util-modalx'>
					<button onClick={()=>closeModalx()}>X</button>
				</div>
				<div className='util-cartmodal_title'><h2>{modalState?.currentObj.title}</h2></div>
				
				<div className='cartmodal-body'>
					<p><i>Includes: Charcoal Cleanser, Ultra-Hydrating Moisturizing Balm, Exfoliating Rub, 
						Anti-Wrinkle Serum, Dark Circle Defense</i>
					</p>
					<p>from {modalState?.currentObj.currency==='USD'?'$':modalState?.currentObj.currency} {modalState?.currentObj.price}</p>
				</div>

				<div className='cartmodal-footer'>
					<div><button onClick={()=>closeModalx()}>cancell</button></div>
					<div><button onClick={()=> addItem(modalState.currentObj)}>Add</button> </div>
				</div>
			</div>
		</div>
	</>
  )
	//
	function closeModalx() {
		modalState.setModalOnOff(()=> !modalState.modalOnOff)
		//@ts-ignore
		document.querySelector("body").style.overflow = 'initial';
	}

	function addItem(item:any) {
		cart.addToCart(item.id, item)
	}
}

export default CartModal