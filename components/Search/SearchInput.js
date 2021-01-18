import React, { useState } from 'react';
import { TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function SearchInput({ handleSubmit }) {
	const [ search, setSearch ] = useState('');
	return (
		<View
			style={{
				flexDirection: 'row',
				flex: 1,
				alignItems: 'center',
				backgroundColor: '#f9f9f9',
				borderRadius: 15,
				marginHorizontal: 10,
				marginVertical: 20
			}}
		>
			<TextInput
				style={{ writingDirection: 'rtl', flex: 1, padding: 10, fontFamily: 'Vazir' }}
				placeholder="جستجو از میان هزاران کالا"
				onChangeText={(e) => setSearch(e)}
				value={search}
				onBlur={Keyboard.dismiss}
				onSubmitEditing={() => {
					handleSubmit(search.toLowerCase());
					setSearch('');
				}}
			/>
			<TouchableOpacity
				onPress={() => {
					if (search.length) {
						handleSubmit(search.toLowerCase());
						setSearch('');
					}
				}}
			>
				<AntDesign name="search1" size={24} color="black" style={{ paddingRight: 20 }} />
			</TouchableOpacity>
		</View>
	);
}

export default SearchInput;
