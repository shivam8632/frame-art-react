import React from "react";


const UserContext = React.createContext({});

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({})
    return (
        <UserContext.Provider value={{userauth, setAuth}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContext;