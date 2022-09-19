import {useState, useEffect} from "react";
import { collection, getDocs  } from "firebase/firestore";
import {database} from '../../firebaseConfig'

export const useTable = () =>{

    const[logros, setLogros] = useState([])
    const[loadingFetch, setLoadingFetch] = useState(false)
    const[scroll, setScroll] = useState(false)
    const[paginacionIntervalo, setPaginacionIntervalo] = useState([])
    
    
    let titulos =["Fecha de registro", "ID", "Apellidos", "Nombres", "Grados", "Contacto Acudiente", "Opciones"];
    let periodos =["Dimensión","Asignatura","Periodo [1]-[2022] Grado: kinder A","Opciones"];

    let tableConfig = {
        title: "Estudiantes",
        icon: true,
        isStudent: false,
        titleColSpan: 1,
        scroll: false
    }

    useEffect(cargarLogros =>{
        const fetchData = async()=>{
                const docs = []
                setLoadingFetch(true)
                const querySnapshot = await getDocs(collection(database, "logros"));
                querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
                });
                setLoadingFetch(false)
                setLogros(docs)
                setPaginacionIntervalo(docs)
                setScroll(true)
                console.log("ejecutando useEffects")
                console.log(logros)
            }
            fetchData()
            
    }, [])

    const handleFecth = (e) => {

    }

    const handlePagination = (e) => {
        let intervalo = e.target.value
        let paginacionTabla = logros.slice(0, intervalo)
        setPaginacionIntervalo(paginacionTabla)
        console.log(e.target.value)
    }

    const handleNextButton = (e) =>{
        let min =0
        let max =10

        min = min + 10
        max = max + 10

        let paginacionTabla = logros.slice(min , max)
        setPaginacionIntervalo(paginacionTabla)
        console.log(paginacionTabla)
    }

    const handleUndoButton = (e) =>{
        let min =0
        let max =10

        if (min == 0) {
            min = 0
            max = 10

            let paginacionTabla = logros.slice(min , max)
            setPaginacionIntervalo(paginacionTabla)
            console.log(paginacionTabla)
        }else{

            min = min - 10
            max = max - 10

            let paginacionTabla = logros.slice(min , max)
            setPaginacionIntervalo(paginacionTabla)
            console.log(paginacionTabla)
        }
    }

    return{
        logros,
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
        paginacionIntervalo
    }
}


