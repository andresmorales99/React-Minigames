import React from 'react';
//import '../App.css';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
export default class Actionbar extends React.Component {
	
	render(){
		////console.log(this.props.quiz)
		const disone = (this.props.index === 0)
			
		const distwo = (this.props.index === this.props.len -1)

		
		return (
				<View style = {{
					flexDirection: 'column',
					alignItems: 'stretch',
					justifyContent: 'space-around',
					width: '80%'
				}}>
					<View style={{flexDirection:'row'}}>
						<TouchableHighlight style = {styles.button} onPress={() => {this.props.otherQuiz(this.props.index-1)}} disabled = {disone} ><Text style={{color:'white'}}>Anterior</Text></TouchableHighlight>
						<TouchableHighlight style = {styles.button} onPress= {() => {this.props.otherQuiz(this.props.index+1)}}  disabled = {distwo}><Text style={{color:'white'}}>Siguiente</Text></TouchableHighlight>
						<TouchableHighlight style = {styles.button} onPress= {this.props.endGame}><Text style={{color:'white'}}>Submit</Text></TouchableHighlight>
						<TouchableHighlight style = {styles.button} onPress= {this.props.resetGame}><Text style={{color:'white'}}>Reset</Text></TouchableHighlight>
					</View>

				</View>
		);
	}		
					
	
}
const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'red',
		fontSize: 25,
		textAlign: 'center',
		padding: 10
		},
	});