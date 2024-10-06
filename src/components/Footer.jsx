import React from 'react'
import{
    FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='text-gray-400'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-[1fr_2fr] grid-cols-1  gap-12 px-4 py-16'>
        <div><h1 className='text-[#00df9a] mb-4 font-medium text-xl' >REACT.</h1>
        <p className='text-s'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa vitae laudantium facere sunt quis numquam maxime, maiores commodi perspiciatis?</p>
        <div className="flex gap-8 text-3xl mt-8">
            <FaFacebookSquare/>
            <FaInstagramSquare/>
            <FaTwitterSquare/>
            <FaGithubSquare/>
            <FaDribbbleSquare/>
        </div>
        </div>
        <div className=' grid grid-cols-3 gap-2 sm:mt-12'>
           <p>Solutions</p>
           <p>Support</p>
           <p>Company</p>
           <p>Analysis</p>
           <p>Pricing</p>
           <p>About</p>
           <p>Marketing</p>
           <p>Documentation</p>
           <p>Blog</p>
           <p>Commerce</p>
           <p>Guides</p>
           <p>Jobs</p>
           <p>Insights</p>
           <p>API status</p>
           <p>Press</p>
           <p>Partners</p>
            <div/>
        </div>
      </div>
    </div>
  )
}

export default Footer
