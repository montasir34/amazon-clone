

import chair from '../images/chair.jpg'
import beauty from '../images/beauty.jpg'
import games from '../images/games.jpg'
import million from '../images/million.jpg'
import productsim from '../images/products.jpg'

import { Carousel } from 'flowbite-react'
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'
import React, {useState} from 'react'
import Products from './Products'
import FooterCom from './Footer'

function Home() {
    function right(){
        document.getElementById( "slide" ).scrollLeft += 300;
    }
    function left(){
        document.getElementById( "slide" ).scrollLeft -= 300;
    }

    // scroll top
   
  return (
    <div className= 'bg-slate-200 h-[2450px] '>
        <div className="md:h-[540px] h-[200px]">
            <Carousel indicators={false}>
                <div className="flex gradient-mask-b-30 h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className='' src={chair} alt="" />
                </div>
                <div className="flex  gradient-mask-b-30 h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className='' src={beauty} alt="" />
                </div>
                <div className="flex  gradient-mask-b-30 h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className='' src={games} alt="" />
                </div>
                <div className="flex  gradient-mask-b-30 h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className='' src={productsim} alt="" />
                </div>
            </Carousel>
        </div>
        <div className="contain">
            <div className="products1">
        {/* <Products images=
            {[ 
            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
                ]}    
            imageName={['Headsets', 'Keyboards', ]}
            
             /> */}
        <div className="carts">
            <h1 className='text-2xl font-semibold'>Gaming accessories</h1>
            <div className="grid gap-y-8 mt-8 grid-cols-2">
                <div className='text-xs'> 
                    <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg' alt="" />
                    <h1>Headseats</h1>
                </div>
                <div className='text-xs'> 
                <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'  alt="" />
                    <h1>Keyboards</h1>
                </div>
                <div className='text-xs'> 
                <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg' alt="" />
                    <h1>Computer mice</h1>
                </div>
                <div className='text-xs'> 
                    <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg' alt="" />  
                    <h1>Chairs</h1>
                </div>
                <h1 className='text-cyan-600 hover:text-red-700 hover:underline cursor-pointer'>See more</h1>
            </div>
        </div>
        <div className="carts">
            <h1 className='text-2xl font-semibold'>Shop by Category</h1>
            <div className="grid gap-y-8 ml-5 gap-x-8 mt-8 grid-cols-2">
                <div className='text-xs'> 
                    <img  className='cursor-poine'src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg' alt="" />
                    <h1>Headseats</h1>
                </div>
                <div className='text-xs'> 
                    <img className='cursor-poine' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg" alt="" />
                    <h1>Keyboards</h1>
                </div>
                <div className='text-xs'> 
                <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg' alt="" />
                    <h1>Computer mice</h1>
                </div>
                <div className='text-xs'> 
                    <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg' alt="" />  
                    <h1>Chairs</h1>
                </div>
                <h1 className='text-cyan-600 hover:text-red-700 hover:underline cursor-pointer'>Shop now</h1>
            </div>
        </div>
        <Products images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg'
            title='Dresses'
            style='h-72'
        />
        <div className='flex flex-col items-center gap-y-4'>
            <div className=" h-32 w-full p-3 shadow-md bg-white">
                <h1 className='font-semibold  text-2xl'>Sign in for the best experience</h1>
                <div className='flex justify-center items-center mt-2 '>
                  <button className='bg-yellow-300 hover:bg-yellow-400 px-16 py-1 rounded-lg'>Sign in securely</button>  
                </div>
            </div>
            <div className=" shadow-md">
                <img src={million} alt="" />
            </div>
            </div>
       </div>

       <div className="products1">
        <Products 
            images='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
            title='Get fit at home'
            style='h-72'
            />
        <Products 
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg'
            title='Deals & Promotions'
            style='h-72'
            />
        <Products 
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
            title='Computers & Accessories'
            style='h-72'
            />
        <Products 
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg'
            title='Health & Personal Care'
            style='h-72'
            />
       </div>

       
        <div className='relative'>
            <div id='slide' className=' overflow-x-scroll relative scrollbar-hide shadow-xl 
       scroll-smooth  bg-white p-5 w-[1300px] mx-6   mt-5'>
      
         <div  className='w-[2800px] transition-all duration-700   flex gap-x-4'>
            <img className='' src='https://m.media-amazon.com/images/I/91cqEsyjd-L._AC_SY200_.jpg' alt="" />
            <img src="https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/811ftjOO5FL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81e4jgomhKL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81a5KHEkwQL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71hZD6S5MmL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/711c-uf6AFL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/91EBoiR3+eL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81vTTD9oyjL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/51OdkvPNE7L._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81PR3BDkqWL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/91pdllYEUfL._AC_SY200_.jpg" alt="" />
         </div>
       </div> 
       <div className="flex absolute top-16 z-20 mx-6  w-[1300px] justify-between text-xl">
            <div  onClick={left} className='bg-white px-2 select-none border-2 py-11 rounded-r-lg'>
                <MdArrowBackIosNew className='select-none' />  
            </div>
            <div  onClick={right} className='bg-white px-2 select-none border-2 py-11 rounded-l-lg'>
                <MdArrowForwardIos className='select-none' />
            </div>
        </div>
        </div>
        <div className="products1 ">
            <Products 
            title='Shop Laptops & Tablets'
            style='h-72'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
            />
            <Products 
            title='Create with strip light'
            style='h-72'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg'
            />
            <Products 
            title='Kindle E readers'
            style='h-72'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg'
            />
            <Products 
            title='New arrivals in Toys'
            style='h-72'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg'
            />
        </div>
        <div className="products1 ">
            <Products 
            title='Shop Pet supplies'
            style='h-80'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg'
            />
            <Products 
            title='For your Fitness Needs'
            style='h-80'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg'
            />
            <Products 
            title='Shop activity trackers and smartwatches'
            style='h-72'
            images='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'
            />
            <div className="carts">
                <h1 className='text-2xl font-semibold'>Gaming merchandise</h1>
                <div className="grid gap-y-12 ml-5 gap-x-8 mt-8 grid-cols-2">
                    <div className='text-xs'> 
                        <img  className='cursor-poine' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg' alt="" />
                        <h1>Apparel</h1>
                    </div>
                    <div className='text-xs'> 
                        <img className='cursor-poine' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg" alt="" />
                        <h1>Hats</h1>
                    </div>
                    <div className='text-xs'> 
                    <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg' alt="" />
                        <h1>Action figures</h1>
                    </div>
                    <div className='text-xs'> 
                        <img className='cursor-poine' src= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg' alt="" />  
                        <h1>Mugs</h1>
                    </div>
                    <h1 className='text-cyan-600 hover:text-red-700 hover:underline cursor-pointer'>See more</h1>
                </div>
            </div>
        </div>
        <div className=' shadow-xl relative  mt-5 bg-white py-8'>
            <div className='border flex justify-center items-center p-10 mx-2'>
                <div className='flex justify-center w-60 flex-col'>
                    <h1 className='text-sm text-center mb-1'>See personalized recommendations</h1>
                    <button className=' px-1 bg-gradient-to-t rounded-md text-xs p-1 font-[Nunito]
                     from-yellow-400 to-yellow-200 border border-yellow-400'>Sign in</button>
                     <h1 className='text-xs text-center mt-1'>New customer? <span className='hover:text-red-500 hover:underline cursor-pointer text-cyan-600'>Start here.</span></h1>
                </div>
            </div>
        </div>
       
        </div>
       
    </div>
  )
}

export default Home
