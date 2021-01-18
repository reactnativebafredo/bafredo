import React from 'react';

// Components
import LikeContainer from './LikeContainer';
import LikeItem from './LikeItem';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Likes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={LikeContainer}
				name="LikeContainer"
				options={{
					title: 'علاقه مندی ها',
					headerTitleAlign: 'center',
					headerTitleStyle: { fontFamily: 'Vazir' }
				}}
			/>
			<Stack.Screen
				options={{ headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Vazir' } }}
				component={LikeItem}
				name="LikeItem"
			/>
		</Stack.Navigator>
	);
}

export default Likes;
