import React, { createContext, useContext } from 'react';

/** ================================|| ThemeProvider ||=================================== **/

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
