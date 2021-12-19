import React from 'react';
import { Image } from 'react-native';
export default class ImageProp extends React.Component {
	
	render(){
		////console.log(this.props.quiz)
		return (
		
			 <Image alt = "No image to show"
			 style={{

			 	width: 250,
				height: 250}}
			source= {this.props.quiz.attachment!==null ? {uri: this.props.quiz.attachment.url} : require('../assets/noimage.png')}/>

    	);
	}
}