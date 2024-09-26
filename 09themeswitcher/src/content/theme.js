import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () =>{},
    lightTheme : () => {},
})    

export const ThemeProvider = ThemeContext.Provider 

export default function useTheme(){
    return useContext(ThemeContext)
}

//  remember to change tailwind configuration to unable switch 