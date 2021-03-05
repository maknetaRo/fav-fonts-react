import React from 'react'
import Card from '../Card/Card'
import './CardsList.styles.css'
import data from '../../data'

const CardsList = () => {

    return (
        <main id="main-content" className="main">
            
            {data.map((item) => {
                return (
                    <Card key={item.id} {...item} />
                )                   
                
            })}
            
        </main>
    )
}

export default CardsList
