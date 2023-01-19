import { createContext } from "react"

const theme = {
    light: {
        background: 'white',
        foreground: 'black',
        // background: 'white',
    },
    dark: {
        background: 'black',
        foreground: 'white',
    }
}
const ThemeContext = createContext(theme)


export {ThemeContext, theme}
