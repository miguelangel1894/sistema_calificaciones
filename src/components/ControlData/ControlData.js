import  React from "react";
import './controlData.css'

export function ControlData(){
    return(
        <div className="controlData-container">
            <div className="title-container">
                <div className="color-container"></div>
                <h2>Buscar</h2>
                <p>Cualquier Item</p>
            </div>
            <div className="input-search">
                <input className=""></input>
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <div className="select-degree">
                <label htmlFor="grado">Grado</label>
                    <select name="degree" id="degree">
                        <option value="volvo">Kinder A</option>
                        <option value="saab">Kinder B</option>
                        <option value="mercedes">Transición</option>
                        <option value="audi">Preescolar</option>
                    </select>
            </div>
            <div className="select-period">
                <label htmlFor="grado">Periodo</label>
                    <select name="period" id="period">
                        <option value="volvo">periodo [1]</option>
                        <option value="saab">periodo [2]</option>
                        <option value="mercedes">periodo [3]</option>
                        <option value="audi">periodo [4]</option>
                    </select>
            </div>
        </div>
    )
}