import React, {useState} from 'react'
import './Card.styles.css'

const FontDisplay = (props) => {

    const [text, setText] = useState("")

    
    return (
        <div className="text">
            <p style={{ fontFamily: `'${props.fontFamily}', ${props.letterForm}`, }}>{props.sentence}</p>
        </div>
    )
}

export default FontDisplay
