import { useState, createContext } from "react";

export const EditContext = createContext<any>(0)

export const EditProvider = ({ children }: any) => {

    const [productID, setProductID] = useState(0)
    const [arrayID, setArrayID] = useState(0)

    return (
        <EditContext.Provider value={{ productID, setProductID, arrayID, setArrayID }}>
            {children}
        </EditContext.Provider>
    )
}