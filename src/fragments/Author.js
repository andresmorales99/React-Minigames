import React from 'react';
import {useTranslation } from 'react-i18next';
import Nofoto from "../assets/noimage.png"
export default class Author extends React.Component {
	
	render(){
		//console.log(this.props.quiz)
		return (
        <div className="author">
        	{this.props.quiz.author !== null ? <img className = "author" alt = "No image to show" src= {this.props.quiz.author.photo.url}/> : <img className="author" alt = "No image to show" src= {Nofoto}/>}
        
        	<div className="title">Created by {this.props.quiz.author!==null ? (this.props.quiz.author.username || this.props.quiz.author.profileName) : "anonymous"}</div>
        </div>
    	);
	}
}