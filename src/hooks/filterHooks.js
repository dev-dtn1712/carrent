import { useState } from 'react';

export const useFilterHooks = () => {
  const [fromYear, setFromYear] = useState(1950);
  const [toYear, setToYear] = useState(2023);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(10000);

  const [selectedColor, setColor] = useState('');
  const [selectedBrand, setBrand] = useState('');

  return [
    fromYear,
    toYear,
    fromPrice,
    toPrice,
    selectedColor,
    selectedBrand,
    setFromYear,
    setToYear,
    setFromPrice,
    setToPrice,
    setColor,
    setBrand,
  ];
}