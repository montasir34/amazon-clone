

import React from 'react'

function Products({images, title , style}) {
  return (
      <React.Fragment>
        <div className="carts">
          <div className="flex justify-between flex-col items-stretch">
            <h1 className='text-2xl font-semibold'>{title}</h1>
              <img className={`${style} grow mt-3 object-cover `} src={images} alt="" />
              <h1 className='cursor-pointer text-cyan-700 mt-3 hover:text-red-600 hover:underline '>Shop now</h1>
            </div> 
        </div>
      </React.Fragment>    
  )
}

export default Products
