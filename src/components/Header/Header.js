import React from 'react'
import './Header.styles.css'

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Google <span>Fonts</span></a>
            <ul className="navigation">
                <li><a href="" className="featured">Catalog</a></li>
                <li><a href="">Featured</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">About</a></li>
            </ul>
        </header>
    )
}

export default Header


