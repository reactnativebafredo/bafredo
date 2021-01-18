import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles';

function LogoutIcon({ ctx }) {
	const logout = () => {
		ctx.changeName('');
		ctx.changeNumber('');
	};
	return (
		<TouchableOpacity style={globalStyles.closeIcon} onPress={logout}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<EvilIcons name="close" size={24} color="white" />
				<Text style={{ marginLeft: 10, color: '#eeeeee', fontFamily: 'Vazir' }}>خروج از حساب</Text>
			</View>
		</TouchableOpacity>
	);
}

export default LogoutIcon;
