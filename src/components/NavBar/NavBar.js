import {React} from 'react'
import './Navbar.css';

export function NavBar (){
    return(
        <div className='navbar-container'>
            <ion-icon name="layers-outline"></ion-icon>
            <h2 className='title'>Apps Manager</h2>
            <button type='button' className='BtnLogin'>Iniciar Sesión</button>
            <button type='button' className='BtnRegister'>Registrarse</button>
            {/* <a className='BtnLogin' href=''>Iniciar sesión</a> */}
        </div>
    )
}