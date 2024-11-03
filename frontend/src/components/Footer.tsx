import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 font-Poppins w-full'>
      <p className=' w-fit m-auto mt-2 text-[14px] md:text-[16px]'>Our commitment to quality ensures that every step you take is supported by the best in style, comfort, and performance</p>
      <div className='flex gap-2 w-fit m-auto mt-2 mb-8'>
        <img className='w-[40px] h-[40px] cursor-pointer' src="../../src/assets/fb.png" alt="" />
        <img className='w-[40px] h-[40px] cursor-pointer'  src="../../src/assets/tw.png" alt="" />
        <img className='w-[40px] h-[40px] cursor-pointer'  src="../../src/assets/inta.png" alt="" />
      </div>
      <div>
        <div className='flex text-[0.650rem] sm:text-medium hover:cursor-pointer gap-1 font-semibold font-Poppins w-fit m-auto'>
          <span className='cursor-pointer'>Privacy and Policy</span>
          <span>|</span>
          <span className='cursor-pointer'>Contact Developer</span>
          <span>|</span>
          <span className='cursor-pointer'>Terms & Conditions</span>
          </div>
      </div>
      <div className='w-full'>
        <p className='w-fit m-auto text-[0.650rem] sm:text-medium hover:cursor-pointer'>Friendly-Foot 	© All Right Reserves</p>
      </div>
    </div>
  )
}

export default Footer