import { StyleSheet } from 'react-native';
export const colors = {
	mainColor: '#1cd777',
	secondaryColor: '#090979'
};
export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	profileContainer: {
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingVertical: 40,
		backgroundColor: 'white',
		transform: [ { translateY: -25 } ]
	},
	closeIcon: { position: 'absolute', left: 20, top: 40, zIndex: 999 }
});
