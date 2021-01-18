import React, { Fragment } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

// Components
import CustomText from '../CustomText';
import Border from '../Border';
import ItemDetails from './ItemDetails';
import ImageOff from './ImageOff';

function Offers({ items, title, navigation, url }) {
	return (
		<Fragment>
			<CustomText
				customStyle={{ textAlign: 'right', marginRight: 25, fontSize: 25, marginTop: 15, marginBottom: 15 }}
			>
				{title || 'پیشنهاد ویژه'}
			</CustomText>
			<Border />
			<FlatList
				data={items}
				horizontal={true}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.push(url, item.name)} style={{ marginVertical: 20 }}>
						<View
							style={{
								marginHorizontal: 30,
								width: 250
							}}
						>
							<ImageOff item={item} />
							<ItemDetails item={item} />
						</View>
					</TouchableOpacity>
				)}
			/>
		</Fragment>
	);
}

export default Offers;
