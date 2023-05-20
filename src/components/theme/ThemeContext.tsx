import React, { createContext, useState, FC } from 'react';

type ThemeContextType = {
    currentTheme: string;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    currentTheme: 'dark',
    toggleTheme: () => {},
});

 const ThemeProvider:FC<{ children: React.ReactNode }> = ({ children })=> {
    const [currentTheme, setCurrentTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setCurrentTheme(newTheme);
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(newTheme);
    };

    const themeContextValue: ThemeContextType = {
        currentTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

 export {
     ThemeContext,
     ThemeProvider

 }