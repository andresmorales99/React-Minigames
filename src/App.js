import React from 'react';
import './App.css';
import ActionBar from './fragments/ActionBar';
import Navbar from './fragments/Navbar';
import Welcome from './fragments/Welcome'
import { BrowserRouter as Router,useRoutes} from "react-router-dom";
import Quiz from './redux_quiz/ReduxProvider';
import TicTacToe from './redux_tic/ReduxProvider';
import { View } from 'react-native';

const Rutas = () => {
  let routes = useRoutes([
    { path: "/", element: <Welcome /> },
    {path:"/tictactoe", element:<TicTacToe />},
    {path:"/quiz", element: <Quiz />}
    // ...
  ]);
  return routes;
};

export default function App(){
    //console.log("Printing:" + this.props.quizzes.length)
    return(
      <div>
        <View style={{backgroundColor:'darkblue'}}>
          <Navbar style={{flex: '1'}}/>
        </View>
        <Rutas />
      </div>
    );
  }
