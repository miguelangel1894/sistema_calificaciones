import React from "react";
import './dashboardCard.css'

export function DashboardCard (){
    return(
        <div className="DashboardCard-container">
            <ion-icon name="analytics"></ion-icon>
            <h2 className="card-title">Información general de App</h2>
            <h2 className="card-count-users">250.543</h2>
            <p className="card-subtitle">Usuarios</p>
            <button className="btn-analytics">
                <ion-icon name="analytics"></ion-icon>
            </button>
        </div>
        
    )
}