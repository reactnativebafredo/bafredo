import React, { Fragment, useState } from 'react';
import { ScrollView, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles';

// Components
import SearchInput from './SearchInput';
import Categories from './Categories';
import Border from '../Border';
import { offerItems } from '../../images';
import CustomText from '../CustomText';

function SearchContainer({ navigation }) {
	const [ submited, setSubmited ] = useState(false);
	const [ noItem, setNoItem ] = useState(false);
	const [ searchedItems, setSearchedItems ] = useState([]);
	const handleSubmit = (val) => {
		const filtered = offerItems.some((any) => any.name.toLowerCase().includes(val));

		if (filtered) {
			if (searchedItems.length) {
				setSearchedItems([]);
			}
			offerItems.filter((any) => any.name.toLowerCase().includes(val)).forEach((filteredName) => {
				setSearchedItems((prev) => [ ...prev, filteredName ]);
			});
			setSubmited(true);
			setNoItem(false);
		} else {
			setNoItem(true);
		}
	};

	return (
		<ScrollView style={globalStyles.container}>
			<SearchInput handleSubmit={handleSubmit} />
			<Border />
			{noItem && (
				<View style={{ marginRight: 20, marginTop: 10 }}>
					<CustomText>کالای مورد نظر یافت نشد</CustomText>
				</View>
			)}
			{submited ? (
				searchedItems.length && (
					<FlatList
						data={searchedItems}
						renderItem={({ item }) => (
							<Fragment>
								<TouchableOpacity
									onPress={() => navigation.navigate('SearchItem', item.name)}
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginHorizontal: 20,
										marginVertical: 50
									}}
								>
									<Image source={item.url} style={{ width: 200, height: 200 }} />
									<View style={{ flexDirection: 'column' }}>
										<CustomText customStyle={{ marginTop: 20, marginLeft: 'auto' }}>
											{item.name}
										</CustomText>
										<CustomText
											customStyle={{ color: 'green', marginTop: 'auto', marginBottom: 20 }}
										>
											{item.price} تومان
										</CustomText>
									</View>
								</TouchableOpacity>
								<Border />
							</Fragment>
						)}
					/>
				)
			) : (
				<Categories navigation={navigation} />
			)}
		</ScrollView>
	);
}

export default SearchContainer;
