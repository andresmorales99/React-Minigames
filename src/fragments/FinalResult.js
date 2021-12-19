import React from 'react';
import { Text } from 'react-native';
export default class FinalResult extends React.Component {
	
	render(){
		
		return (<Text style={{fontSize: 25, padding: 30, textAlign:'center'}}>La puntuación obtenida es: {this.props.score}</Text>);
	}
}