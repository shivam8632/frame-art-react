import React from "react";


const UserContext = React.createContext({});

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({})
    const [prodAuth, getProd] = React.useState({})
    const [prodDimension, setDimension] = React.useState([]);
    const [cartValue, setCartValue] = React.useState();
    const [checkValue, setCheckValue] = React.useState();

    const addDimension = (data) =>{
        console.log('dimen call', data)
        setDimension(prodDimension.concat(data))
        localStorage.setItem('cartProduct', prodDimension);
        
    }
    console.log('My UseContext After new-----------', prodDimension)


    // console.log('My UseContext')

    return (
        <UserContext.Provider value={{setCartValue, cartValue, userauth, setAuth, prodAuth, getProd, prodDimension, addDimension,checkValue, setCheckValue}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;