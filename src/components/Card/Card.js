import React from 'react'
import './Card.styles.css'
import FontDisplay from './FontDisplay'
import FontName from './FontName'

const Card = (props) => {
    const { name, author, sentence, fontFamily, letterForm } = props
    return (
        <article className="card roboto">
            <FontName name={name} author={author} />

            <FontDisplay sentence={sentence} fontFamily={fontFamily} letterForm={letterForm} />
        </article>
    )
}

export default Card
