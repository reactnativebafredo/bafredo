import React from 'react';

// Components
import SearchContainer from './SearchContainer';
import SearchItem from './SearchItem';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Search() {
	return (
		<Stack.Navigator>
			<Stack.Screen component={SearchContainer} name="SearchContainer" options={{ headerShown: false }} />
			<Stack.Screen
				options={{ headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Vazir' } }}
				component={SearchItem}
				name="SearchItem"
			/>
		</Stack.Navigator>
	);
}

export default Search;
