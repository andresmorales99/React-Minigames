import React from 'react';
import Header from '../fragments/Header';
import Board from '../fragments/Board';
import Reset from '../fragments/Reset';
import { connect } from 'react-redux';
import { playPosition, reset } from './../redux_tic/actions';

class App extends React.Component {
 constructor(props) {
 super(props);
 this.appClick = this.appClick.bind(this);
 this.resetClick = this.resetClick.bind(this);
 }
 appClick(rowNumber, columnNumber) {
 this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn, this.props.values));
 }
 resetClick(){
 this.props.dispatch(reset());
 }
 render() {
 let text = "Turn of " + this.props.turn;
 return (
 <div>
 <Header text={text}/>
 <Board values={this.props.values} appClick={this.appClick}/>
 <h3>Number of moves: {this.props.moves}</h3>
 <Reset resetClick={this.resetClick}/>
 </div>
 );
}
}
function mapStateToProps(state) {
 return { ...state };
}
export default connect(mapStateToProps)(App);