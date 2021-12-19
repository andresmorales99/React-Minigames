import React from 'react'

export default class Header extends React.Component {
    render() {
        return(
        <header className='header2'>
            {this.props.text}
        </header>
    );
}
}
