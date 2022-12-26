import React from "react";
import RangeSlider from 'react-native-range-slider-expo';
import { useTheme } from 'styled-components/native';

const CRangeSlider = ({ min, max, fromValue, toValue, setFromValue, setToValue }) => {
  const theme = useTheme();

  return (
    <RangeSlider min={min} max={max}
      styleSize={"small"}
      fromValueOnChange={value => setFromValue(value)}
      toValueOnChange={value => setToValue(value)}
      inRangeBarColor={theme.colors.primary_button}
      knobSize={16}
      initialFromValue={fromValue}
      initialToValue={toValue}
      showRangeLabels={false}
      showValueLabels={false}
      barHeight={3}
      containerStyle={{
        width: '100%',
        padding: 5,
        height: 30,
      }}
    />
  );
};

export default CRangeSlider;