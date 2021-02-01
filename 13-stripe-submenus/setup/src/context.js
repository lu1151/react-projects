import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSiderbarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSidebar = () => {
        setIsSiderbarOpen(true);
    }

    const closeSidebar = () => {
        setIsSiderbarOpen(false);
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (<AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu
    }}>
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
