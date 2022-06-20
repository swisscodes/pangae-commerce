import React, {useEffect, useRef} from 'react'

export type TrefObj = {
}

function NavLeft() {

  const linksRef = useRef({})

  useEffect(() => {
    console.log(linksRef.current)
  })

  return (
    <div className='navleft-container'>
      <div className="navleft-main">
				<p><a ref={(el) => giveRef(el, linksRef)} href='/' onClick={(e)=>clickLink(e)}>LUMIN</a></p>
				<a ref={(el) => giveRef(el, linksRef)} href='/shop' onClick={(e)=>clickLink(e)}>Shop</a>
				<a ref={(el) => giveRef(el, linksRef)} href='/learn' onClick={(e)=>clickLink(e)}>Learn</a>
			</div> 
		</div>
  )

  //
  function clickLink(e:React.MouseEvent):void {
    e.preventDefault()
    console.log(e.target)
   
    window.history.pushState({}, '','/');
    //might use react router dom for ease
  }

  function giveRef(el:any, ref:any) {
    ref.current = {...linksRef.current, [el?.getAttribute("href").replace('/', '')]:el}
  }
}

export default NavLeft