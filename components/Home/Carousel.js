import React, { Fragment, useState } from 'react';
import { View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { images } from '../../images';
import { colors } from '../../styles';

function Carousel({ navigation }) {
	const [ num, setNum ] = useState(0);
	const { width } = Dimensions.get('window');
	const handle = ({ nativeEvent }) => {
		const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
		if (slide !== num && slide < images.length) {
			setNum(slide);
		}
	};
	return (
		<Fragment>
			<ScrollView
				style={{ marginTop: 20 }}
				onScroll={handle}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
			>
				{images.map((each, index) => {
					return (
						<TouchableOpacity key={index} onPress={() => navigation.navigate('HomeItem', each.product)}>
							<Image
								source={each.url}
								style={{
									width: width,
									height: 230,
									alignSelf: 'center',
									resizeMode: 'contain'
								}}
							/>
						</TouchableOpacity>
					);
				})}
			</ScrollView>

			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
				{images.map((each, index) => {
					return (
						<View
							key={index}
							style={{
								backgroundColor: index === num ? colors.mainColor : '#dddddd',
								width: 50,
								height: 8,
								marginHorizontal: 10,
								borderRadius: 30
							}}
						/>
					);
				})}
			</View>
		</Fragment>
	);
}

export default Carousel;
