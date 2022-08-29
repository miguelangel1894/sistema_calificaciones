import {React, useState} from 'react'
import './Sidebar.css'

export function Sidebar (){

    const [toggle, setToggle] = useState(false)

    return(
        <div className={`${toggle? 'sidebar-container': 'sidebar-container-close'}`}>
            <h2 className={`sidebar-title ${toggle? '': 'opacity'}`}>Miguel B</h2>
            <img src='https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
            <p>Dashboard</p>
            <ul>
                <li>
                    <a href='#'>
                        <span className={`link ${toggle? 'icon': 'icon-close'}`}><ion-icon name="person"></ion-icon></span>
                        <span className={`link ${toggle? '': 'opacity'}`}>Usuarios</span>
                    </a>    
                </li>
                <li>
                    <a href='#'>
                        <span className={`link ${toggle? 'icon': 'icon-close'}`}><ion-icon name="file-tray-stacked"></ion-icon></span>
                        <span className={`link ${toggle? '': 'opacity'}`}>Registros</span>
                    </a>    
                </li>
                <li>
                    <a href='#'>
                        <span className={`link ${toggle? 'icon': 'icon-close'}`}><ion-icon name="analytics"></ion-icon></span>
                        <span className={`link ${toggle? '': 'opacity'}`}>Descubrimiento</span>
                    </a>
                </li>
            </ul>
            <div className={`${toggle? 'toggle': 'toggle-close'}`}>
                <span className='icon' onClick={() => setToggle(!toggle)}><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>
            </div>
        </div>
    )
}