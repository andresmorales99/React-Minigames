import React, {Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {questionAnswer,changeQuiz,submit,initQuizzes} from '../redux_quiz/actions';
import Navbar from './Navbar';
import Game from "./Game";
import Sidebar from './Sidebar'
import FinalResult from './FinalResult'
import Author from './Author'


class GameScreen extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    initialtiemporestante: 60, tiemporestante: this.initialtiemporestante,
    intervall: null,
  }
 }
   render(){
   ////console.log("Printing:" + this.props.quizzes.length)
   
   return (
  
    <View style={styles.container}>
      <View style={{flex:1,flexDirection:'column', backgroundColor:'lightblue'}}>
          <View style={styles.restApp}>
              {!this.props.quizzes.length ? <Text>No hay quizzes que mostrar</Text> :
                  this.props.finished ?<View><FinalResult score = {this.props.score}/></View> :
                      <View style={styles.restApp}>

                          <View style={{flex:1,flexDirection:'row'}}>
                              <Sidebar
                                  otherQuiz = {this.otherQuiz}
                                  quizzes = {this.props.quizzes} currentQuiz= {this.props.currentQuiz}/>

                              <View style={{flex:15,flexDirection:'column'}}>
                                  <Game quiz= {this.props.quizzes[this.props.currentQuiz]}
                                        len = {this.props.quizzes.length}
                                        index= {this.props.currentQuiz}
                                        endGame = {() => this.endGame(this.props.quizzes)}
                                        resetGame= {() => this.componentDidMount()}
                                        onQuestionAnswer= { (answer)=> {    //se define aqui la funcion y se la pasa a Game.
                                            this.props.dispatch(questionAnswer(this.props.currentQuiz,answer))
                                        }
                                        }
                                        otherQuiz = {this.otherQuiz}
                                        loadData = {this.loadData}
                                        removeData = {this.removeData}
                                  />

                                  <View style={styles.author}>
                                      <Text style={{marginTop:20}}>Tiempo restante {this.state.tiemporestante} segundos</Text>
                                      <Author quiz= {this.props.quizzes[this.props.currentQuiz]}/>
                                  </View>
                              </View>

                          </View>

                      </View>}
          </View>
      </View>

      
    </View>
    
  );
  }//cierra render

  otherQuiz = (index)=> {
    this.props.dispatch(changeQuiz(index))
  }
  endGame = (quizzes)=> {
    this.props.dispatch(submit(quizzes))
  }
  
  manejadortemp = () => {
   
    if (!this.props.finished){ 
    this.setState({tiemporestante: this.state.tiemporestante-1});
    //document.getElementById("tmr").innerText = "Tiempo restante: "+this.state.tiemporestante+" segundos";
    if (this.state.tiemporestante===0) {this.endGame(this.props.quizzes);}
    }

  }
  
  //restart Game with old test.
    restartAS = (value) => {
    
      this.setState({tiemporestante: this.state.initialtiemporestante});
      clearInterval(this.state.interval);
      this.otherQuiz(0);
      this.props.dispatch(initQuizzes(value));
      this.setState({interval: setInterval(this.manejadortemp,1000)} );
  }
  async componentDidMount() {
    
    this.setState({tiemporestante: this.state.initialtiemporestante});
    clearInterval(this.state.interval)
    const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=91e2ea1ac582db07209a");
    const quizzes = await res.json();  
    this.otherQuiz(0);
    this.props.dispatch(initQuizzes(quizzes));
    //timer 2 end the game:
    //clear interval:
    this.setState({interval: setInterval(this.manejadortemp,1000)} );
    //setTimeout(()=> {clearInterval(interval);}, (this.state.tiemporestante+1)*1000)
  }
  componentWillUnmount(){
    clearInterval(this.state.interval)
    
  }

}
  
function mapStateToProps(state) {
  return {
    ...state
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  navbar: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restApp: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  author: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default connect(mapStateToProps)(GameScreen);
