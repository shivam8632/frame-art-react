import React from "react";


const UserContext = React.createContext({});

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({})
    const [prodAuth, getProd] = React.useState({})
    const [prodDimension, setDimension] = React.useState({})
    return (
        <UserContext.Provider value={{userauth, setAuth, prodAuth, getProd, prodDimension, setDimension}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;