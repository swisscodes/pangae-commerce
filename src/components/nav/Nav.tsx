import './nav.css';
import React from 'react';
import NavLeft from './NavLeft';
import NavRight from './NavRight';


function Nav({currencyData, setCurrency, currency}:any) {
  return (
    <div className='nav-container'>
			<div className="nav-main">
        <div className="nav-main__items">
          <NavLeft />
          <NavRight currencyData={currencyData} setCurrency={setCurrency} currency={currency}/>
        </div>
			</div>
    </div>
  )
};

export default Nav