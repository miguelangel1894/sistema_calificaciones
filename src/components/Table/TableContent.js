import React from "react";


export function TableContent ({tableConfig}){

    return(
        <tr className="option-file">
            <td>20/10/2022</td>
            <td>1102866338</td>
            <td colSpan={tableConfig.colSpan}>Bohorquez Cuello</td>
            <td>Miguel Ángel</td>
            <td><p>Kinder</p></td>
            <td><button><ion-icon name="logo-whatsapp"></ion-icon><p>3045232221</p></button></td>
            <td className="option">
                <ion-icon name="document-attach"></ion-icon>
                <ion-icon name="print"></ion-icon>
                <ion-icon name="documents"></ion-icon>
                <ion-icon name="close-circle"></ion-icon>
            </td>  
        </tr>
    )
}