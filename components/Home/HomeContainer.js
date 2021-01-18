import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

// Components
import Carousel from './Carousel';
import OfferButton from './OfferButton';
import Items from './Items';
import Logo from '../Logo';
import Offers from '../Offers/Offers';
import LastImage from './LastImage';
import CustomText from '../CustomText';

import { colors, globalStyles } from '../../styles';
import { offerItems } from '../../images';

function HomeContainer({ navigation }) {
	return (
		<ScrollView style={globalStyles.container}>
			<StatusBar backgroundColor={colors.mainColor} />
			<View>
				<Logo />

				<OfferButton navigation={navigation} />

				<Carousel navigation={navigation} />

				<Items navigation={navigation} />

				<Offers navigation={navigation} url={'HomeItem'} items={offerItems} />

				<LastImage navigation={navigation} />

				<CustomText customStyle={{ textAlign: 'center', color: 'grey', marginTop: 10, marginBottom: 30 }}>
					طراحی و توسعه یافته توسط مهدی فرجی
				</CustomText>
			</View>
		</ScrollView>
	);
}

export default HomeContainer;
