import Fonts from "@/constants/Fonts";
import { Theme } from "@/constants/Theme";
import {ApplicationContext} from "@/contexts/ApplicationContext";
import React, { useState } from "react";

export default function ApplicationContextProvider({fonts, theme, children}: {fonts: Fonts, children: React.ReactNode, theme: Theme}) {
    const [session, setSession] = useState<string | undefined>();
    const signIn = () => {
        setSession('xxx');
    }
    return <ApplicationContext.Provider value={{
        fonts,
        theme,
        auth: {
            signIn,
            session
        }
    }}>
        {children}
    </ApplicationContext.Provider>
}