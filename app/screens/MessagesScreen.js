import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
	{
		id: 1,
		title: 'Abhinav Sharma',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident optio quidem voluptatum, similique deleniti in voluptatibus aperiam laboriosam placeat obcaecati fugit voluptate vitae. Illo accusamus magnam maxime voluptas numquam harum corrupti reprehenderit nam molestias, minima eum vero debitis ex natus dolorum porro temporibus aspernatur assumenda adipisci voluptatem expedita dignissimos cum cumque pariatur! Minus aliquid ipsam a expedita delectus aspernatur nobis itaque doloribus velit quia nam eum, unde, porro a',
		image: require('../assets/abs.jpeg'),
	},
	{
		id: 2,
		title: 'Abhinav Sharma',
		description:
			'dolorum porro temporibus aspernatur assumenda adipisci voluptatem expedita dignissimos cum cumque pariatur! Minus aliquid ipsam a expedita delectus aspernatur nobis itaque doloribus velit quia nam eum, unde, porro accusamus architecto eaque, tempora sed nisi dolorem eos quam alias. Unde atque placeat sapiente veritatis officia? Officia suscipit consectetur necessitatibus tempora unde ipsa saepe, a velit corporis, aut nostrum quo quia sit harum sunt quas, mo',
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
							title: 'Abhinav Sharma',
							description:
								'dolorum porro temporibus aspernatur assumenda adipisci voluptatem expedita dignissimos cum cumque pariatur! Minus aliquid ipsam a expedita delectus aspernatur nobis itaque doloribus velit quia nam eum, unde, porro accusamus architecto eaque, tempora sed nisi dolorem eos quam alias. Unde atque placeat sapiente veritatis officia? Officia suscipit consectetur necessitatibus tempora unde ipsa saepe, a velit corporis, aut nostrum quo quia sit harum sunt quas, mo',
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
