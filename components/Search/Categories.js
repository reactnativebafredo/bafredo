import React, { Fragment } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText';

import { shopItems } from '../../images';

function Categories({ navigation }) {
	return (
		<Fragment>
			<CustomText customStyle={{ textAlign: 'right', marginRight: 20, marginTop: 20 }}>دسته بندی ها</CustomText>
			<View
				style={{
					alignItems: 'center',
					marginTop: 10
				}}
			>
				<FlatList
					numColumns={2}
					data={shopItems}
					keyExtractor={(item) => item.name}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate('SearchItem', item.product)}
							style={{
								borderRadius: 8,
								marginHorizontal: 8,
								marginVertical: 8
							}}
						>
							<Image
								style={{ position: 'relative', width: 164, height: 120, borderRadius: 10 }}
								source={item.url}
							/>
							<View
								style={{
									position: 'absolute',
									bottom: 0,
									backgroundColor: 'grey',
									width: '100%',
									borderBottomRightRadius: 8,
									borderBottomLeftRadius: 8,
									opacity: 0.8
								}}
							>
								<CustomText
									customStyle={{
										color: 'white',
										marginLeft: 'auto',
										marginRight: 'auto',
										fontSize: 13
									}}
								>
									{item.name}
								</CustomText>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</Fragment>
	);
}

export default Categories;
