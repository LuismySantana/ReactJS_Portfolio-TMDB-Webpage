import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthenticationContext = createContext();


// As this is only a test project, we will be creating a context to simulate an user login system (creating a false session via localStorage)
const AuthenticationProvider = ({children}) => {

    // To navigate to home page on logout
    const navigate = useNavigate();

    // State to check the the initial timing in which the session is checking the log state
    const [ isLogging, setIsLogging ] = useState(true);

    // State to check the actual logging session
    const [ authentication, setAuthentication ] = useState({});

    
    useEffect(() => {
        checkUserLoggedState();
    }, [])


    // Everytime the user comes into de app, we take a look at its session in localSotrage...
    function checkUserLoggedState() {
        let sessionData = localStorage.getItem("user_session_log");

        if (sessionData) {
            sessionData = JSON.parse(sessionData)

            if (Date.now() > sessionData.timeout) {
                // If the last session exceeded the timeout, we logout the user (delete the session from the app and localStorage)
                userLogout();

            } else {
                // If the session was still in time, we reset the timeout again and setup the session into the context
                userLogin();
            }
            setIsLogging(false);

        } else {
            // If session doesn´t exists. We make sure it's cleaned out
            setAuthentication({});
            setIsLogging(false);
        }
    }


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
        navigate("/");
    }
    
    
    return (
        <AuthenticationContext.Provider
            value={{
                authentication,
                setAuthentication,
                userLogin,
                userLogout,
                isLogging
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