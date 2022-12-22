import React, { useCallback, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';

import Card from '../../components/Card';
import ErrorInfo from '../../components/Error';
import Loading from '../../components/Loading';
import { FAKE_CAR_API_ENDPOINT } from '../../constants/variables';

const Cars = () => {
  const [{ data, loading, error }] = useAxios(
    FAKE_CAR_API_ENDPOINT
  );

  const [cars, setCars] = useState([]);

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
      title={item.car}
      subtitle={item.car_model}
      img={`https://picsum.photos/id/${item.id}/200/300`}
    />
  );

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
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