import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar
} from 'react-native';
// styles
import { style, home, flex } from '@styles';
const {
	content,
	welcome,
	heading,
	subHeading,
	buttonContainer
} = home;
const { aic, jcc } = flex;
import { HeaderHeightContext } from '@react-navigation/stack';


const Home = (props) => {

	const { navigation } = props;

	return (
		<>
			<StatusBar barStyle="dark-content" hidden={true} />
			<View style={style.container}>
				<View style={[content, aic]}>
					<View style={[welcome]}>
						<Text style={[heading]}>Welcome to Todos</Text>
						<Text style={[subHeading]}>The React Native Application</Text>
					</View>

					<View style={[buttonContainer]}>
						<TouchableOpacity style={[home.button, aic, jcc]} onPress={ () => navigation.navigate('TodoList') }>
							<Text style={[home.buttonText]}>Todo</Text>
						</TouchableOpacity>
					</View>

					<View style={[home.byContainer]}>
						<Text style={[home.name]}>&copy;Copyright Umar 2020</Text>
					</View>
				</View>
			</View>
		</>
	);
}

export default Home;
