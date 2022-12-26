import React from 'react';
import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { FilterContextProvider } from './src/contexts/filterContext';
import theme from './theme';
import AppNavigation from './src/navigation';

export default function App() {

  return (
    <FilterContextProvider>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </FilterContextProvider>
  );
}
