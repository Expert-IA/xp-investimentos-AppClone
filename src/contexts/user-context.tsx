import { createContext, ReactNode, useState } from "react";
import { UserModel } from "../domain/model/user-model";

type UserContextType = {
    userCredentials: UserModel | undefined
    setUserCredentialsContext: (user: UserModel) => void
    flushCredentials: () => void
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
    children: ReactNode
}

export const UserProvider = ({children}: UserProviderProps) => {
    const [userCredentials, setUserCredentials] = useState<UserModel>();

    const setUserCredentialsContext = (user: UserModel) => {
        setUserCredentials(user)
    }

    const flushCredentials = () =>{
        setUserCredentials(undefined)
    }


    return (
        <UserContext.Provider
            value={{ userCredentials, setUserCredentialsContext, flushCredentials }}
        >
            {children}
        </UserContext.Provider>
    )
}