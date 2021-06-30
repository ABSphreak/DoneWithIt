import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={defaultStyles.colors.lightGray} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: defaultStyles.colors.white,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: defaultStyles.colors.medium,
	},
	title: {
		fontWeight: '500',
	},
});

export default ListItem;
