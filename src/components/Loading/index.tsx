import React from 'react';
import { SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Container from '../Container';

const Loading = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Spinner visible={true} />
      </Container>
    </SafeAreaView>
  );
};

export default Loading;
