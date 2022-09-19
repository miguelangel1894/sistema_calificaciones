import React  from "react";
import { useTable } from "./useTable";
import {TableContentHistory} from './TableContentHistory'

import "./Table.css";

    export const Table = () => {
  
    const {logros,
            setLogros,
            loadingFetch,
            setLoadingFetch,
            scroll,
            setScroll,
            titulos,
            periodos,
            tableConfig,
            handleFecth,
            handlePagination,
            handleNextButton,
            handleUndoButton,
            paginacionIntervalo} = useTable()

    return(
        <table className={scroll ? 'table-container scroll':'table-container'}>
            <thead> 
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
            </thead>    
            <tbody>            
                {tableConfig.isStudent ? <TableContentHistory tableConfig/> : ""}


                { Array.isArray(logros) && logros.length === 0 ?  
                <tr className="option-file">
                        <td colSpan={4} id='td-logro' align="center"><p>No hay datos</p></td>
                </tr> : ''}


                {loadingFetch ? 
                <tr className="loading">
                        <td className={loadingFetch ? 'rotate': ''} colSpan={4} align="center"><ion-icon name="sync"></ion-icon></td>
                </tr> : ''}

                
                {paginacionIntervalo.map((logro, index) =>
                    <tr key={index} className="option-file">
                        <td  id='td-dimension'align="center"><p>{logro.dimension}</p></td>
                        <td  id='td-area' align="left"><p>{logro.asignatura}</p></td>
                        <td  id='td-logro'align="center"><p>{logro.logro}</p></td>
                        <td className="option">
                            <ion-icon name="create"></ion-icon>
                            <ion-icon name="close-circle"></ion-icon>
                        </td>
                    </tr>
                )}
       
                <tr className="footer">
                    <td colSpan={7}>
                        <div className="table-footer">
                            <button onClick={handleNextButton}><ion-icon name="caret-forward"></ion-icon></button>
                            <button onClick={handleUndoButton}><ion-icon name="caret-back"></ion-icon></button>
                            <select name="items" id="items" onChange={handlePagination}>
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

