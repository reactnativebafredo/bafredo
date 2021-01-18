import React from 'react';
import { Text } from 'react-native';

function CustomText({ children, customStyle }) {
	return (
		<Text
			style={{
				fontFamily: 'Vazir',
				...customStyle
			}}
		>
			{children}
		</Text>
	);
}

export default CustomText;
