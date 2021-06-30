import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: defaultStyles.colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: defaultStyles.colors.secondary,
		},
	},
];

function AccountScreen(props) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem title="Abhinav Sharma" subTitle="absphreak@outlook.com" image={require('../assets/abs.jpeg')} />
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={menuItem => menuItem.title}
					renderItem={({ item }) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem title="Log out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: defaultStyles.colors.lightGray,
	},
});

export default AccountScreen;
