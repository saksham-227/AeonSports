import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:2-2/3 text-gray-600'>
                Let’s experience a perfect amalgamation of comfort and fashion in ous sports merchandise
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>

        <div>
            <p className='text-xl font-mrdium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-345-6789</li>
                <li>contact@aeonsports.com</li>
            </ul>
        </div>
        
        <div>
            <hr />
            <p className='py-5 text-center'>Copyright 2024@ aeonsports.com -All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer