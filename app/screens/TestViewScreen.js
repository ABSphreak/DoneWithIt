import React from 'react';
import { Text, View } from 'react-native';

function TestViewScreen(props) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{/* <View
				style={{
					backgroundColor: 'dodgerblue',
					width: 100,
					height: 100,
					borderWidth: 10,
					borderColor: 'royalblue',
					borderRadius: 10,
				}}></View> */}
			{/* <View
				style={{
					backgroundColor: 'dodgerblue',
					width: 100,
					height: 100,
					shadowColor: 'gray',
					shadowOffset: {
						width: 10,
						height: 10,
					},
					shadowOpacity: 1,
					shadowRadius: 10,
				}}></View> */}
			<Text
				style={{
					fontSize: 30,
					fontStyle: 'italic',
					fontWeight: '800',
					color: 'tomato',
					textTransform: 'capitalize',
					textAlign: 'center',
				}}>
				I love React Native!
			</Text>
		</View>
	);
}

export default TestViewScreen;
