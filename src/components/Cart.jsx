

import React from 'react'

function Cart({hr}) {
   
  return (
    <div>
       <div className='flex mt-3'>
            <img src='https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_AA180_.jpg' alt="" />
            <div className="flex flex-col w-full">
                <div className="flex justify-between">
                    <h1 className='text-xl'>xbox series</h1>
                    <h1>$273.00</h1>
                </div>
                <p className='text-xs mt-2 text-gray-600'>Only 4 left in stock - order soon.</p>
                <p className='text-xs mt-2 text-gray-600'>Shipped from: ARISDEALS</p>
                <p className='text-xs mt-2 text-gray-600'>Gift options not available.Gift options not available. Learn more</p>
                <select className='w-20 mt-5' name="quantity" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10+</option>
                </select>
            </div>
        </div> 
        <hr className='mt-2' />  
    </div>
    
  )
}

export default Cart
//  <div className='flex justify-between'>
// <h1 className='text-xl'>xbox series</h1>
// <h1>$273.00</h1>
// </div>
// </div>
// <div>
