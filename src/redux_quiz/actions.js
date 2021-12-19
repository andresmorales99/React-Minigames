export const QUESTION_ANSWER = 'QUESTION_ANSWER';

export function questionAnswer(index, answer){
	return {
		type: QUESTION_ANSWER,
		payload: {index,answer} };	//se manda como payload el indice del test y la answer introducida por usr.
}

export const CHANGE_QUIZ = 'CHANGE_QUIZ';

export function changeQuiz(index){
	return{
		type: CHANGE_QUIZ,
		index: index
	};
}

export const SUBMIT = 'SUBMIT'

export function submit(quizzes){
	return{
		type: SUBMIT,
		quizzes:quizzes
	}
}


export const INIT_QUIZZES = 'INIT_QUIZZES';
export function initQuizzes(quizzes){
	return{
		type: INIT_QUIZZES,
		quizzes:quizzes
	}
}