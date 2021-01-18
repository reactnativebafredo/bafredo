import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from '../../Provider';

// Componetns
import ProfileTop from './ProfileTop';
import Input from './Input';
import { globalStyles } from '../../styles';

function Login({ navigation }) {
	return (
		<Context.Consumer>
			{(val) => {
				return (
					<Fragment>
						<ProfileTop />
						<TouchableOpacity style={globalStyles.closeIcon} onPress={() => navigation.goBack()}>
							<EvilIcons name="close" size={24} color="white" />
						</TouchableOpacity>
						<Input changeName={val.changeName} changeNumber={val.changeNumber} navigation={navigation} />
					</Fragment>
				);
			}}
		</Context.Consumer>
	);
}

export default Login;
