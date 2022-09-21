import React, {useState, useEffect} from "react";
import { collection, getDocs  } from "firebase/firestore";
import {database} from '../../firebaseConfig'

export const useTable = () =>{

    const[listadoLogros, setlistadoLogros] = useState([])
    const[mostrarLoading, setmostrarLoading] = useState(false)
    const[paginacionIntervalo, setPaginacionIntervalo] = useState([])
    const[ocultarForm, setocultarForm] = useState(false)
    const[intervalo, setIntervalo] = useState(0)
    
    
    let titulos  =["Fecha de registro", "ID", "Apellidos", "Nombres", "Grados", "Contacto Acudiente", "Opciones"];
    let periodos =["Dimensión","Asignatura","Periodo [1]-[2022] Grado: kinder A","Opciones"];

    let configuracionTabla = {
        title: "Logros",
        iconCloud: true,
        isStudent: ocultarForm,
        titleColSpan: 1
    }

    useEffect(cargarlistadoLogros =>{
        const fetchData = async()=>{
                const docs = []
                setmostrarLoading(true)
                const querySnapshot = await getDocs(collection(database, "logros"));
                querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
                });
                setmostrarLoading(false)
                setlistadoLogros(docs)
                setPaginacionIntervalo(docs)
                console.log("ejecutando useEffects")
            }
            fetchData()         
    }, [])

    useEffect(paginarlistadoLogros=>{
        let intervalo = 10
        let paginacionTabla = listadoLogros.slice(0, intervalo)
        setPaginacionIntervalo(paginacionTabla)
        setIntervalo(intervalo)
    },[listadoLogros])

    useEffect(()=>{
        console.log('haciendo clic')
    },[ocultarForm])

    const handleClicOcultar = (e) =>{
        setocultarForm(!ocultarForm)
    }

    const handlePagination = (e) => {
        let intervalo = e.target.value
        let paginacionTabla = listadoLogros.slice(0, intervalo)
        setPaginacionIntervalo(paginacionTabla)
        setIntervalo(intervalo)
        console.log(e.target.value)
    }

    const handleNextButton = (e) =>{
        let min =0
        let max =10

        min = min + 10
        max = max + 10

        let paginacionTabla = listadoLogros.slice(min , max)
        setPaginacionIntervalo(paginacionTabla)
        console.log(paginacionTabla)
    }

    const handleUndoButton = (e) =>{
        let min =0
        let max =10

        if (min === 0) {
            min = 0
            max = 10

            let paginacionTabla = listadoLogros.slice(min , max)
            setPaginacionIntervalo(paginacionTabla)
            console.log(paginacionTabla)
        }else{

            min = min - 10
            max = max - 10

            let paginacionTabla = listadoLogros.slice(min , max)
            setPaginacionIntervalo(paginacionTabla)
            console.log(paginacionTabla)
        }
    }

    return{
        listadoLogros,
        setlistadoLogros,
        mostrarLoading,
        setmostrarLoading,
        titulos,
        periodos,
        configuracionTabla,
        handleClicOcultar,
        handlePagination,
        handleNextButton,
        handleUndoButton,
        handleClicOcultar,
        paginacionIntervalo,
        intervalo,
        ocultarForm,
    }
}