import React from "react";
import {useForm} from '../ReactiveForm/useForm'

export function TableContentHistory({tableConfig}){

    const initialForm = {
        idLogro: "",
        dimension: "",
        asignatura: "",
        logro: ""
    }

    const validationsForm = (form) =>{

        let errors ={}
    
        if(!form.dimension.trim()){
            errors.name ="El campo 'Nombre' es requerido";
        }
    
        if(!form.asignatura.trim()){
            errors.email ="El campo 'Email' es requerido";
        }
    
        if(!form.logro.trim()){
            errors.subject ="El campo 'Asunto' es requerido";
        }
    
        return errors
    }

    const {form,
        error,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit} = useForm(initialForm, validationsForm)

    return(
        <tr className="option-file">
            
            <td colSpan={6}>
                <form className="formHistory" onSubmit={handleSubmit}>
                    <div className="select-dimension-container">
                        <label className="dimension-label" htmlFor="dimension">Dimensión</label>
                        <select name="dimension"
                                id="dimension"
                                onBlur={handleBlur} 
                                onChange={handleChange} 
                                value={form.dimension}>
                            <option value="Cognitiva">Cognitiva</option>
                            <option value="Comunicativa">Comunicativa</option>
                            <option value="Estética">Estética</option>
                            <option value="Corporal">Corporal</option>
                            <option value="Socio Afectiva">Socio Afectiva</option>
                            <option value="Espiritual Religión">Espiritual Religión</option>
                        </select>
                    </div>

                    <div className="select-asignatura-container">
                        <label htmlFor="asignatura">Asignatura</label>
                        <select name="asignatura" 
                                id="asignatura" 
                                cols={5}
                                onBlur={handleBlur} 
                                onChange={handleChange} 
                                value={form.asignatura}>
                            <option value="Matemáticas">Matemáticas</option>
                            <option value="Áreas integradas">Áreas integradas</option>
                            <option value="Lecto-escritura">Lecto-escritura</option>
                            <option value="Ingles">Ingles</option>
                            <option value="Artistica">Artistica</option>
                            <option value="Motricidad Fina">Motricidad Fina</option>
                            <option value="Ética y Valores Humános">Ética y Valores Humános</option>
                            <option value="Tecnología">Tecnología</option>
                        </select>
                    </div>

                    <div className="textArea-area">
                        <textarea   name="logro" 
                                    cols={5}
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={form.logro}>
                        </textarea>
                
                    </div>
                    <button type="submit" value="enviar"><ion-icon name="add-circle"></ion-icon></button>
                </form>
                
            </td>
            <td className="option">
                <ion-icon name="create"></ion-icon>
                <ion-icon name="close-circle"></ion-icon>
            </td>  
        </tr>
    )
}