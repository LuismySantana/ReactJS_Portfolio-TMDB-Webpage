import { createContext, useEffect, useState } from "react";

const AuthenticationContext = createContext();


// As this is only a test project, we will be creating a context to simulate an user login system (creating a false session via localStorage)
const AuthenticationProvider = ({children}) => {
    const [ authentication, setAuthentication ] = useState({});

    useEffect(() => {
        console.log("En el context") // TODO: Delete
        
    }, [])


    function userLogin() {
        const sessionData = {
            logged: true,
            timeout: Date.now() + 60000 // 60s session
        }

        localStorage.setItem("user_session_log", JSON.stringify(sessionData));
        setAuthentication(sessionData);
    }
    
    
    function userLogout() {
        localStorage.removeItem("user_session_log");
        setAuthentication({});
    }
    
    
    
    
    

    return (
        <AuthenticationContext.Provider
            value={{
                authentication,
                setAuthentication,
                userLogin,
                userLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}


export {
    AuthenticationProvider
}

export default AuthenticationContext;