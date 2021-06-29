import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/abs.jpeg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/abs.jpeg'),
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = message => {
		setMessages(messages.filter(m => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message selected')}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
				)}
				ItemSeparatorComponent={() => <ListItemSeparator />}
				refreshing={refreshing}
				onRefresh={() =>
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/abs.jpeg'),
						},
					])
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default MessagesScreen;
