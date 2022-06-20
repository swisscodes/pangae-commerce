import './mainlayout.css'
import React, {useEffect, useState} from 'react';
import ProductProvider from 'context/product-context/productContext';
import {useQuery}  from '@apollo/client';
import { PRODUCT_LIST } from '../../GraphQL/Queries';
import Nav from 'components/nav/Nav';


const ProductPage = React.lazy(() => import('components/product-page/ProductPage'));

type TapiData = {
	products:[],
	currency:[]
}


function MainLayout() {

	const [apiData, setApiData] = useState<TapiData>()
	const [currency, setCurrency] = useState<string>('USD')
	const {error, loading, data} = useQuery(PRODUCT_LIST, {
		variables: {currency},
	})
/* will refactor many of this to context api, am new to graphql 
	ussually deal with rest and redux */

	useEffect(() => {
		setApiData(()=>data)
	},[data, currency]);

  return (
		<ProductProvider>
			<div className='whole-wrapper'>
				<div className='nav_whole_wrapper'>
					<Nav currencyData={apiData?.currency} setCurrency={setCurrency} currency={currency}/>
				</div>

				<div className='body_whole_wrapper'>
					
					<ProductPage apiData={apiData?.products} currency={currency}/>
				</div>
				
			</div>
		</ProductProvider>
  )
}

export default MainLayout