import React from 'react'

const Card = ({card_data}) => {
  return (
    <div className='block w-full' >
        <ul  className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 p-4 w-fit m-auto text-[12px] md:text-[16px]'
>
            {card_data.map((card_data, index) => (
             <li className='flex-auto bg-ligt-grey3 max-w-[300px] p-4 rounded-[6px] box-border' key={index}>
                <div className=''>
                    <div className='flex items-center justify-between w-full box-border '>
                         <p>NEW </p>
                         {/* <i class="fas fa-heart text-gray-400 hover:text-red-500 cursor-pointer"></i> */}
                         <i className="far fa-heart text-black cursor-pointer"></i>
                    </div>
                    <div className='w-full'>
                        <img className='w-[200px] m-auto' src="../../src/assets/air_force_white.png" alt="" />
                    </div>
                    <div className='w-full pt-4 pb-3'>
                        <p className='max-w-[200px] flex justify-center items-center m-auto text-center'>{card_data.brandModel}</p>
                        <p className='w-fit m-auto text-center'><b>{card_data.price}</b></p>
                    </div>
                    <div className='w-full'>
                        <button className='w-full m-auto bg-gray-500 font-bold rounded-md text-white py-1 px-2 hover:text-black'>Check-out <span>
                            <img src="/assets/check_small.png" alt="" /></span></button>
                    </div>
                </div>
             </li>
            ))}
        </ul>
    </div>
  )
}

export default Card