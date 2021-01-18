import React, { Fragment } from 'react';
import { Image, View } from 'react-native';
import CustomText from '../CustomText';
import { colors } from '../../styles';

function ImageOff({ item }) {
	return (
		<Fragment>
			<Image
				source={item.url}
				style={{
					width: 260,
					height: 220,
					resizeMode: 'cover'
				}}
			/>
			<View
				style={{
					position: 'absolute',
					top: 10,
					left: 0,
					backgroundColor: colors.secondaryColor,
					borderTopRightRadius: 15,
					borderBottomRightRadius: 15
				}}
			>
				<CustomText customStyle={{ color: 'white', padding: 10 }}>{item.off}</CustomText>
			</View>
		</Fragment>
	);
}

export default ImageOff;
