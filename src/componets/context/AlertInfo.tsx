import React, { useEffect, createContext } from 'react'
import { IAlertInfo } from '../interfaces';

export const AlertInfoxtContext = createContext<IAlertInfo|null>(null)

export const AlertInfoProvider: React.FC<IAlertInfo> = ({ message= "taj", timeOut, setTimeOut }) => {

    useEffect(() => {
        setTimeout(
            function () {
                setTimeOut(false)
            }
                .bind(this),
            3000
        );
    }, [timeOut])


    console.log(message, timeOut)
    return (
        <AlertInfoxtContext.Provider value={{message, timeOut, setTimeOut}}>
            <div className="alertInfo" style={{ display: timeOut === false ? 'none' : 'flex' }}>
                {message} tak
            </div>
        </AlertInfoxtContext.Provider>
    )
}