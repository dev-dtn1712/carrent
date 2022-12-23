import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from 'styled-components/native';
import Container from "../../components/Container";
import FlexContainer from '../../components/Container/FlexContainer';
import CRangeSlider from "../../components/RangerSlider";
import { COLORS, BRANDS } from "../../constants/variables";

const Filter = () => {
  const [fromValueOfYear, setFromValueOfYear] = useState(1950);
  const [toValueOfYear, setToValueOfYear] = useState(2023);

  const [fromValueOfPrice, setFromValueOfPrice] = useState(0);
  const [toValueOfPrice, setToValueOfPrice] = useState(10000);

  const theme = useTheme();

  return (
    <Container>
      <FlexContainer>
        <View style={{ marginRight: 8 }}>
          <Text>Filter By Years</Text>
          <Text style={{ fontWeight: 'bold', color: theme.colors.primary_button }}>
            ({fromValueOfYear} - {toValueOfYear})
          </Text>
        </View>
        <CRangeSlider min={1950} max={2023} setFromValue={setFromValueOfYear} setToValue={setToValueOfYear} />
      </FlexContainer>

      <FlexContainer>
        <View style={{ marginRight: 8 }}>
          <Text>Filter By Price</Text>
          <Text style={{ fontWeight: 'bold', color: theme.colors.primary_button }}>
            ({fromValueOfPrice} - {toValueOfPrice})  
          </Text>
        </View>
        <CRangeSlider min={0} max={10000} setFromValue={setFromValueOfPrice} setToValue={setToValueOfPrice} />
      </FlexContainer>
      <FlexContainer>
        <View style={{ marginRight: 8 }}>
          <Text>Filter By Color</Text>
        </View>
        <FlexContainer>
          {COLORS.map((color, index) =>
            <TouchableOpacity
              key={index}
              style={{
                width: 30,
                height: 30,
                backgroundColor: color.toLowerCase(),
                borderRadius: 100
              }}
            />)
          }
        </FlexContainer>
      </FlexContainer>

      <FlexContainer>
        <View style={{ marginRight: 8 }}>
          <Text>Filter By Brand</Text>
        </View>
        <FlexContainer>
          {BRANDS.map((brand, index) =>
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: theme.colors.primary_button,
                color: theme.colors.primary,
                padding: 6
              }}
            >
              {brand}
            </TouchableOpacity>
          )}
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default Filter;