import React  from "react";
import './dashboard.css'
import {Table} from '../../components/Table/Table'
import {ControlData} from '../../components/ControlData/ControlData'
import {LoginForm} from '../../components/ReactiveForm/LoginForm'

export function Dashboard (){
    return(
        <div className="dashboard-container">
            
            <h2 className="dashboard-title">Dashboard</h2>
            <p className="dashboard-subtitle">Bienvenido de vuelta.</p>
            <ControlData/>
            <Table/>
        </div>
    )
}