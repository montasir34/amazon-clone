



import React from 'react'

function MobileCart({shoes1, shoes2, shoes3, shoes4, shoes5, shoes6, shoes7, shoes8, shoes9, title , isNine}) {
  return (
    <div className='bg-white my-2 p-2'>
        {!isNine && <div><h1 className='text-xl'>{title}</h1>
      <div className='grid p-6 object-fill justify-items-center gap-x-5 gap-y-10 grid-cols-2'>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes1} alt="..." class=" h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes2} alt="..." class=" h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes3} alt="..." class=" h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes4} alt="..." class=" h-28 object-center object-cover lg:w-full lg:h-full" />
      </div>
      </div>  
      <h1 className='text-cyan-600 ml-5 hover:text-red-700 
      hover:underline cursor-pointer'>Shop now</h1></div>}
      {isNine && 
      <div className=''>
        <h1 className='text-xl'>{title}</h1>
      <div className='grid mt-4 object-fill justify-items-center gap-x-2 gap-y-2 grid-cols-3'>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes1} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes2} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes3} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes4} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes5} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes6} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes7} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes8} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img src={shoes9} alt="..." class=" h-ful w-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      </div>  
      <h1 className='text-cyan-600 ml-5 hover:text-red-700 
      hover:underline cursor-pointer'>Shop now</h1></div>}
    </div>
    
  )
}

export default MobileCart