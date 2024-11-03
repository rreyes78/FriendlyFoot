import React, { useState } from 'react'

const SearchForm = ({placeholder, className}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (event) => {

        event.preventDefault(); // prevent reloading the web page

        console.log(event);
    }
  return (
    <form className={className == 'subscribe' ? 'border-white flex justify-center border m-auto h-[80%] w-full ' : 'border-black flex justify-center border m-auto h-[80%] w-full ' }  onSubmit={onSubmit}>
            <input  className='w-full p-2 '
                type="text" 
                placeholder={placeholder = 'Find item..' ? placeholder : 'Enter email'} 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                required />
            <button className={className == 'search' ? 'bg-blue text-[20px] w-28 max-h-full  text-white':'bg-red-primary m-1 text-[20px] w-28 max-h-full text-white'} type="submit">Send</button>
    </form>
  )
}

export default SearchForm