import './addprodmodal.css'
import React, { useState } from 'react'
import { useProductContext } from 'context/product-context/productContext'

function AddProdModal() {

	const [itemQuantity, setItemQuantity] = useState<number>(1)
	const {modalState, cart} = useProductContext()

  return (
	<>
		<div className='util-overlay' onClick={()=>closeModalx()}></div>
		<div className='addprodmodal-container'>
			<div className="addprodmodal-main">
				<div className='util-modalx'>
					<button onClick={()=>closeModalx()}>X</button>
				</div>
				<div className='util-cartmodal_title'><h2>{modalState?.currentObj.title}</h2></div>
				
				<div className='addprodmodal-body'>
					<p><i>Includes: Charcoal Cleanser, Ultra-Hydrating Moisturizing Balm, Exfoliating Rub, 
						Anti-Wrinkle Serum, Dark Circle Defense</i>
					</p>
					<p>from {modalState?.currentObj.currency==='USD'?'$':modalState?.currentObj.currency} {modalState?.currentObj.price}</p>
				</div>

				<div><input type="number" min='1' onChange={(e)=> setItemQuantity(()=> Number(e.target.value))}/></div>
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
		cart.addToCart(item.id, item, itemQuantity)
		closeModalx()
	}
}

export default AddProdModal