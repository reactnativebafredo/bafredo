import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Components
import CustomText from '../CustomText';

function EmptyLikes() {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<View
				style={{
					backgroundColor: '#f4f4f4',
					borderRadius: 120,
					width: 90,
					height: 90,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<AntDesign name="hearto" size={58} color={'grey'} />
			</View>

			<CustomText customStyle={{ textAlign: 'center', marginTop: 10 }}>لیست علاقه مندی شما خالی است .</CustomText>
		</View>
	);
}

export default EmptyLikes;
