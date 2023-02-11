import { useContext } from "react";
import AuthenticationContext from "../context/AuthenticationProvider";

// Custom hook to use our context in an easier way
const useAuthentication = () => {
    return useContext(AuthenticationContext);
}

export default useAuthentication;