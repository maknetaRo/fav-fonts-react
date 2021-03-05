import React from 'react'
import './Card.styles.css'

const FontName = (props) => {
    return (
        <>
            <div className="first-row">
                <h2 className="name">{props.name}</h2>
                <button className="btn-round">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
            <h3 className="author">{props.author}</h3>
        </>
    )
}

export default FontName
