import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton';
import Logo from '../Logo';

function Input({ navigation, changeName, changeNumber }) {
	const [ number, setNumber ] = useState('');
	const [ name, setName ] = useState('');
	const submit = () => {
		changeName(name);
		changeNumber(number);
		navigation.navigate('ProfileScreen');
	};
	const onChangeNumber = (e) => {
		setNumber(e);
	};
	const onChangeName = (e) => {
		setName(e);
	};
	return (
		<View style={styles.container}>
			<Logo />
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					keyboardType="default"
					onChangeText={onChangeName}
					value={name}
					placeholder="نام"
				/>
				<TextInput
					style={styles.input}
					keyboardType="numeric"
					value={number}
					onChangeText={onChangeNumber}
					placeholder="شماره موبایل"
				/>
				<CustomButton width={220} onPress={submit} text="ورود به حساب" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontFamily: 'Vazir',
		writingDirection: 'rtl',
		textAlign: 'right',
		backgroundColor: '#eeeeee',
		borderRadius: 9,
		height: 45,
		marginBottom: 10,
		padding: 10
	},
	inputContainer: { marginTop: 20, marginRight: 'auto', marginLeft: 'auto', width: 220, textAlign: 'center' },
	container: {
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingTop: 40,
		paddingBottom: 25,
		backgroundColor: 'white',
		flex: 1,
		marginTop: -25
	}
});

export default Input;
