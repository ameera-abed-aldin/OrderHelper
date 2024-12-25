import { useContext,createContext, useState } from "react";
const authContext=createContext();
export function useAuth(){
    return useContext(authContext);
}

export function AuthContext(props){
    const [userLoggedDetails,setUserLoggedDetails]=useState(null);
    const [accessToken,setAccessToken] =useState(()=>localStorage.getItem('accessToken'));
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const value={login,logout,isLoggedIn,userLoggedDetails,accessToken};

    function login(tokin,data){
        setAccessToken(tokin);
        setIsLoggedIn(true);
        localStorage.setItem('accessToken',tokin);
        setUserLoggedDetails(data);
    }

    function logout(){
        setAccessToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        setUserLoggedDetails(null);
    }
    return(
        <authContext.Provider value={value}>
            {props.children}
        </authContext.Provider>
    )

}