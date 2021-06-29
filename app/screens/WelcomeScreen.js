import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
	return (
		<ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo.png')} />
				<Text style={styles.logoText}>Sell what you don't need.</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title="Login" />
				<AppButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
	buttonsContainer: {
		padding: 20,
		width: '100%',
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	logoText: {
		color: '#fff',
		fontSize: 20,
	},
});

export default WelcomeScreen;
