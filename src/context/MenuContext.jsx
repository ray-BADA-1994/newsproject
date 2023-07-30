/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext,useContext, useState } from "react";

export const menuContext = createContext()


export const MenuContextProvider = ({children})=> {

    const [showSideBar, setShowSideBar] = useState(false)

    const handleShowSideBar = () => {
      setShowSideBar(!showSideBar)
    }

    return <menuContext.Provider value={{showSideBar, setShowSideBar, handleShowSideBar}}>
        {children}
    </menuContext.Provider>
}

export const useMenuContext = () => {
    return useContext(menuContext)
}