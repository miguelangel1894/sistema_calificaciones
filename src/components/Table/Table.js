import React  from "react";
import "./Table.css";
import {TableContent} from './TableContent'
import {TableContentHistory} from './TableContentHistory'

export function Table(){
    let titulos =["Fecha de registro", "ID", "Apellidos", "Nombres", "Grados", "Contacto Acudiente", "Opciones"];
    let periodos =["Dimensión","Asignatura","Periodo [1]-[2022] Grado: kinder A","Opciones"];

    let tableConfig = {
        title: "Estudiantes",
        icon: true,
        isStudent: false,
        titleColSpan: 1
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
                    {periodos.map( titulo =>
                        <td key={titulo.toString()}>
                            <div className="title-container">
                                <p>{titulo}</p>
                                <ion-icon name="caret-down-outline"></ion-icon>
                            </div>
                        </td>
                    )}
                </tr>
                

                {tableConfig.isStudent ? <TableContent tableConfig/> : <TableContentHistory tableConfig/>}
                
                {tableConfig.isStudent ? '':
                
                <tr className="option-file">
                    <td  id='td-dimension'align="center"><p>dimension</p></td>
                    <td  id='td-area' align="center"><p>Matemáticas</p></td>
                    <td  id='td-logro'align="center"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></td>
                    <td className="option">
                        <ion-icon name="create"></ion-icon>
                        <ion-icon name="close-circle"></ion-icon>
                    </td>
                </tr>}
                        
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

