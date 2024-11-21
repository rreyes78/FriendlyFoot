import React, { useState } from 'react'
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import Pagination from '../components/Pagenation';
import CardCollection from '../components/CardCollection';
import SearchForm from '../components/SearchForm';
import Carousel from '../components/Carousel';

const Home = () => {

  const totalPages = 3;
  const [active, setActive] = useState('Men');

  const setActiveC = (event)  => {
    setActive(event);
  }
  const [currentPage, setCurrentPage] = useState(0);
  const catergory = [
    { value: 'Men', label: 'Men' },
    { value: 'Women', label: 'Women' },
    { value: 'Boy', label: 'Boy' },
    { value: 'Child', label: 'Child' }
  ];

  const card_data = [
    { brandModel: 'Air force 1 Nike (Black)', 
      brand: 'Nike',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: 'PHP 128200.00',
      new: false,
      Src: '../../src/assets/hot-collection.png'
    },
    { brandModel: 'Nike limited (Neon)', 
      brand: 'Nike 2k10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: 'PHP 1300.00',
      new: false,
      Src: '../../src/assets/hot-collection.png'
    },
    { brandModel: 'Air force 1 Nike (White)', 
      brand: 'High cut Nike (Black)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: 'PHP 12200.00',
      new: true,
      Src: '../../src/assets/hot-collection.png'
    },
    { brandModel: 'Air force 1 Nike (Black)', 
      brand: 'NikeSexy',
      price: 'PHP 12030.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      new: false,
      Src: '../../src/assets/hot-collection.png'
    },
    { brandModel: 'Nike limited (Neon)', 
      brand: 'JJKS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: 'PHP 6200.00',
      new: false,
      Src: '../../src/assets/hot-collection.png'
    },
    { brandModel: 'Air force 1 Nike (White)', 
      brand: 'Tae',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: 'PHP 2200.00',
      new: true,
      Src: '../../src/assets/hot-collection.png'
    },
  ];

  return (
    <>
      <section className='px-4 mb-4 flex-1 sm:px-8 sm:mb-6 md:flex md:px-14 md:mb-10 max-w-screen-2xl w-fit m-auto md:py-[40px]'>
        <div className='block items-center md:max-w-[680px] m-auto sm:pl-2 sm:mx-2'>
          <h3 className='text-[20px] md:text-[32px] md:max-w-[620px] font-bold sm:text-[30px] font-Mulish leading-tight'>Find the most affordable and friendly market shoe online at FriendlyFoot</h3>
          <p className='text-[16px] md:text-[20px] text-ligt-grey2 mt-1 sm:text-[18px] leading-tight'>Pick your favorite Collection which can be used as a standalone collection in website or as a widget to insert any hotest collection.</p>
        </div>
        <div className='w-fit m-auto max-w-[350px] screen392'>
        <Carousel carousel = 'Hero' hero_carousel = {card_data} />
        </div>
      </section>
      <section>
        <div className='bg-red-primary'><h1 className='text-white text-[30px] w-fit m-auto p-5 font-Braah tracking-widest sm:text-[36px] md:text-[40px]'>FRIENDLY SHOP</h1></div>
        <div className='p-5 sm:p-6 md:p-9'>
          <h5 className='w-fit p-2 m-auto text-medium sm:text-large' >Choose Your FriendlyFootwear Category</h5>
          <ul className='hidden md:flex w-fit m-auto gap-4'>
            {catergory.map((cat) => 
            <li>
              <button onClick={(event)=>{setActiveC(cat.value)}} className={active == cat.label ? 'active border border-black px-2 py-1 rounded-sm hover:cursor-pointer' : 'border border-black px-2 py-1 rounded-sm hover:cursor-pointer'} value={cat.value}>{cat.label}</button>
            </li>)}
          </ul>
          <div>
          <div className='flex w-fit gap-2 sm:gap-4 max-w-6xl  md:w-full md:justify-between m-auto'>
            <div className='md:hidden'><Dropdown selection = "type"/></div>
            <div><Dropdown selection = "brand" /></div>
            <div><Dropdown selection = "sort" /></div>
              </div>
              <div className='p-4'>
                <Card card_data = {card_data}/>
              </div>
        </div>
        </div>
        {/* <div id="pagination" className="flex justify-center space-x-2 mt-4">
            <button id="prev" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" disabled>Previous</button>
            <span id="page-info" className="self-center"></span>
            <button id="next" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Next</button>
        </div> */}

            <div className="w-full items-end bg-slate-300">

            {/* <Pagination /> */}

            </div>
      </section>
      <section className="w-full px-6 py-7 bg-red-primary-light bg-[url('../../src/assets/white-shoes.png')] bg-cover bg-center  md:px-0 md:py-0">
        <div className='md:flex max-w-4xl m-auto '>
        <div className='sm:flex sm:flex-col items-center justify-center text-center md:block md:p-0 md:text-left md:items-start  md:px-12 md:pt-20 md:mb-4'>
          <pre className="w-fit font-semibold font-noto text-center m-auto md:m-0 md:text-start ">
              <span className='md:hidden text-[20px]'>Are you ready<br />
              to lead the way?</span>
              <span className='hidden md:block justify-start text-[20px] md:text-[24px] '>Are you ready to<br />
              lead the way?</span>
          </pre>
          <p className="font-roboto text-white w-fit m-auto p-2 md:p-0">Friendly is dedicated to delivering a premium experience, offering top-tier competitive footwear that stands out in the market.</p>
          <button className='shadow-all  w-[120px] h-auto bg-red-primary text-white mt-4 px-4 py-2'>Explore</button>
        </div>
        <div className='hidden md:block h-full'>
          <img src="../../src/assets/banner.png" className='w-[495px]' alt="banner" />
        </div>
        </div>
        </section>
        <section className='max-w-5xl m-auto px-6 py-4 my-2 md:flex md:py-6 overflow-hidden'>
          <div className='md:w-[45%] md:pl-4'>
            <h1  className='text-red-primary font-bold font-Cairo text-[26px] md:text-[36px] leading-6 md:leading-[40px]'>FRIENDLY  <br/>COLLECTIONS</h1>
            <div className='separator my-1'/>
          </div>
          
          <div  className='flex-auto'>
            <div className="relative bg-[#FB8489] h-[250px] w-[250px] m-auto mt-10">
            
              <div className='absolute font-Cairo top-[-34px] right-[-49px] leading-8 text-[40px] py-0 font-bold'>
                <p className='tracking-wide'>SHOE</p>
                <p className='tracking-wide'>SHOP</p>
              </div>
              <div className='absolute font-Cairo right-[149px] top-[200px] leading-9 text-[40px] py-0 font-bold'>
                <p className='tracking-wide'>SHOE</p>
                <p className='tracking-wide'>MARKET</p>
              </div>
              
              <img src="../../src/assets/dot.png" className=' absolute top-[-50px] left-[-45px] w-[100px]' alt="banner" />
              <img src="../../src/assets/hot-collection.png" className=' absolute top-10 left-[-20px] w-[250px]' alt="banner" />
              <img src="../../src/assets/dot.png" className=' absolute top-[160px] p-0 left-[132px] w-[165px]' alt="banner" />

              <div className='absolute font-sans right-[-60px] top-[100px] leading-5'>
                  <p className='tracking-wide'>Special Collectiion <br/>of this week</p>
                </div>
            </div> 
          </div>
        </section>
        <section className='mt-14 w-full p-4'>
          <p className='text-[26px] w-fit m-auto tracking-wide' >Hot Collections</p>
          <div>
            <CardCollection card_collection = {card_data}/>
          </div>
        </section>
        <section className='mt-4 w-full p-4'>
          <p className='text-[26px] w-fit md:m-auto tracking-wide' >Trending Brands</p>
          <div className='mb-5 max-w-[1000px] m-auto '>
            {/* <CardCollection card_collection = {card_data}/> */}
            <Carousel carousel = 'Trending Brand' hero_carousel={null} />
          </div>
        </section>
        <section className="px-4 py-12 text-[16px] bg-red-primary bg-[url('../../src/assets/footbac.png')]">
          <div className='w-fit m-auto'>
            <h5 className='text-white text-[1rem] sm:text-large'>Subscribe to receive updates on our latest products and newsletter.</h5>
            <SearchForm placeholder = 'Enter email' className = 'subscribe'/>
          </div>
           
        </section>
    </>
  )
}

export default Home