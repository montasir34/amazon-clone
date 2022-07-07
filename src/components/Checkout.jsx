

// import { Rating} from 'flowbite-react'
import React from 'react'
import Cart from './Cart'

function Checkout() {
  return (
    <div className=''>
      <div className='grid grid-cols-12 gap-x-5 p-5'>
        <div className='p-4 shadow-lg bg-white col-span-8'>
            <h1 className='text-2xl'>Shopping Cart</h1>
            <div className='flex justify-between mt-4'>
                <p className='text-gray-500 cursor-pointer'>Deselect all items</p>
                <p  className='text-gray-500 cursor-pointer'> Price</p>
            </div>
            <hr />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
        <div className="col-span-4 flex flex-col gap-y-5">
        <div className="flex justify-center flex-col items-center  w-full p-4 shadow-md bg-white">
          <h1 className='font-[Nunito]  text-xl'>Subtotal (3items):$5335</h1>
          <div className='flex justify-center items-center mt-2 '>
            <button className='bg-yellow-300 hover:bg-yellow-400 px-16 py-1 rounded-lg'>proceed to checout</button>  
            </div>
            </div>
            <div className="w-full p-4 shadow-md bg-white">
                <h1 className='font-bold text-sm text-center'>Explore frequently repurchased items</h1>
                <div className='flex'>
                <img src='https://images-na.ssl-images-amazon.com/images/I/710tXFnInpL._AC_UL100_SR100,100_.jpg' alt="" />
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Checkout
