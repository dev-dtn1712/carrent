import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '../screens/Home';
import Filter from '../screens/Filter';

const Stack = createStackNavigator();

const AppNavigation = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
			/>
			<NavigationContainer independent={true}>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						title: 'All Cars',
						headerShown: true,
						cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen
						name="Filter"
						component={Filter}
						options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, headerShown: true }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default AppNavigation;