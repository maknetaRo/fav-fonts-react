import React, { useState } from 'react'
import './Navigation.styles.css'

const Navigation = () => {

    const [fontSize, setFontSize] = useState("18px")

    const changeFontSize = (event) => {
        console.log(event.target.value)
        
    }

    return (
        <nav className="toolbar-wrapper nav">
            <div className="toolbar-search">
                <span className="material-icons-outlined">
                </span>
                <form id="search-fonts">
                    <input type="text" name="searchfonts" placeholder="Search fonts" />
                </form>


            </div>
            <div className="toolbar-text">
                <form id="type-sth">
                    <input type="text" name="typesth" placeholder="Type something..." />
                </form>
            </div>
            <div className="toolbar-fontsize">
                <select value={fontSize} onChange={changeFontSize} name="font_size" id="font_size" className="select-field">
                    <option value="11px">11px</option>
                    <option value="14px">14px</option>
                    <option value="18px">18px</option>
                    <option value="24px">24px</option>
                    <option value="32px">32px</option>
                    <option value="40px">40px</option>
                    <option value="64px">64px</option>
                    <option value="120px">120px</option>
                </select>
            </div>
            <div className="toolbar-switch">
                <div className="switch-wrapper">
                    <label>
                        <input type="radio" id="radio-white" name="switcher" checked="checked" />
                        <span className="white"> </span>
                    </label>
                    <label>
                        <input type="radio" id="radio-black" name="switcher" />
                        <span className="black"> </span>
                    </label>
                </div>

            </div>

            <div className="toolbar-view">
                <button className="btn-chart" id="chart-view" >
                    <i className="fas fa-th"></i>
                </button>
                <button className="btn-list" id="list-view" >
                    <i className="fas fa-list" ></i>
                </button>

            </div>
            <div className="toolbar-refresh">
                <button type="submit" className="btn-refresh" id="refresh">
                    <i className="fas fa-redo-alt"></i>
                </button>
            </div>

        </nav>
    )
}

export default Navigation
