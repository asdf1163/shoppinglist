import { useState, useEffect, createContext } from 'react'
import { IAlertInfo } from '../interfaces';

export const AlertInfoxtContext = createContext<IAlertInfo | null>(null)

export const AlertInfoProvider: React.FC<IAlertInfo> = ({ children }) => {

    const [message, setMessage] = useState('')
    const [timeOut, setTimeOut] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(
            function () {
                setTimeOut(false)
            },3000
        );
        return () => clearTimeout(timeout)
    }, [timeOut])

    return (
        <AlertInfoxtContext.Provider value={{ setMessage, setTimeOut }}>
            <div className="alertInfo" style={timeOut === false ? { opacity: '0', zIndex:0, right: '0px' } : { opacity: '1', zIndex:100, right: '20px' }} >
                {message}
            </div>
            {children}
        </AlertInfoxtContext.Provider>
    )
}