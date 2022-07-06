

import { Rating} from 'flowbite-react'  
import React from 'react'

function CartSide() {
  return (
    <div>
        <div className='text-xs  ml-2 text-gray-500'>
                    <h1>Xbox Game Pass</h1>
                    <p>Xbox</p>
                <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                     <p className="ml-2  text-xs font-medium text-gray-500 dark:text-gray-400">
                        4.95 out of 5
                    </p>
                </Rating>     
                <p>Xbox Series S, Xbox Series</p>
                    <p>$29,58</p>
                    <h1 className='mt-3'>
                      <span className='p-2 m-2 bg-yellow-500 '>add to cart</span>  
                    </h1>
                    
                </div>
    </div>
  )
}

export default CartSide
