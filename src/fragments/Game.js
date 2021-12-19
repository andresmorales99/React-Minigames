import React from 'react';

import ImageProp from './ImageProp';
import Author from './Author';
import Actionbar from './ActionBar';
//import '../App.css';
import { View,Text, TextInput, StyleSheet } from 'react-native';

export default class Game extends React.Component {
	
	render(){

		
		////console.log(this.props.quiz)
		return (
				<View style={styles.imagestyle}>

					<Text style={{marginTop:60,fontWeight:'bold', textAlign:'center',fontSize:25,}}>{this.props.quiz.question}</Text>

					<ImageProp quiz= {this.props.quiz}/>

					<TextInput style = {styles.textinputstyle}  
						value={this.props.quiz.userAnswer || '' }
						placeholder="Type your answer here"	
						onKeyPress = {key => {
							if (key.nativeEvent.key === "Enter"){this.keypressed()}
						}}
						onChangeText={(text)=> this.props.onQuestionAnswer(text)}/>
						
				
					<Actionbar style={{width:'80%'}}
						index = {this.props.index}
						otherQuiz = {this.props.otherQuiz}
						endGame = {this.props.endGame}
						len = {this.props.len}
						resetGame = {this.props.resetGame}
						goBack = {this.props.goBack}
						loadData = {this.props.loadData}
						removeData = {this.props.removeData}/>
				
				</View>
				
		);
	}

	keypressed =() => {
    if (this.props.index === this.props.len -1) 
      this.props.endGame(); 
    
    else
      this.props.otherQuiz(this.props.index +1); 

  }
}

const styles = StyleSheet.create({
	imagestyle: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
	},
	textinputstyle: {
		padding: 15,
		margin: 10,
		backgroundColor: 'white',
		color: 'black',
		borderWidth: 3,
		borderColor: 'black',
		fontSize: 25,
		textAlign: 'center'
	},
		
});