import React from 'react';

// Components
import HomeContainer from './HomeContainer';
import HomeItem from './HomeItem';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} component={HomeContainer} name="HomeContainer" />
			<Stack.Screen
				options={{ headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Vazir' } }}
				component={HomeItem}
				name="HomeItem"
			/>
		</Stack.Navigator>
	);
}

export default Home;
