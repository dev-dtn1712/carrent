import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import useAxios from 'axios-hooks';
import Thumbnail from './Thumbnail';
import CardContainer from './CardContainer';
import Description from './Description';
import InfoSection from './InfoSection';
import Title from './Title';
import SubTitle from './SubTitle';

import { VIN_API_ENDPOINT } from '../../constants/variables';

const Card = ({ car, img }) => {
  const [{ data }] = useAxios(
    `${VIN_API_ENDPOINT}${car.car_vin}?format=json&modelyear=${car.car_model_year}`
  );

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(data?.Count || 0);
  }, [data?.Count]);


  return (
    <CardContainer>
      <InfoSection>
        <Title>{car.car}</Title>
        <SubTitle>{car.car_model}</SubTitle>

        <Description>
          {`Rent: ${car.price}`}
        </Description>
        <Title>{car.availability ? `${count} Available` : 'Unavailable'}</Title>
      </InfoSection>

      <Thumbnail>
        <Image source={{ uri: img }} style={{ width: '100%', height: '100%' }} />
      </Thumbnail>
    </CardContainer>
  );
};

export default Card;