import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import ProfileContainer from './ProfileContainer';
import Login from './Login';

const Stack = createStackNavigator();

function Profile() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="ProfileScreen" component={ProfileContainer} />
			<Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
		</Stack.Navigator>
	);
}

export default Profile;
