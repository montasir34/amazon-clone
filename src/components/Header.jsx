
import React from 'react'
import logo from '../images/logo.png'
import usa from '../images/usa.png'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineSearch} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {HiOutlineLocationMarker} from 'react-icons/hi'

function Header() {
   const navigate = useNavigate()
  return (
    <div>
      <div className='header '>
        <img onClick={()=> navigate('/')} className='logo' src={logo} alt="" />
     <div className='location whitespace-pre-wrap ml-1'>
        Delivery to <br /> 
        <div className='flex items-center'>
        <HiOutlineLocationMarker className='text-white text-sm' />
        <span className='country'>Sudan</span>
        </div>       
     </div>
    <div className='search-bar'>
      <div className='category'>
        All</div>
      <div className='input-container'>
        <input className='input-search' type="text" />
      </div>
      <div className='search-icon'>
        <AiOutlineSearch  />
      </div>
    </div>
    <div>
      <img className='h-5 w-7 ml-8' src={usa} alt="" />
    </div>
    <div>
      <div className='flex flex-col ml-8'>
        <span className='text-gray-200 text-xs whitespace-nowrap '>Hello, Sign in</span>
        <span className='text-white text-sm font-semibold whitespace-nowrap '>Acount & Lists</span>
      </div>
    </div>
    <div>
      <div className='flex flex-col text-white ml-8'>
        <span className='text-gray-200 text-xs'>Returns</span>
        <span className='text-sm whitespace-nowrap font-semibold'>& orders</span>
      </div>
    </div>
    <div className='cursor-pointer flex gap-x-2' onClick={()=> navigate('/checkout')}>
      <FiShoppingCart className='text-white text-2xl  ml-8' />
      <span className='text-orange-300'>
              0
            </span>
    </div>
      </div>
      <div className="headerb">
        <AiOutlineMenu className='text-xl cursor-pointer text-white' />
        <div className=' gap-x-4 flex items-center'>
            <p className=' text-white ml-1 font-bold font-[Nunito]  hover:text-orange-500'>All</p>
            <p className=' cursor-pointer text-white font-[Nunito] ml-4 hover:text-orange-500'>Deals</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Amazon Basics</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Best Sellers</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Livestreams</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Video</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>New Releases</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Books</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Home</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Gift Cards</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Health & Houshold</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Pc</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Music</p>
            <p className=' cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Lists</p>
          </div>
      </div>
     

    {/* mobile header */}


      <div className="headerM">
        <div className='flex items-center'>
          <AiOutlineMenu className='text-white text-xl' />
          <img onClick={()=> navigate('/')} placeholder='Search Amazon' className='logoM' src={logo} alt="" />
        </div>
        <div className='flex items-center'>
          <p className='text-xs text-gray-200'>
            Sign In
          </p>
          <MdKeyboardArrowRight className='text-xs text-gray-200'/>
          <MdOutlinePersonOutline className='text-2xl text-gray-200' />
          <div onClick={()=> navigate('/checkout')} className='flex  items-center gap-x-2'>
            <FiShoppingCart className='text-white text-xl ml-2' />
            <span className='text-orange-300'>
              0
            </span>
          </div>
        </div> 
      </div>
      <div className="headerM2">
        <div className='search-barM'>
          <div className='input-containerM'>
            <input  placeholder='Search Amazon' className='input-search' type="text" />
          </div>
          <div className='search-icon'>
            <AiOutlineSearch  />
          </div>
        </div>
        <div className="container scrollbar-hide p-4 overflow-x-scroll">
          <div className='w-[1040px] gap-x-4 flex'>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Deals</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Amazon Basics</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Best Sellers</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Livestreams</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Video</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>New Releases</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Books</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Home</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Gift Cards</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Health & Houshold</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Pc</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Music</p>
            <p className='cursor-pointer text-white font-[Nunito] hover:text-orange-500'>Lists</p>
          </div>
        </div>
      </div>
      <div className='w-full md:hidden flex gap-x-2 items-center bg-slate-700 p-2'>
        <HiOutlineLocationMarker className='text-white text-xl' />
        <h1 className='text-white font-[Nunito]'>Delivery to Sudan</h1>
      </div>
    </div>
  )
}

export default Header
