import React from 'react';

// Components
import CartContainer from './CartContainer';
import CartItem from './CartItem';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Cart() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={CartContainer}
				name="CartContainer"
				options={{ title: 'سبد خرید', headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Vazir' } }}
			/>
			<Stack.Screen
				options={{ headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Vazir' } }}
				component={CartItem}
				name="CartItem"
			/>
		</Stack.Navigator>
	);
}

export default Cart;
