import { useContext,createContext, useState } from "react";
const authContext=createContext();
export function auth(){
    return useContext(authContext);
}

export function AuthProvider(props){
    const {userLoggedDetails,setUserLoggedDetails}=useState(null);
    const value={};
    return(
        <authContext.Provider value={value}>
            {props.children}
        </authContext.Provider>
    )

}