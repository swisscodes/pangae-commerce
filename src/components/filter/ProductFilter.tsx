import './productfilter.css'
import React from 'react'

//used mostly any just for this porject time,refactoring from any is simple.

function ProductFilter({currency, setCurrency}:any) {
  return (
    <div className='prod_filter-container'>
        <div className="prod_filter__main">
            <div className="main__products">
              <h1>All Products</h1>
              <p> A 360&#176; look at Lumin</p>
            </div>
            <div className="main__filter">
              <select className='main__filter__select' name="cars" id="cars">
                <option value="saab" defaultValue='null' disabled>Filter by</option>
                <option  value='a'>A</option>
                <option  value='b'>B</option>
                <option  value='c'>C</option>
              </select> 
            </div>
        </div>
    </div>
  )
}

export default ProductFilter