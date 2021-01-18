import React, { Component } from 'react';
import { Image, View } from 'react-native';
import * as Font from 'expo-font';
import { Provider } from './Provider';

// Components
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import Likes from './components/Likes/Likes';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';
import { colors } from './styles';

const Tab = createBottomTabNavigator();

export class App extends Component {
	state = {
		fontLoaded: false
	};
	loadFont = async () => {
		try {
			await Font.loadAsync({
				Vazir: require('./assets/font/Vazir.ttf')
			});
			this.setState({ fontLoaded: true });
		} catch (e) {
			console.log(e.message);
			this.setState({ fontLoaded: false });
		}
	};
	componentDidMount() {
		try {
			this.loadFont();
		} catch (e) {
			this.setState({
				fontLoaded: false
			});
		}
	}
	render() {
		if (this.state.fontLoaded) {
			return (
				<Provider>
					<NavigationContainer>
						<Tab.Navigator
							initialRouteName="Home"
							tabBarOptions={{
								activeTintColor: colors.mainColor,
								style: { height: 60 },
								labelStyle: {
									fontFamily: 'Vazir',
									marginBottom: 10,
									fontSize: 9.5
								},
								iconStyle: {
									marginTop: 2
								}
							}}
						>
							<Tab.Screen
								options={{
									title: 'پروفایل',
									tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />
								}}
								component={Profile}
								name="Profile"
							/>
							<Tab.Screen
								options={{
									title: 'علاقه مندی ها',
									tabBarIcon: ({ color, size }) => (
										<AntDesign name="hearto" size={size} color={color} />
									)
								}}
								component={Likes}
								name="Favourites"
							/>
							<Tab.Screen
								options={{
									title: 'سبد خرید',
									tabBarIcon: ({ color, size }) => (
										<AntDesign name="shoppingcart" size={size} color={color} />
									)
								}}
								component={Cart}
								name="Cart"
							/>
							<Tab.Screen
								options={{
									title: 'جستجو و دسته بندی',
									tabBarIcon: ({ color, size }) => (
										<AntDesign name="search1" size={size} color={color} />
									)
								}}
								component={Search}
								name="Search"
							/>
							<Tab.Screen
								options={{
									title: 'خانه',
									tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
								}}
								component={Home}
								name="Home"
							/>
						</Tab.Navigator>
					</NavigationContainer>
				</Provider>
			);
		} else {
			return (
				<View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
					<Image
						style={{ width: 320, height: 140, alignSelf: 'center' }}
						source={require('./assets/logo.png')}
					/>
				</View>
			);
		}
	}
}

export default App;
