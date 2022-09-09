import {useState} from "react";
import { collection, addDoc, getDocs  } from "firebase/firestore";
import {database} from '../../firebaseConfig'

export const useForm = (initialForm, validationsForm) => {

    const[form, setForm] = useState(initialForm)
    const[error, setError] = useState({})
    const[loading, setLoading] = useState(false)
    const[logro, setLogro] = useState(false)
    const[response, setResponse] = useState(null)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({
            ...form, 
            [name]: value
        })
    }

    const handleBlur = (e) =>{
        handleChange(e)
        setError(validationsForm(form))
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError(validationsForm(form))

        if (Object.keys(error).length === 0) {
                setLoading(true) 
            /* alert("el objeto form pasó las validaciones") */
            /* Espacio para codear la petición http */
            /*  ------------------------------------------------- */
            try {
                const docRef = await addDoc(collection(database, "logros"), form);
                console.log("Document written with ID: ", docRef.id);
                setLoading(false)
                setLogro(true)
                /* alert("Se há creado un nuevo logro") */
              } catch (e) {
                console.error("Error adding document: ", e);
              }
             /*  ------------------------------------------------- */
        }else{
            alert("El objeto form no pasó las validaciones de CONTROL DE FORMULARIO")
        }
    }

    return {
        form,
        error,
        loading,
        logro,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}