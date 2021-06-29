import React from 'react';
// import { View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import TestViewScreen from './app/screens/TestViewScreen';
// import AppButton from './app/components/AppButton';

export default function App() {
	return (
		<>
			<WelcomeScreen />
			{/* <ViewImageScreen /> */}
			{/* <TestViewScreen /> */}
			{/* <View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<AppButton title="Login" onPress={() => console.log('Button pressed')} />
			</View> */}
		</>
	);
}
