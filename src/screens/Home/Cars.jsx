import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import { FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import FlexContainer from '../../components/Container/FlexContainer';
import Card from '../../components/Cars';
import ErrorInfo from '../../components/Error';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import { useFilterHooks } from '../../hooks/filterHooks';
import { FAKE_CAR_API_ENDPOINT } from '../../constants/variables';

const Cars = () => {
  const [{ data, loading, error }] = useAxios(
    FAKE_CAR_API_ENDPOINT
  );

  const [
    fromYear,
    toYear,
    fromPrice,
    toPrice,
    selectedColor,
    selectedBrand
  ] = useFilterHooks();

  const navigation = useNavigation();
  const theme = useTheme();

  const [cars, setCars] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const cars = data?.cars;
    if (!!cars?.length) {
      let searchFilterCar = [];
      if (!searchKey) {
        searchFilterCar = cars;
      } else {
        searchFilterCar = cars.filter(car => car.car.toLowerCase().includes(searchKey));
      }

      const filterCars = searchFilterCar.filter(car => {
        const carPrice = car.price.substring(1);

        if (
          (Number(car.car_model_year) >= fromYear && Number(car.car_model_year) <= toYear) &&
          (Number(carPrice) >= fromPrice && Number(carPrice) <= toPrice)
        ) {
          if (selectedColor && car.car_color === selectedColor) {
            return car;
          }
          if (selectedBrand && car.car_model === selectedBrand) {
            return car;
          }
          return car;
        }
      });

      setCars(filterCars);
    }
  }, [data, searchKey, fromPrice, toPrice, fromYear, toYear, selectedBrand, selectedColor]);

  if (error) {
    return <ErrorInfo errorMessage={error?.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderItem = ({ item }) => (<Card
      car={item}
      img={`https://picsum.photos/id/${item.id}/200/300`}
    />
  );

  const searchCars = (searchKey) => {
    setSearchKey(searchKey);
    // if (searchKey.length > 0)  {
    //   const filterCars = cars.filter(car => car.car.includes(searchKey));
    //   setCars(filterCars);
    // } else {
    //   setCars(data.cars);
    // }
  }

  const filterMore = () => {
    navigation.navigate('Filter');
  }

  return (
    <>
      <FlexContainer>
        <Input
          value={searchKey}
          onChangeText={searchCars}
          placeholder={'Search Car Name'}
        />
        <Button onPress={filterMore} style={{ width: 100 }} title="filters" color={theme.colors.primary_button} />
      </FlexContainer>

      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

export default Cars;