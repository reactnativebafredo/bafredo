import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../../styles';
import CustomText from '../CustomText';
function UserInfo({ name, number }) {
	return (
		<View style={globalStyles.profileContainer}>
			<Image
				source={require('../../assets/user.png')}
				style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 20 }}
			/>
			<CustomText customStyle={{ textAlign: 'center', fontSize: 25 }}> کاربر {name}</CustomText>
			<CustomText customStyle={{ textAlign: 'center', marginTop: 6 }}>{number}</CustomText>
		</View>
	);
}

export default UserInfo;
