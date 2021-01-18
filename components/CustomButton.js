import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../styles';

import CustomText from './CustomText';

function CustomButton({ text, width, children, onPress, disabled, color }) {
	return (
		<TouchableOpacity disabled={disabled || false} onPress={onPress}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: color || colors.mainColor,
					flexDirection: 'row',
					borderRadius: 8,
					width: width,
					height: 45
				}}
			>
				<CustomText customStyle={{ color: 'white', paddingRight: 10 }}>{text}</CustomText>
				{children}
			</View>
		</TouchableOpacity>
	);
}

export default CustomButton;
