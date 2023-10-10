import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFilteredCountry } from './FilterSlice';



const FilterComponent = ({startFiltering}) => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    startFiltering(true)
    dispatch(fetchFilteredCountry(country))
  };

  return (
    <div className="filtered-country">
      
      <select value={selectedCountry} countryCode={selectedCountry} onChange={handleCountryChange} className="filter-option">
        <option value="">-- Choose a country --</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="ca">Canada</option>
        {/* Add more countries as needed */}
      </select>
    </div>
  );
};

export default FilterComponent;

