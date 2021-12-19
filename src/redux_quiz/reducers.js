import {combineReducers} from 'redux';
import {QUESTION_ANSWER,CHANGE_QUIZ,SUBMIT,INIT_QUIZZES} from './actions';


function score(state = 0, action = {}) {
	switch(action.type){
		case SUBMIT:
			const cpquizzes = Object.values({...action.quizzes}) //array

			return cpquizzes.reduce((acc,quiz)=>{return acc + (quiz.userAnswer===quiz.answer ? 1 : 0)},0) //devuelve puntuacion total
		default:
			return state;
	}
}


function finished(state = false, action = {}) {
	switch(action.type){
		case SUBMIT:
			return true;
		default:
			return state;
	}
}


function currentQuiz(state = 0, action = {}) {
	switch(action.type){
		case CHANGE_QUIZ:
			return action.index
		default:
			return state;
	}
}

function quizzes(state = [], action = {}) {
	switch(action.type){
		case INIT_QUIZZES:
			return action.quizzes;

		case QUESTION_ANSWER:
			return state.map((quiz,i) => {
				return { ...quiz,
					userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer
				}

				
			})

		default:
			return state;
	}
}



const GlobalState = (combineReducers({
	score,
	finished,
	currentQuiz,
	quizzes

}));

export default GlobalState;

