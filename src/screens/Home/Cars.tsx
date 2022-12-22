import React, { useCallback, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

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
    return <ErrorInfo errorMessage={error?.message} />
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      {!!cars?.length && cars.map(car => <Card key={car.id} data={car} />)}
    </>
  )
}

export default Cars;