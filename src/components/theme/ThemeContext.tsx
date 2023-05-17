import React, { createContext, useState } from 'react';
interface ThemeProviderProps {
    dark: boolean;

}

interface ThemeContextType {
    dark: boolean;
    toggleTheme: () => void;
}

const initialThemeContext: ThemeContextType = {
    dark: false,
    toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(initialThemeContext);
const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({ dark, children }) => {
    const [currentTheme, setCurrentTheme] = useState(dark);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ dark: currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export{
    ThemeProvider,
    ThemeContext
}