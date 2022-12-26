import React, { useContext, useState, useCallback } from 'react';

export const FilterContext = React.createContext({
  fromYear: 1950,
  toYear: 2023,
  fromPrice: 0,
  toPrice: 10000,
  selectedColor: '',
  selectedBrand: '',
  updateFromYear: (value) => {},
  updateToYear: (value) => {},
  updateFromPrice: (value) => {},
  updateToPrice: (value) => {},
  updateColor: (value) => {},
  updateBrand: (value) => {},
  clearAllFilters: () => {},
});

export const useFilter = () => useContext(FilterContext);

export const FilterContextProvider = ({ children }) => {
  const [fromYear, setFromYear] = useState(1950);
  const [toYear, setToYear] = useState(2023);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(10000);

  const [selectedColor, setColor] = useState('');
  const [selectedBrand, setBrand] = useState('');

  const clearAllFilters = () => {
    setFromYear(1950);
    setToYear(2023);
    setFromPrice(0);
    setToPrice(10000);
    setColor('');
    setBrand('');
  };

  const updateFromYear = (value) => {
    setFromYear(value);
  };
  const updateToYear = (value) => {
    setToYear(value);
  };
  const updateFromPrice = (value) => {
    setFromPrice(value);
  };
  const updateToPrice = (value) => {
    setToPrice(value);
  };
  const updateColor = (value) => {
    setColor(value);
  };
  const updateBrand = (value) => {
    setBrand(value);
  };

  return <FilterContext.Provider
    value={{
      fromYear,
      toYear,
      fromPrice,
      toPrice,
      selectedColor,
      selectedBrand,
      updateFromYear,
      updateToYear,
      updateFromPrice,
      updateToPrice,
      updateColor,
      updateBrand,
      clearAllFilters,
    }}
  >
    {children}
  </FilterContext.Provider>
}