import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
function Cards() {
  return (
    <div className='bg-white px-4 w-full py-[10rem]'>
      <div className='grid md:grid-cols-3 mx-auto gap-8 max-w-[1240px] '>
        <div className='flex w-full flex-col shadow-xl  bg-white p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white'/>
            <h1 className='font-bold text-xl py-8 text-center'>SIngle User</h1>
            <p className='text-2xl font-bold text-center'>$149</p>
            <div className=' text-center font-medium'>
            <p className='py-2 border-b mx-8'>500 BB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className=' bg-[#00df9a] w-[200px] mx-auto mt-4 font-medium py-2 px-6 rounded-md'>Start Trial</button>

        </div>
        <div className='flex w-full flex-col shadow-xl  bg-gray-100 p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
            <img src={Double} className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
            <h1 className='font-bold text-xl py-8 text-center'>SIngle User</h1>
            <p className='text-2xl font-bold text-center'>$149</p>
            <div className=' text-center font-medium'>
            <p className='py-2 border-b mx-8'>500 BB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className=' bg-black  text-[#00df9a] w-[200px] mx-auto mt-4 font-medium py-2 px-6 rounded-md'>Start Trial</button>

        </div>  <div className='flex w-full flex-col shadow-xl  bg-white p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Triple} className='w-20 mx-auto mt-[-3rem] bg-white'/>
            <h1 className='font-bold text-xl py-8 text-center'>SIngle User</h1>
            <p className='text-2xl font-bold text-center'>$149</p>
            <div className=' text-center font-medium'>
            <p className='py-2 border-b mx-8'>500 BB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className=' bg-[#00df9a] w-[200px] mx-auto mt-4 font-medium py-2 px-6 rounded-md'>Start Trial</button>

        </div>
      </div>
    </div>
  )
}

export default Cards
