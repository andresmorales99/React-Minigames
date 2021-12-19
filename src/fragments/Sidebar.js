import React from 'react';
import { View } from 'react-native';

import Shortcut from './Shortcut'

export default class Sidebar extends React.Component {
	
	render(){
		
		return (
			<View style={{marginTop:100}}>
				{this.props.quizzes.map( (q,i) =>
					<Shortcut stylecurrentQuiz= {this.props.currentQuiz} 
						otherQuiz = {this.props.otherQuiz}
						index={i}
						quiz={q} />)}
			</View>
			);
	}	
}
