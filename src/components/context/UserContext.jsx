import React, {useEffect, useReducer, useContext} from "react";
import { cartReducer } from "./reducers";
import ImageTwo from '../../assets/img/image_02.jpeg'
import ImageThree from '../../assets/img/image_03.jpeg'
import ImageFour from '../../assets/img/image_04.jpeg'
import ImageFive from '../../assets/img/image_05.jpeg'
import ImageSix from '../../assets/img/image_06.jpeg'
import ImageSeven from '../../assets/img/image_07.jpeg'

const UserContext = React.createContext({});

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({})
    const [prodAuth, getProd] = React.useState({})
    const [prodDimension, setDimension] = React.useState([]);
    const [cartValue, setCartValue] = React.useState();
    const [checkValue, setCheckValue] = React.useState();
    const [checkT, setCheckT] = React.useState([]);
    const [headerData, setHeaderData] = React.useState([]);

    const products = [
        {
            id: 1,
            name: "Product 1",
            price: "300",
            image: ImageTwo,
        },

        {
            id: 2,
            name: "Product 2",
            price: "300",
            image: ImageThree,
        },

        {
            id: 3,
            name: "Product 3",
            price: "300",
            image: ImageFour,
        },

        {
            id: 4,
            name: "Product 4",
            price: "300",
            image: ImageFive,
        },

        {
            id: 5,
            name: "Product 5",
            price: "300",
            image: ImageSix,
        },

        {
            id: 6,
            name: "Product 6",
            price: "300",
            image: ImageSeven,
        },
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    console.log(products);


    const addDimension = (data) =>{
        console.log('dimen call', data)
        setDimension(prodDimension.concat(data))
        
    }

    useEffect(() => {
        console.log('cartProduct', prodDimension);
    }, [prodDimension])


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
        <UserContext.Provider value={{state, dispatch, headerData, setHeaderData, setCartValue, cartValue, userauth, setAuth, prodAuth, getProd, prodDimension, addDimension,checkValue, setCheckValue, tryFunction, checkT}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;

export const CartState = () => {
    return useContext(UserContext)
}