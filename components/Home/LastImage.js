import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

function LastImage({ navigation }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('HomeItem', 'JootiJeans')}>
			<Image
				source={require('../../assets/three.png')}
				style={{ width: 320, height: 270, alignSelf: 'center', marginBottom: 30, marginTop: 30 }}
			/>
		</TouchableOpacity>
	);
}

export default LastImage;
