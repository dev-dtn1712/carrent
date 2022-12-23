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
import { FAKE_CAR_API_ENDPOINT } from '../../constants/variables';

const Cars = () => {
  const [{ data, loading, error }] = useAxios(
    FAKE_CAR_API_ENDPOINT
  );
  const navigation = useNavigation();
  const theme = useTheme();

  const [cars, setCars] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setCars(data?.cars);
  }, [data]);

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
    if (searchKey.length > 0)  {
      const filterCars = cars.filter(car => car.car.includes(searchKey));
      setCars(filterCars);
    } else {
      setCars(data.cars);
    }
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