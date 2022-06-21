import './products.css'
import React from 'react'
import { useProductContext } from 'context/product-context/productContext'

function Products({apiData, currency}:any) {
  
  const {modalState} = useProductContext()
  
  return (
    <div className='products-container'>
      <div className="products__main">
        {apiData?.map(productsDisplay)}
      </div>
      </div>
  )

  //
  function productsDisplay(item:any) {
    return (
      <div className='display_items' key={item.id}>
        <div className="display_items__img">
          <img src={item.image_url} alt={item.title} />
        </div>

        <div className="">
          <p>{item.title}</p>
        </div>

        <div className="">
          <p>from {currency==='USD'?'$':currency} {item.price}</p>
        </div>

        <div className=''>
          <button onClick={()=>addCartBtn(item)}>Add to cart</button>
        </div>
      </div>)
  }

  //
  function addCartBtn(item:any) {
    
    modalState.setModalOnOff(()=> !modalState.modalOnOff)
    //@ts-ignore
    document.querySelector("body").style.overflow = "hidden";
    item = {...item, currency}
    modalState.setCurrentObj(item)
  }
}

export default Products