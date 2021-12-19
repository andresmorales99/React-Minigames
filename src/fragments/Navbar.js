import React from 'react';
import {Text, View} from 'react-native';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
	const [t, i18n] = useTranslation("global");

	return( <div>
            <h1 style={{fontSize:30,color:'white', alignment:'right'}}>{t("navbar.title")}</h1>
            <p></p>
            <div style={{ float: 'left', alignment:'left'}}>
                <nav className="topnav" role="tablist">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tictactoe">TicTacToe</NavLink>
                    <NavLink to="/quiz">Quiz</NavLink>
                </nav>
            </div>
            <br></br>
            <div style={{float: 'right', alignment:'right'}}> 
                <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
                <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
            </div>
            <p></p>
            </div>
    );
}
