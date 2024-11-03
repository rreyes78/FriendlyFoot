import React, { useState, useRef, useEffect } from 'react';
import SearchForm from './SearchForm';
import Placeholder from 'react-select/dist/declarations/src/components/Placeholder';

const Header = () => {
    const [dropdownIsOpenFeature, setIsOpen1] = useState(false);
    const [dropdownIsOpenResources, setIsOpen2] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdownFeature = () => {
        setIsOpen1(!dropdownIsOpenFeature);
    };

    const toggleDropdownResources = () => {
        setIsOpen2(!dropdownIsOpenResources);
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen1(false); // Close dropdown
                setIsOpen2(false); // Close dropdown
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

  return (
    <section>
        <header>
            <div className='bg-ligt-grey '>
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
        <nav className='max-w-[2100px] m-auto flex justify-between gap-2 py-1 pl-2 pr-6  sm:px-10 sm:py-4 md:px-10'>
            <button className='bg-[#F1F6FF] p-2.5 rounded-[29px] md:hidden'><img className='w-7' src="../../src/assets/Menu.png" alt="Menu" /></button>
            <div className='hidden md:flex px-6 w-full justify-between'>
                <ul className="flex gap-6 text-[16px] font-semibold">
                    <li className="relative group ">
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
                                <li className="p-2 hover:bg-gray-200">Shop</li>
                                <li className="p-2 hover:bg-gray-200">Collection</li>
                                <li className="p-2 hover:bg-gray-200">Sale</li>
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
                            <div className="absolute left-0 top-5 bg-white shadow-all">
                                <ul className="flex flex-col">
                                    <li className="p-2 hover:bg-gray-200">Help Center</li>
                                    <li className="p-2 hover:bg-gray-200">Blog</li>
                                </ul>
                            </div>
                        )}
                </li>
                </ul>
                <div className='flex justify-between gap-2.5'>
                    <img className='w-6 h-6' src="../../src/assets/Search.png" alt="search" />
                    <img className='w-6 h-6' src="../../src/assets/shopping-cart.png" alt="cart" />
                    <img className='w-6 h-6' src="../../src/assets/User.png" alt="user" />
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