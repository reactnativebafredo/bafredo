import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5, FontAwesome, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';

// Components
import CustomText from '../CustomText';

function Social() {
	return (
		<Fragment>
			<View
				style={{
					backgroundColor: 'white',
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					marginTop: 20,
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingHorizontal: 30,
					paddingVertical: 10
				}}
			>
				<TouchableOpacity onPress={() => Linking.openURL('https://telegram.me/@barishnews')}>
					<FontAwesome5 name="telegram-plane" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => Linking.openURL('https://wa.me/989371101609')}>
					<FontAwesome name="whatsapp" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/vionaapp.ir/')}>
					<AntDesign name="instagram" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => Linking.openURL('mailto:vionaapp@example.com')}>
					<MaterialIcons name="email" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => Linking.openURL('tel:09371101609')}>
					<Feather name="phone-call" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<CustomText customStyle={{ textAlign: 'center', color: 'grey', marginTop: 10 }}>
				طراحی و توسعه یافته توسط مهدی فرجی
			</CustomText>
			<Text style={{ textAlign: 'center', marginTop: 10, paddingBottom: 10 }}> v1 </Text>
		</Fragment>
	);
}

export default Social;
