import React from 'react';
import { View, Image } from 'react-native';

function Logo() {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
			<Image source={require(`../assets/logo.png`)} style={{ width: 220, height: 100 }} />
		</View>
	);
}

export default Logo;
