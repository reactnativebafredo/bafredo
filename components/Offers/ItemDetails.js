import React, { Fragment } from 'react';
import { View } from 'react-native';

// Components
import CustomText from '../CustomText';

function ItemDetails({ item }) {
	return (
		<Fragment>
			<CustomText customStyle={{ marginTop: 10, textAlign: 'right' }}>{item.name}</CustomText>
			<CustomText customStyle={{ marginTop: 7, color: 'grey', height: 60 }}>{item.desc}</CustomText>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<CustomText customStyle={{ color: 'green' }}>{item.price} تومان</CustomText>
				<CustomText
					customStyle={{
						color: 'grey',
						textDecorationLine: 'line-through'
					}}
				>
					{item.offprice} تومان
				</CustomText>
			</View>
		</Fragment>
	);
}

export default ItemDetails;
