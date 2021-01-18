import React from 'react';
import { View, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';

import { Context } from '../../Provider';
import { colors } from '../../styles';
import { EvilIcons } from '@expo/vector-icons';

// Components
import CustomText from '../CustomText';
import EmptyLikes from './EmptyLikes';

function LikeContainer({ navigation }) {
	return (
		<Context.Consumer>
			{(val) => {
				return (
					<View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1 }}>
						<StatusBar backgroundColor={colors.mainColor} />

						{val.liked.length ? (
							<FlatList
								numColumns={2}
								data={val.liked}
								renderItem={({ item }) => (
									<TouchableOpacity
										onPress={() => navigation.navigate('LikeItem', item.name)}
										style={{
											marginHorizontal: 10,
											marginVertical: 10,
											alignItems: 'center',
											justifyContent: 'center',
											borderWidth: 1,
											borderColor: '#f4f4f4',
											paddingHorizontal: 10,
											paddingVertical: 20,
											borderRadius: 10
										}}
									>
										<TouchableOpacity
											onPress={() => {
												val.remove(item.name);
											}}
											style={{
												position: 'absolute',
												top: 3,
												left: 3,
												zIndex: 999,
												backgroundColor: '#f4f4f4',
												borderRadius: 100,
												padding: 10
											}}
										>
											<EvilIcons name="close" size={24} color="black" />
										</TouchableOpacity>
										<Image style={{ width: 160, height: 160 }} source={item.url} />

										<CustomText customStyle={{ marginTop: 10 }}>{item.name}</CustomText>
										<CustomText customStyle={{ color: 'grey', width: 120, marginVertical: 10 }}>
											{item.desc}
										</CustomText>
										<View
											style={{
												alignItems: 'center'
											}}
										>
											<CustomText
												customStyle={{
													color: 'grey',
													textDecorationLine: 'line-through'
												}}
											>
												{item.offprice} تومان
											</CustomText>
											<CustomText
												customStyle={{
													color: 'green'
												}}
											>
												{item.price} تومان
											</CustomText>
										</View>
									</TouchableOpacity>
								)}
							/>
						) : (
							<EmptyLikes />
						)}
					</View>
				);
			}}
		</Context.Consumer>
	);
}

export default LikeContainer;
