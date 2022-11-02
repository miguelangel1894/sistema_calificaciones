import {React} from 'react'
import { useTable } from "../Table/useTable";
import './Navbar.css';

export function NavBar (){

    const {handleForm} = useTable()

    return(
        <div className='navbar-container'>
            <ion-icon name="layers-outline"></ion-icon>
            <h2 className='title'>Apps Manager</h2>
            <button type='button' onClick={handleForm} className='BtnLogin'></button>
            <button type='button' className='BtnRegister'></button>
        </div>
    )
}