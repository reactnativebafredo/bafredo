import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Context } from '../../Provider';

// Components
import Social from './Social';
import ProfileTop from './ProfileTop';
import ProfileInfo from './ProfileInfo';
import UserInfo from './UserInfo';
import LogoutIcon from '../LogoutIcon';
import List from './List';

import { colors } from '../../styles';

function ProfileContainer({ navigation }) {
	return (
		<Context.Consumer>
			{(val) => {
				return (
					<ScrollView>
						<StatusBar backgroundColor={colors.mainColor} />

						{val.name.length ? <LogoutIcon ctx={val} /> : null}
						<ProfileTop />
						{val.name.length ? (
							<UserInfo name={val.name} number={val.number} />
						) : (
							<ProfileInfo navigation={navigation} />
						)}
						<List />
						<Social />
					</ScrollView>
				);
			}}
		</Context.Consumer>
	);
}

export default ProfileContainer;
