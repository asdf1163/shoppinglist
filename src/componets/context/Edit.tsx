import { useState, createContext } from "react";

export const EditContext = createContext<any>('')

export const EditProvider = ({ children }: any) => {

    const [productID, setProductID] = useState(1)

    return (
        <EditContext.Provider value={{ productID, setProductID }}>
            {children}
        </EditContext.Provider>
    )
}