import React, { useState } from 'react';


export const FilterComponent = ({startFiltering}) => {
  const [filteredCountry, setFilteredCountry] = useState(" ");
  const [showResults, setShowResults] = useState(false);
  

  const handleCountryChange=(e)=>{
    setFilteredCountry(e.target.value)
    if(filteredCountry){
      setShowResults(true)
      startFiltering(true)
    }
  }

  return (
    <div className='filtered-country'>

      {showResults && <h2>Filtered Articles for Country: {filteredCountry}</h2>}

      <select value={filteredCountry} selectedCountry={filteredCountry} onChange={handleCountryChange} className='filter-option'>
        <option value=''>--choose a country--</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="ca">Canada</option>
        {/* Adding more countries as needed */}
      </select>
      
      
    </div>
  );
};
