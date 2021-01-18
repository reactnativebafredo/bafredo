import React from 'react';
import { View, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../CustomButton';

function OfferButton({ navigation }) {
	const { width } = Dimensions.get('window');
	const handlePress = () => {
		navigation.navigate('HomeItem', 'Jeanswest');
	};
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
			<CustomButton onPress={handlePress} width={width - 20} text="۳۰% تخفیف ویژه کت زنانه">
				<AntDesign name="shoppingcart" size={22} color={'white'} />
			</CustomButton>
		</View>
	);
}

export default OfferButton;
