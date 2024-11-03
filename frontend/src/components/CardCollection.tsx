import React from 'react'

const CardCollection = ({card_collection}) => {

  return (
    <div className='block w-full' >
        <ul  className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 p-4 w-fit m-auto text-[12px] md:text-[16px]'
>
            {card_collection.map((card_data, index) => (
             <li className='flex-auto bg-slate-100 max-w-[300px] p-4 rounded-[6px] box-border ' key={index}>
                <div className=''>
                <p className='max-w-[200px] m-auto text-right float-right'>{card_data.description}</p>
                    <div className='flex items-center justify-between w-full box-border '>
                         {/* <i class="fas fa-heart text-gray-400 hover:text-red-500 cursor-pointer"></i> */}
                         <i className="far fa-heart text-black cursor-pointer"></i>
                    </div>
                    <div className='w-full'>
                        <img className='w-[200px] m-auto' src="../../src/assets/air_force_white.png" alt="" />
                    </div>
                    {/* <div className='w-full  pt-4'>
                        <p className='max-w-[200px] flex justify-center items-center m-auto text-center'>{card_data.brandModel}</p>
                    </div> */}
                    <div className='w-full'>
                        <button className=' bg-red-primary flex float-right shadow-all font-bold rounded-md text-white py-1 px-2 hover:bg-red-primary-light'>Explore</button>
                    </div>
                </div>
             </li>
            ))}
        </ul>
    </div>
  )
}

export default CardCollection