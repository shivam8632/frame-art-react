import React from "react";


const UserContext = React.createContext({});

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({})
    const [prodAuth, getProd] = React.useState({})
    const [prodDimension, setDimension] = React.useState([]);
    const [cartValue, setCartValue] = React.useState();
    const [checkValue, setCheckValue] = React.useState();
    const [checkT, setCheckT] = React.useState([]);


    const addDimension = (data) =>{
        console.log('dimen call', data)
        setDimension(prodDimension.concat(data))
        localStorage.setItem('cartProduct', prodDimension);
        
    }


    //Check My function 

    const tryFunction = (data) =>{
        console.log('try_check call', data)
        // checkT.filter((i, itemIndex) => index !== itemIndex)
        setCheckT(checkT.concat(data))
        console.log(checkT,"checkT=====================")
        
    }

    console.log('UserCOntext_File_Check', checkT)


    console.log('My UseContext After new-----------', prodDimension)
    localStorage.setItem("newCart", prodDimension);
    localStorage.getItem("newCart");
    console.log("NEWWWWWWWW" ,localStorage.getItem("newCart"));


    // console.log('My UseContext')

    return (
        <UserContext.Provider value={{setCartValue, cartValue, userauth, setAuth, prodAuth, getProd, prodDimension, addDimension,checkValue, setCheckValue, tryFunction, checkT}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;