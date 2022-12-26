import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
import { useTheme } from 'styled-components/native';
import Container from '../../components/Container';
import FlexContainer from '../../components/Container/FlexContainer';
import CRangeSlider from '../../components/RangerSlider';
import { COLORS, BRANDS } from '../../constants/variables';
import { useFilter } from '../../contexts/filterContext';

const Filter = () => {
  const {
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
 } = useFilter();
  const navigation = useNavigation();
  const theme = useTheme();

  const [currentFromYear, setCurrentFromYear] = useState(fromYear);
  const [currentToYear, setCurrentToYear] = useState(toYear);
  const [currentFromPrice, setCurrentFromPrice] = useState(fromPrice);
  const [currentToPrice, setCurrentToPrice] = useState(toPrice);
  const [currentSelectedColor, setCurrentSelectedColor] = useState(selectedColor);
  const [currentSelectedBrand, setCurrentSelectedBrand] = useState(selectedBrand);
  
  const colors = COLORS.map(color => ({ label: color, value: color }));
  const [openColorDropdown, setOpenColorDropdown] = useState(false);
  const [colorItems, setColorItems] = useState(colors);

  const brands = BRANDS.map(brand => ({ label: brand, value: brand }));
  const [openBrandDropdown, setOpenBrandDropdown] = useState(false);
  const [brandItems, setBrandItems] = useState(brands);

  const showResult = () => {
    updateFromYear(currentFromYear);
    updateToYear(currentToYear);
    updateFromPrice(currentFromPrice);
    updateToPrice(currentToPrice);
    updateColor(currentSelectedColor);
    updateBrand(currentSelectedBrand);
    navigation.goBack();
  }

  const clearFilters = () => {
    setCurrentFromYear(1950);
    setCurrentToYear(2023);
    setCurrentFromPrice(0);
    setCurrentToPrice(10000);
    setCurrentSelectedColor('');
    setCurrentSelectedBrand('');
    clearAllFilters();
  }

  return (
    <Container>
      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Years</Text>
          <Text style={{ fontWeight: 'bold', color: theme.colors.primary_button }}>
            ({currentFromYear} - {currentToYear})
          </Text>
        </View>
        <CRangeSlider          
          min={1950}
          max={2023}
          fromValue={currentFromYear}
          toValue={currentToYear}
          setFromValue={setCurrentFromYear}
          setToValue={setCurrentToYear}
        />
      </FlexContainer>

      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Price</Text>
          <Text style={{ fontWeight: 'bold', color: theme.colors.primary_button }}>
            ({currentFromPrice} - {currentToPrice})  
          </Text>
        </View>
        <CRangeSlider
          min={0}
          max={10000}
          fromValue={currentFromPrice}
          toValue={currentToPrice}
          setFromValue={setCurrentFromPrice}
          setToValue={setCurrentToPrice}
        />
      </FlexContainer>
      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Color</Text>
        </View>
        <FlexContainer>
          <DropDownPicker
            open={openColorDropdown}
            value={currentSelectedColor}
            items={colorItems}
            setOpen={setOpenColorDropdown}
            setValue={setCurrentSelectedColor}
            setItems={setColorItems}
            multiple={false}
            badgeDotColors={COLORS}
            mode={'BADGE'}
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer style={{ zIndex: -99 }}>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Brand</Text>
        </View>
        <FlexContainer style={{ flex: 1, width: '100%' }}>
          <DropDownPicker
            open={openBrandDropdown}
            value={currentSelectedBrand}
            items={brandItems}
            setOpen={setOpenBrandDropdown}
            setValue={setCurrentSelectedBrand}
            setItems={setBrandItems}
            multiple={false}
            badgeDotColors={BRANDS}
            mode={'BADGE'}
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer style={{ zIndex: -100, marginTop: 24 }}>
        <View style={{ width: '50%', paddingRight: 8 }}>
          <Button
            color={theme.colors.secondary_button}
            title="Clear All Filters"
            onPress={clearFilters}
          />
        </View>
        <View style={{ width: '50%', paddingLeft: 8 }}>
          <Button
            title="Show Result"
            onPress={showResult}
          />
        </View>
      </FlexContainer>
    </Container>
  );
};

export default Filter;