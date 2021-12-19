import React from 'react'

export default class Reset extends React.Component {
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }
    click(){
        this.props.resetClick();
    }
    render(){
        return(
        <button onClick={this.click}>
          Reset  
        </button>
        )
    }
}
