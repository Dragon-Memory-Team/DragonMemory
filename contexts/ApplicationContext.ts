import Fonts from "@/constants/Fonts";
import { Theme } from "@/constants/Theme";
import { createContext, useContext } from "react";

interface ApplicationContext {
    fonts: Fonts,
    theme: Theme,
    auth: AuthContext
}

const ApplicationContext = createContext<ApplicationContext>({
    fonts: {
        regular: '',
        bold: ''
    },
    theme: {
        bodyText: '',
        headerBackground: '',
        title: '',
        accent: '',
        backgound: '',
        foreground: '',
        lowAccent: '',
        lowForeground: ''
    },
    auth: {
        signIn: (username, password) => null
    }
});

const useApplicationContext = () => useContext(ApplicationContext);

export {ApplicationContext, useApplicationContext};