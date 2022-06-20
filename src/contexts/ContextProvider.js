import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState= {
    chat: false,
    cart: false,
    userProfile: false, 
    notifications: false,
}

export const ContextProvider =({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    



    return (
            // return stateContext.provider

        <StateContext.Provider 
            value={{ 
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu
                
            }}
        >
            {children}

        </StateContext.Provider>
    )
}


export const useStateContext =() => useContext(StateContext);
    
