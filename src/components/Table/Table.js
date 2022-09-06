import React  from "react";
import "./Table.css";
import {TableContent} from './TableContent'
import {TableContentHistory} from './TableContentHistory'

export function Table(){
    let titulos =["Fecha de registro", "ID", "Apellidos", "Nombres", "Grados", "Contacto Acudiente", "Opciones"];

    let tableConfig = {
        title: "Estudiantes",
        icon: true,
        isStudent: false
    }

    return(
        <table className="table-container">
            <tbody> 
                <tr>
                    <td colSpan={7} className="table-info-result">
                        <div className="div-info">
                            <ion-icon name="albums"></ion-icon>
                            <h2>Resultados</h2>
                            <button>{tableConfig.icon ? <ion-icon name="cloud-done"></ion-icon> : <ion-icon name="cloud-upload"></ion-icon>} Usuarios</button>
                        </div>
                    </td> 
                </tr>       
                <tr className="title">
                    {titulos.map( titulo =>
                        <td key={titulo.toString()}>
                            {titulo} 
                            <ion-icon name="caret-down-outline"></ion-icon>
                        </td>
                    )}
                </tr>

                {tableConfig.isStudent ? <TableContent tableConfig/> : <TableContentHistory tableConfig/>}

                <tr className="footer">
                    <td colSpan={7}>
                        <div className="table-footer">
                            <button><ion-icon name="caret-forward"></ion-icon></button>
                            <button><ion-icon name="caret-back"></ion-icon></button>
                            <select name="items" id="items">
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                            <p>Resultados por página</p>
                            <p>1 a 10 resultados de 300.</p>
                        </div>
                    </td>
                </tr>
            </tbody> 
        </table>
    )
}

