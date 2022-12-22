import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				title: 'All Cars',
				headerShown: true,
			}}
		>
			<Stack.Screen name="All Cars" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default AppNavigation;