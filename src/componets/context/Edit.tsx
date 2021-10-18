import { useState, createContext } from "react";

interface Ichildren
{
    children: React.ReactNode
}

export const EditContext = createContext<any>(0)

export const EditProvider: React.FC<Ichildren> = ({ children }) => {

    const [productID, setProductID] = useState(0)
    const [arrayID, setArrayID] = useState(0)

    return (
        <EditContext.Provider value={{ productID, setProductID, arrayID, setArrayID }}>
            {children}
        </EditContext.Provider>
    )
}