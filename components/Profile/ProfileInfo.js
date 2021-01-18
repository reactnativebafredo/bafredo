import React from 'react';
import { View } from 'react-native';

// Components
import CustomButton from '../CustomButton';
import CustomText from '../CustomText';

import { globalStyles } from '../../styles';
function ProfileInfo({ navigation }) {
	const navigate = () => {
		navigation.navigate('Login');
	};
	return (
		<View style={globalStyles.profileContainer}>
			<CustomText
				customStyle={{
					alignSelf: 'center',
					width: 220,
					textAlign: 'center'
				}}
			>
				هم اکنون به جمع بافردو بپیوندید و از تخفیف ها زودتر از بقیه مطلع شوید.
			</CustomText>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
				<CustomButton onPress={navigate} width={200} text="ورود / ثبت نام" />
			</View>
		</View>
	);
}

export default ProfileInfo;
