import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo.png')} />
			<AppForm initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)} validationSchema={validationSchema}>
				<AppFormField
					name="email"
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					textContentType="emailAddress"
				/>
				<AppFormField
					name="password"
					placeholder="Password"
					icon="lock"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="default"
					textContentType="password"
					secureTextEntry
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
