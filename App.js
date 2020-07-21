import React from 'react';
import {
	View,
	Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton }	from '@react-navigation/stack';
// stack instance
const Stack = createStackNavigator();

// screens
import Home from '@screens/Home';
import TodoList from '@screens/TodoList';

const App = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerTitleAlign: 'left',
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: '#dc3545',
					},
					headerShown: false
				}}
			>
				<Stack.Screen
					name="Home"
					component={Home}
				/>
				<Stack.Screen
					options={{
						headerShown: true,
						gestureEnabled: true,
						gestureDirection: 'horizontal-inverted',
					}}
					name="TodoList"
					component={TodoList}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
