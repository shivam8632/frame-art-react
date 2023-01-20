import React, {useReducer, useContext} from "react";
import { cartReducer } from "./reducers";

const UserContext = React.createContext({});

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({})
    const [prodAuth, getProd] = React.useState({})
    const [prodDimension, setDimension] = React.useState([]);
    const [cartValue, setCartValue] = React.useState();
    const [checkValue, setCheckValue] = React.useState();
    const [checkT, setCheckT] = React.useState([]);
    const [headerData, setHeaderData] = React.useState([]);

    const products = JSON.parse(localStorage.getItem("Sale_Products"))

    console.log("Sale Context",JSON.parse(localStorage.getItem("Sale_Products")))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const addDimension = (data) =>{
        console.log('dimen call', data)
        setDimension(prodDimension.concat(data))
        localStorage.setItem("addedProductssssssss", JSON.stringify(data));
    }


    //Check My function 

    const tryFunction = (data) =>{
        console.log('try_check call', data)
        // checkT.filter((i, itemIndex) => index !== itemIndex)
        setCheckT(checkT.concat(data))
        console.log(checkT,"checkT=====================")
        
    }

    console.log('UserCOntext_File_Check', checkT)


    // console.log('My UseContext')

    return (
        <UserContext.Provider value={{state, dispatch, headerData, setHeaderData, setCartValue, cartValue, userauth, setAuth, prodAuth, getProd, prodDimension, addDimension,checkValue, setCheckValue, tryFunction, checkT}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;

export const CartState = () => {
    return useContext(UserContext)
}