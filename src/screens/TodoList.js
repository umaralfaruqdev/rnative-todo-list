import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import { style, todo, flex } from '@styles';
const { aic, jcc } = flex;

const TodoList = () => {
	const [ posts, setPost ] = useState([]);

	const addList = () => {
		let dt = new Date();
		setPost(fn => [{ time: `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}` }, ...fn])
	}

	const delList = (postid) => {
		let items = posts.filter((item, index) => index !== postid);
		setPost(items);
	}

	const users = posts.map((item, index) => 
		<View style={[style.container, todo.listContainer, flex.frow, flex.jcsb]} key={index}>
			<Text>{ item.time }</Text>
			<TouchableOpacity style={[todo.deleteButton]} onPress={ () => delList(index) }>
				<Text style={[todo.deleteText]}>Delete</Text>
			</TouchableOpacity>
		</View>
	);

	return (
		<>
			<ScrollView style={{ flex: 1 }}>
				{ users }
			</ScrollView>
			{/*Floating button*/}

			<TouchableOpacity style={[todo.floating, aic, jcc]} onPress={ () => addList() }>
				<Text style={[todo.floatingText]}>+</Text>
			</TouchableOpacity>
		</>
	);
}

export default TodoList;
