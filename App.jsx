import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './theme';
import AppNavigation from './src/navigation';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
