import { createContext } from "react";
import {foodlist} from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {



    const contextvalue = {
        food_list

    }
    return (

    <StoreContext.Provider value={contextvalue}>
        {props.children}
        </StoreContext.Provider>

    )
}

