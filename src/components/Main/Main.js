import React from 'react'
import Navigation from '../Navigation/Navigation'
import CardList from '../CardsList/CardsList'
import './Main.styles.css';

const Main = () => {
    return (
        <div className="main-container">
            <Navigation />
            <CardList />

        </div>
    )
}

export default Main
