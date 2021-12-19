import React  from "react";
import {useTranslation } from 'react-i18next';
class Fetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        name:'',
        question:  '',
        answer:  '',
        author:  '',
        attachment:  '',
        favourite:  '',
      };
    }
  
    componentDidMount() {
      fetch('https://core.dit.upm.es/api/quizzes/random10wa?token=a6b06fdb012702b8dc19')
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.setState({
            id: res.id,
            question: res.question,
            answer: res.answer,
            author: res.author,
            attachment: res.attachment,
            favourite: res.favourite
          })
        });
    }
  
    render() {
      return [
        <h1 key="name">{`Nombre: ${this.state.name}`}</h1>,
        <h2 key="location">{`País: ${this.state.location}`}</h2>
      ];
    }
  }