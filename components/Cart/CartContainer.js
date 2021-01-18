import React, { Fragment } from 'react';
import { View, StatusBar, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

// Components
import EmptyBasket from './EmptyBasket';
import Border from '../Border';
import CustomButton from '../CustomButton';
import CustomText from '../CustomText';

import { colors } from '../../styles';
import { Context } from '../../Provider';

function CartContainer({ navigation }) {
	const { width } = Dimensions.get('window');
	return (
		<Context.Consumer>
			{(val) => {
				return val.cart.length ? (
					<View style={{ backgroundColor: 'white', flex: 1 }}>
						<StatusBar backgroundColor={colors.mainColor} />
						<Fragment>
							<View
								style={{
									justifyContent: 'space-between',
									marginHorizontal: 15,
									flexDirection: 'row',
									marginTop: 10
								}}
							>
								<CustomText customStyle={{ textAlign: 'left', color: 'green' }}>
									{val.cartTotal} تومان
								</CustomText>
								<CustomText customStyle={{ textAlign: 'right' }}>مبلغ کل</CustomText>
							</View>
							<View
								style={{
									justifyContent: 'space-between',
									marginHorizontal: 15,
									flexDirection: 'row',
									marginTop: 10
								}}
							>
								<CustomText
									customStyle={{
										textAlign: 'left',
										color: 'grey',
										textDecorationLine: 'line-through'
									}}
								>
									{val.cartOffTotal} تومان
								</CustomText>
								<CustomText customStyle={{ textAlign: 'right' }}>تخفیف کل</CustomText>
							</View>
							<View style={{ marginTop: 10, alignSelf: 'center' }}>
								<CustomButton width={width - 20} text="تکمیل خرید و پرداخت" />
							</View>
							<View style={{ marginVertical: 15 }}>
								<Border />
							</View>
							<FlatList
								data={val.cart}
								renderItem={({ item }) => (
									<TouchableOpacity onPress={() => navigation.navigate('CartItem', item.name)}>
										<Image
											source={item.url}
											style={{ width: 200, height: 200, alignSelf: 'center' }}
										/>
										<CustomText customStyle={{ alignSelf: 'center', marginTop: 10 }}>
											{item.name}
										</CustomText>
										<TouchableOpacity
											onPress={() => {
												val.removeCart(item.name);
											}}
											style={{
												position: 'absolute',
												top: 3,
												left: 30,
												zIndex: 999,
												backgroundColor: '#f4f4f4',
												borderRadius: 100,
												padding: 10
											}}
										>
											<EvilIcons name="close" size={24} color="black" />
										</TouchableOpacity>
										<CustomText
											customStyle={{
												alignSelf: 'center',
												color: 'grey',
												marginTop: 10,
												marginHorizontal: 15,
												textAlign: 'center'
											}}
										>
											{item.desc}
										</CustomText>
										<CustomText
											customStyle={{ textAlign: 'center', color: 'green', marginTop: 10 }}
										>
											{item.price} تومان
										</CustomText>
										<View style={{ marginVertical: 15 }}>
											<Border />
										</View>
									</TouchableOpacity>
								)}
							/>
						</Fragment>
					</View>
				) : (
					<View
						style={{ backgroundColor: 'white', flex: 1, alignContent: 'center', justifyContent: 'center' }}
					>
						<StatusBar backgroundColor={colors.mainColor} />
						<EmptyBasket />
					</View>
				);
			}}
		</Context.Consumer>
	);
}

export default CartContainer;
