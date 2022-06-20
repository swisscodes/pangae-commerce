import React from 'react'
import {ReactComponent as Cartt} from './static/img/cartt.svg'

function NavRight({currencyData, setCurrency, currency}:any) {
  return (
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
				<div ><Cartt className='cartt'/></div>
			</div>
		</div>
  )
}

export default NavRight