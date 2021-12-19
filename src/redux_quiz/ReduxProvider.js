import {Provider} from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import {View} from 'react-native';
import React from 'react';
import GameScreen from '../fragments/GameScreen';


export default class ReduxProvider extends React.Component{
	constructor(props) {
		super(props);
		this.initialState = { 
			score : 0,
			finished: false,
			currentQuiz: 0,
			quizzes: []

		};
		this.store = this.configureStore();
	}
	render(){
		return (
			<Provider store = {this.store}>
				<View style= {{height: '100%' }}>
					<GameScreen/>
      				
					
				</View>
			</Provider>
		);
	}
	configureStore() {
		return createStore(GlobalState, this.initialState);
	}
	
  	
  	
}


			
