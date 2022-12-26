import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Container from '../../components/Container';
import FlexContainer from '../../components/Container/FlexContainer';
import CRangeSlider from '../../components/RangerSlider';
import { COLORS, BRANDS } from '../../constants/variables';
import { useFilterHooks } from '../../hooks/filterHooks';

const Filter = () => {
  const [
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
  ] = useFilterHooks();
  const navigation = useNavigation();
  const theme = useTheme();

  const pickColor = (color) => {
    if (selectedColor === color) {
      setColor('');
    } else {
      setColor(color);
    }
  }

  const pickBrand = (brand) => {
    if (selectedBrand === brand) {
      setBrand('');
    } else {
      setBrand(brand);
    }
  }

  return (
    <Container>
      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Years</Text>
          <Text style={{ fontWeight: 'bold', color: theme.colors.primary_button }}>
            ({fromYear} - {toYear})
          </Text>
        </View>
        <CRangeSlider          
          min={1950}
          max={2023}
          setFromValue={setFromYear}
          setToValue={setToYear}
        />
      </FlexContainer>

      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Price</Text>
          <Text style={{ fontWeight: 'bold', color: theme.colors.primary_button }}>
            ({fromPrice} - {toPrice})  
          </Text>
        </View>
        <CRangeSlider
          min={0}
          max={10000}
          setFromValue={setFromPrice}
          setToValue={setToPrice}
        />
      </FlexContainer>
      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Color</Text>
        </View>
        <FlexContainer>
          {COLORS.map((color, index) =>
            <TouchableOpacity
              key={index}
              onPress={() => pickColor(color)}
              style={{
                width: 30,
                height: 30,
                backgroundColor: color.toLowerCase(),
                borderRadius: 100,
                borderWidth:  selectedColor === color ? 3 : 0,
                borderColor: 'gray',
              }}
            />)
          }
        </FlexContainer>
      </FlexContainer>

      <FlexContainer>
        <View style={{ marginRight: 8, width: 110 }}>
          <Text>Filter By Brand</Text>
        </View>
        <FlexContainer>
          {BRANDS.map((brand, index) =>
            <TouchableOpacity
              key={index}
              onPress={() => pickBrand(brand)}
              style={{
                backgroundColor: theme.colors.primary_button,
                color: theme.colors.primary,
                padding: 6,
                borderWidth:  selectedBrand === brand ? 3 : 0,
                borderColor: 'gray',
              }}
            >
              {brand}
            </TouchableOpacity>
          )}
        </FlexContainer>
      </FlexContainer>

      <Button
        title="Show Result"
        onPress={() => navigation.navigate('All Cars')}
      />
    </Container>
  );
};

export default Filter;