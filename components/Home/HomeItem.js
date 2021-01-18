import React, { Fragment, useEffect, useState } from 'react';
import { View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';

import { colors } from '../../styles';
import { offerItems } from '../../images';
import { Context } from '../../Provider';

// Components
import CustomText from '../CustomText';
import CustomButton from '../CustomButton';
import Offers from '../Offers/Offers';

// Icons
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function HomeItem({ navigation, route }) {
	const [ item, setItem ] = useState(null);

	const { params } = route;

	const found = offerItems.find((any) => any.name === params);
	useEffect(() => {
		setItem(found);
		navigation.setOptions({
			title: found.name
		});
	}, []);

	const goToCart = () => {
		navigation.navigate('Cart');
	};

	const handleCart = (addToCart, item) => {
		addToCart(item);
	};

	return (
		<Context.Consumer>
			{(val) => {
				const inCart = val.cart.find((any) => any.name === found.name);
				const inLiked = val.liked.find((any) => any.name === found.name);
				const relatedItems = offerItems.filter((any) => any.name !== found.name);
				return (
					<ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
						<StatusBar backgroundColor={colors.mainColor} />
						{item && (
							<Fragment>
								<View style={{ marginHorizontal: 10 }}>
									{inLiked ? (
										<TouchableOpacity
											onPress={() => {
												val.remove(item.name);
											}}
											style={{
												position: 'absolute',
												top: 15,
												left: 3,
												zIndex: 999,
												backgroundColor: '#f4f4f4',
												borderRadius: 100,
												padding: 10
											}}
										>
											<Entypo name="heart" size={24} color="black" />
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											onPress={() => {
												val.like(item);
											}}
											style={{
												position: 'absolute',
												top: 15,
												left: 3,
												zIndex: 999,
												backgroundColor: '#f4f4f4',
												borderRadius: 100,
												padding: 10
											}}
										>
											<EvilIcons name="heart" size={24} color="black" />
										</TouchableOpacity>
									)}
									<Image source={item.url} style={{ width: 300, height: 300, alignSelf: 'center' }} />
									<CustomText>{item.name}</CustomText>
									<CustomText customStyle={{ color: 'grey', marginVertical: 10 }}>
										{item.desc}
									</CustomText>
									<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
										<CustomText customStyle={{ color: 'grey', textDecorationLine: 'line-through' }}>
											{item.offprice} تومان
										</CustomText>
										<CustomText customStyle={{ color: 'green' }}>{item.price} تومان</CustomText>
									</View>
									<View style={{ marginTop: 20 }}>
										{inCart ? (
											<Fragment>
												<CustomButton
													color={'#d4d4d4'}
													disabled={true}
													text="به سبد اضافه شده"
												/>
												<View style={{ marginTop: 15 }}>
													<CustomButton
														onPress={goToCart}
														color={colors.secondaryColor}
														text="برو به سبد"
													/>
												</View>
											</Fragment>
										) : (
											<CustomButton
												onPress={() => handleCart(val.addToCart, item)}
												text="افزودن به سبد خرید"
											/>
										)}
									</View>
								</View>
								<View style={{ marginVertical: 10 }}>
									<Offers
										navigation={navigation}
										url={'HomeItem'}
										items={relatedItems}
										title="محصولات دیگر"
									/>
								</View>
							</Fragment>
						)}
					</ScrollView>
				);
			}}
		</Context.Consumer>
	);
}

export default HomeItem;
