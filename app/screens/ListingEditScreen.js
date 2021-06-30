import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
});

const categories = [
	{ label: 'Furniture', value: 1, backgroundColor: '#e63946', icon: 'lamp' },
	{ label: 'Cars', value: 2, backgroundColor: '#ee6c4d', icon: 'car' },
	{ label: 'Cameras', value: 3, backgroundColor: '#fcbf49', icon: 'camera' },
	{ label: 'Games', value: 4, backgroundColor: '#76c893', icon: 'cards' },
	{ label: 'Clothing', value: 5, backgroundColor: '#0a9396', icon: 'shoe-heel' },
	{ label: 'Sports', value: 6, backgroundColor: '#4ea8de', icon: 'basketball' },
	{ label: 'Movies & Music', value: 7, backgroundColor: '#3a86ff', icon: 'headphones' },
	{ label: 'Books', value: 8, backgroundColor: '#c77dff', icon: 'book-open-variant' },
	{ label: 'Other', value: 9, backgroundColor: '#8e9aaf', icon: 'package' },
];

function ListingEditScreen(props) {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
				}}
				validationSchema={validationSchema}
				onSubmit={values => console.log(values)}>
				<AppFormField maxLength={255} name="title" placeholder="Title" />
				<AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width={120} />
				<AppFormPicker items={categories} name="category" numberOfColumns={3} placeholder="Category" width="50%" PickerItemComponent={CategoryPickerItem} />
				<AppFormField maxLength={255} multiline name="description" placeholder="Description" />
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});

export default ListingEditScreen;
