import React, { useState, useRef, useEffect } from 'react';
import SearchForm from './SearchForm';
import Placeholder from 'react-select/dist/declarations/src/components/Placeholder';

const Header = () => {
    const dropdownRef = useRef(null);
    const home = useRef(null);
    const feature = useRef(null);
    const resource = useRef(null);
    const [dropdownIsOpenFeature, setIsOpenFeature] = useState(false);
    const [dropdownIsOpenResources, setIsOpenResources] = useState(false);
    const [mentuIsOpen, setIsOpenMenu] = useState(false);
    const [dropdown, setdropdown]=useState(false)


    const toggleMenuFeature = () => {
        setIsOpenMenu(!mentuIsOpen);
    };

    const toggleDropdownFeature = () => {
        setIsOpenFeature(!dropdownIsOpenFeature);
    };

    const toggleDropdownResources = (e) => {
        setIsOpenResources(!dropdownIsOpenResources);
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenFeature(true); // Close dropdown
                setIsOpenResources(true); // Close dropdown
                setIsOpenMenu(true); // Close Menu
            } else {
                setIsOpenFeature(false); // Close dropdown
                setIsOpenResources(false); // Close dropdown
                setIsOpenMenu(false); // Close Menu
            }
        };

        // Function to handle screen resizing
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpenFeature(false); // Close dropdown
                setIsOpenResources(false); // Close dropdown
                setIsOpenMenu(false); // Close Menu
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [dropdownRef, home, resource]);

  return (
    <section>
        <header>
            <div className='bg-ligt-grey'>
            <div className='max-w-[2200px] m-auto bg-gray-light flex px-4 py-4 items-center justify-between sm:px-10 sm:py-6 md:px-12 '>
            <div>
                <h2 className=' font-Monomaniac text-[26px] text-red-primary font-bold sm:text-[30px] md:text-[34px]'>FriendlyFoot</h2>
            </div>
            <div className='flex items-center justify-between'>
                <button className='text-small mr-1 sm:text-medium'>Sign-In</button>
                <button className='hidden bg-red-primary-light2 text-white text-sm md:flex rounded-[6px] p-2 hover:bg-gray-200 hover:text-black'>Sign-Up</button>
                <button className='hidden text-sm'>Sign-out</button>
                <button className='text-small flex text-sm border border-black rounded-[6px] p-2 hover:bg-gray-200 md:hidden'><span> <img className='h-4 w-4 mr-1 mt-0.5' src="../../src/assets/shopping-cart.png" alt="cart" /></span>View Cart</button>
                {/* <button className='flex text-sm bg-red-primary-light2 rounded-[6px] p-2 text-white'>Sign-out</button> */}
                </div>
            </div>
            </div>
        <nav className='relative max-w-[2100px] m-auto flex justify-between gap-2 py-1 pl-2 pr-6  sm:px-10 sm:py-4 md:px-10'>
            <button onClick={toggleMenuFeature} className='bg-[#F1F6FF] p-2.5 rounded-[29px] md:hidden'><img className='w-7' src="../../src/assets/Menu.png" alt="Menu" /></button>

            {mentuIsOpen && 
                <div className='z-50 absolute bg-[#282a35] w-[95%] h-[800px] z-999 top-0 left-0 leading-loose text-white md:hidden'>
                {/* mobile menu */}
                <button onClick={toggleMenuFeature} className=' text-end w-full px-6 py-6'><i className="fas fa-xmark"></i></button>
                <ul className="block text-[16px] font-semibold md:hidden">
                    <li  className="relative group cursor-pointer py-4 px-4 hover:bg-gray-200 hover:text-black">
                        Home
                    </li>
                    <div className='separator-white'></div>
                    <li className="group" ref={feature} >
                        <button onClick={toggleDropdownFeature} className="py-4 px-4 w-full flex items-center hover:bg-gray-200 hover:text-black">
                            Feature
                            <span className="ml-1">
                                <i className={`fas ${dropdownIsOpenFeature ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                            </span>
                        </button>
                        {dropdownIsOpenFeature && (
                        <div className=" w-full">
                            <ul className="flex flex-col">
                                <li className=" px-6 py-4  hover:bg-gray-200 hover:text-black cursor-pointer">Shop</li>
                                <li className=" px-6 py-4  hover:bg-gray-200 hover:text-black cursor-pointer">Collection</li>
                                <li className=" px-6 py-4  hover:bg-gray-200 hover:text-black cursor-pointer">Sale</li>
                            </ul>
                        </div>
                    )}
                    </li>
                    <div className='separator-white'></div>
                    <li className="group" ref={resource}>
                        <button onClick={toggleDropdownResources} className="py-4 px-4 w-full flex items-center hover:bg-gray-200 hover:text-black">
                            Resources
                            <span className="ml-1">
                                <i className={`fas ${dropdownIsOpenResources ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                            </span>
                        </button>
                        {dropdownIsOpenResources && (
                            <div className=" w-full">
                                <ul className="flex flex-col">
                                    <li className=" px-6 py-4  hover:bg-gray-200 hover:text-black cursor-pointer">Help Center</li>
                                    <li className=" px-6 py-4 hover:bg-gray-200  hover:text-black cursor-pointer">Blog</li>
                                </ul>
                            </div>
                        )}
                </li>
                <div className='separator-white'></div>
                </ul>
            </div>
            }
            <div className='hidden md:flex px-6 w-full justify-between'>
                <ul className="flex gap-6 text-[16px] font-semibold">
                    <li className="relative group cursor-pointer "  ref={dropdownRef}>
                        Home
                    </li>
                    <li className="relative group" ref={dropdownRef}>
                        <button onClick={toggleDropdownFeature} className="flex items-center">
                            Feature
                            <span className="ml-1">
                                <i className={`fas ${dropdownIsOpenFeature ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                            </span>
                        </button>
                        {dropdownIsOpenFeature && (
                        <div className="absolute left-0 top-5 bg-white shadow-xl w-[120px]">
                            <ul className="flex flex-col">
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Shop</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Collection</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Sale</li>
                            </ul>
                        </div>
                    )}
                    </li>
                    <li className="relative group" ref={dropdownRef}>
                        <button onClick={toggleDropdownResources} className="flex items-center">
                            Resources
                            <span className="ml-1">
                                <i className={`fas ${dropdownIsOpenResources ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                            </span>
                        </button>
                        {dropdownIsOpenResources && (
                            <div className="absolute left-0 top-5 bg-white shadow-all w-[120px]">
                                <ul className="flex flex-col">
                                    <li className="p-2 hover:bg-gray-200 cursor-pointer">Help Center</li>
                                    <li className="p-2 hover:bg-gray-200 cursor-pointer">Blog</li>
                                </ul>
                            </div>
                        )}
                </li>
                </ul>
                <div className='flex justify-between gap-2.5'>
                    <img className='w-6 h-6 cursor-pointer' src="../../src/assets/Search.png" alt="search" />
                    <img className='w-6 h-6 cursor-pointer' src="../../src/assets/shopping-cart.png" alt="cart" />
                    <img className='w-6 h-6 cursor-pointer' src="../../src/assets/User.png" alt="user" />
                </div>
            </div>
            
            <div className='flex w-full md:hidden'>
            <SearchForm placeholder = 'Find item..' className = 'search'/>
            </div>
        </nav>

    </header>
    </section>
    
    
  )
}

export default Header