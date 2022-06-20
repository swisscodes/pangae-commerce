import { gql } from '@apollo/client'

export const PRODUCT_LIST = gql`
	query Product ($currency:Currency) {
		products {
			id,
			title,
			image_url,
			price(currency:$currency)
		}
		currency
			
	}
`