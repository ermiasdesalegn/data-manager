import React from 'react'

function Newsletter() {
  return (
    <div className='text-white py-16 ml-24 '>
    <div className=' pl-4 gap-6 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-col md:grid-cols-2 justify-center items-center'>
       <div> 
        <h2 className='font-bold text-xl sm:text-2xl md:text-3xl py-2'>Want tips & tricks to optimize your flow?</h2>
        <p className='font-medium pb-2 pt-4'>sign up to our newsletter and stay up to date</p> 
        </div>
        
        
       <div className=''>
        <div className='flex '>
        <input className='rounded-md md:w-[60%] ' placeholder='Enter your email'  />
        <button className='py-2  px-4 ml-3 mx-auto   rounded-md text-[#000300] bg-[#00df9a] ' >Notify me</button>
        </div>
       <p className='mt-4 text-sm '>We care about the protection of your data, Read <a className='text-[#00df9a] underline'>Privacy Policy</a> </p>
      </div>
    </div>
  </div>
  )
}

export default Newsletter
