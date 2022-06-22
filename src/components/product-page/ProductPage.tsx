import React, { useEffect, useState, Suspense} from 'react'
import './productpage.css';
import { useProductContext } from 'context/product-context/productContext';
import ProductFilter from '../filter/ProductFilter';
import AddProdModal from 'components/products/add-prod-modal/AddProdModal';

const Products = React.lazy(() => import('components/products/Products'));



function ProductPage({apiData, currency}:any) {
	
	const {modalState} = useProductContext()

  return (
		
			<div className='prod_page-container'>
				{modalState.modalOnOff && <AddProdModal /> }
				<div className="prod_page__main">
					<ProductFilter />
					<Suspense fallback={'loading'}>
						<Products apiData={apiData} currency={currency}/>
					</Suspense>
				</div>
			</div>

  )
};

export default ProductPage