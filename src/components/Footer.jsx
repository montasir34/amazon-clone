

import React from 'react'
import { Footer } from 'flowbite-react'

function FooterCom({scrollToTop, visible}) {
  return (
    <div className=''>
      <div className='w-full hover:bg-slate-600 flex justify-center font-[Nunito] bg-slate-700'  >
        <button className='w-full p-4' onClick={scrollToTop} 
          style={{display: visible ? 'inline' : 'none', color : 'white'}} >
          Back to top
      </button>
      </div>
      <div className='bg-slate-800'>
        <div className='grid grid-cols-10 font-[Nunito] text-white p-3 bg-slate-800'>
        <div className='col-span-1'> </div>
        <div className='col-span-2'>
          <h1 className=' font-bold'>Get to Know Us</h1>
          <div className="text-gray-400 mt-3 text-sm">
          <p>Carrers</p>
          <p>Blog </p>
          <p>About amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
          </div>
        </div>
        <div className='col-span-2'>
          <h1 className=' font-bold'>Make Money with Us</h1>
          <div className="text-gray-400 mt-3 text-sm">
             <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business </p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Advertise Your Products</p>
          <p>Host an Amazon Hub</p>
          <p> › See More Make Money with Us</p>
          </div>
         
        </div>
        <div className="col-span-2">
          <h1 className=' font-bold'>Amazon Payment Products</h1>
          <div className="text-gray-400 mt-3 text-sm">
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p> 
          </div>

        </div>
        <div className="col-span-2">
          <h1 className=' font-bold'>Let Us Help You</h1>
          <div className="text-gray-400 mt-3 text-sm">
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Manage Your Content and Devices</p>
          </div>
          
        </div>
      </div>
      <div className='flex flex-col text-gray-400 justify-center'>
         <Footer.Divider />
         <div className='mx-auto pb-7'>
           <Footer.Copyright
        
          href="#"
          by="Flowbite™"
          year={2022} 
        />
         </div>
       
      </div>
     
      </div>
      
      <div className="flex justify-center">
        Developed by Montaser :-)
      </div>
    </div>
  )
}

export default FooterCom
