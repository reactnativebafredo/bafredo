import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { shopItems } from '../../images';
import { colors } from '../../styles';
import CustomText from '../CustomText';
function Items({ navigation }) {
	return (
		<View
			style={{
				alignItems: 'center',
				marginTop: 30
			}}
		>
			<FlatList
				numColumns={3}
				data={shopItems}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('HomeItem', item.product)}
						style={{
							borderRadius: 8,
							marginHorizontal: 8,
							marginVertical: 8
						}}
					>
						<Image
							style={{ position: 'relative', width: 114, height: 110, borderRadius: 10 }}
							source={item.url}
						/>
						<View
							style={{
								position: 'absolute',
								bottom: 0,
								backgroundColor: colors.secondaryColor,
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
	);
}

export default Items;
