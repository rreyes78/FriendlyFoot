import React from 'react'
import { useState } from 'react';
import Select from 'react-select';

const Dropdown = ({selection}) => {

    const optionsType = [
        { value: 'type1', label: 'Men' },
        { value: 'type2', label: 'Women' },
        { value: 'type3', label: 'Boy' },
        { value: 'type4', label: 'Child' }
      ];

    const optionsBrand = [
        { value: 'brand1', label: 'Nike' },
        { value: 'brand2', label: 'Ikea' },
        { value: 'brand3', label: 'Jordan' }
      ];
    const optionsSort = [
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Most Rated', label: 'Most Rated' }
      ];
    
      const [selectedOption, setSelectedOption] = useState(null);
    
      const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
      };

  return (
    <><div className='w-fit text-[0.650rem] sm:text-medium hover:cursor-pointer' >
        <Select
                    className='hover:cursor-pointer'
                    value={selectedOption}
                    onChange={handleChange}
                    options={selection == 'brand' ? optionsBrand : selection == 'sort' ? optionsSort : optionsType}
                    placeholder={selection == 'brand' ? "Select Brand" : selection == 'type' ? "Select Type" : "Sort By"}
                    />
        </div>
    </>
    
  )
}

export default Dropdown