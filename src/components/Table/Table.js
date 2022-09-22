import { useTable } from "./useTable";
import {TableContentHistory} from './TableContentHistory'

import "./Table.css";

export const Table = () => {
  
    const { listadoLogros,
            mostrarLoading,
            periodos,
            configuracionTabla,
            handlePagination,
            handleNextButton,
            handleUndoButton,
            handleClicOcultar,
            paginacionIntervalo,
            ocultarForm,
            intervalo} = useTable()

    return(
        <table className='table-container'>
            <thead> 
                <tr>
                    <td colSpan={7} className="table-info-result">
                        <div className="div-info">
                            <ion-icon name="albums"></ion-icon>
                            <h2>Resultados</h2>
                            <button>{configuracionTabla.iconCloud ? <ion-icon name="cloud-done"></ion-icon> : <ion-icon name="cloud-upload"></ion-icon>} {configuracionTabla.title}</button>
                            <button className="button-create" onClick={handleClicOcultar}><ion-icon name="add-circle"></ion-icon></button>
                            <button className="button-create" onClick={handleClicOcultar}><ion-icon name="sync-outline"></ion-icon></button>
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
                {ocultarForm ? 
                <tr className="close-form-tr">
                    <td className="close-form-td" colSpan={4} align="right">
                        <button id="button-close" onClick={handleClicOcultar}><ion-icon name="close-outline"></ion-icon></button>
                    </td>
                </tr> : ''}
                {ocultarForm ? <TableContentHistory configuracionTabla/> : ""}
                           

                { Array.isArray(listadoLogros) && listadoLogros.length === 0 ?  
                <tr className="row-data-result">
                        <td colSpan={4} id='col-logro-result' align="center"><p>No hay datos</p></td>
                </tr> : ''}


                {mostrarLoading ? 
                <tr className="loading">
                        <td className={mostrarLoading ? 'rotate': ''} colSpan={4} align="center"><ion-icon name="sync"></ion-icon></td>
                </tr> : ''}

                
                {paginacionIntervalo.map((logro, index) =>
                    <tr key={index} className="row-data-result">
                        <td  id='col-dimension-result'align="center"><p>{logro.dimension}</p></td>
                        <td  id='col-area-result' align="left"><p>{logro.asignatura}</p></td>
                        <td  id='col-logro-result'align="center"><p>{logro.logro}</p></td>
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
                            <p>1 a {intervalo}</p>
                        </div>
                    </td>
                </tr>
            </tbody> 
        </table>
    )
}

