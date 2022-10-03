// import { useEffect } from "react";
import { createContext, useState } from "react";
import GetCookie from "../components/cookies/getCookie";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(GetCookie('user') || null))

    const signIn = (newUser, collBack) => {
        setUser(newUser);
        collBack();
    }
    const signOut = (collBack) => {
        setUser(null);
        collBack();
    }


    const value = {user, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
