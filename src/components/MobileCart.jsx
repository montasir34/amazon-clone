



import React from 'react'

function MobileCart({shoes1, shoes2, shoes3, shoes4, shoes5, shoes6, shoes7, shoes8, shoes9, title , isNine}) {
  return (
    <div className='bg-white my-2 p-2'>
        {!isNine && <div><h1 className='text-xl'>{title}</h1>
      <div className='grid p-6 object-fill justify-items-center gap-x-5 gap-y-10 grid-cols-2'>
      <div className="">
          <img src={shoes1} alt="..." className=" cursor-pointer h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes2} alt="..." className=" cursor-pointer h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes3} alt="..." className=" cursor-pointer h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes4} alt="..." className=" cursor-pointer h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      </div>  
      <h1 className='text-cyan-600 ml-5 hover:text-red-700 
      hover:underline cursor-pointer'>Shop now</h1></div>}
      {isNine && 
      <div className=''>
        <h1 className='text-xl'>{title}</h1>
      <div className='grid mt-4 object-fill justify-items-center gap-x-2 gap-y-2 grid-cols-3'>
      <div className="">
          <img src={shoes1} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes2} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes3} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes4} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes5} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes6} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes7} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes8} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="">
          <img src={shoes9} alt="..." className=" cursor-pointer h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      </div>  
      <h1 className='text-cyan-600 ml-5 hover:text-red-700 
      hover:underline cursor-pointer'>Shop now</h1></div>}
    </div>
    
  )
}

export default MobileCart