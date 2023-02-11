import useAuthentication from "../hooks/useAuthentication";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Page404 from "./Page404";


const UserProfile = () => {

    // States of our logging context
    const { authentication, isLogging } = useAuthentication();


    // If we accessed by a refresh action (F5) to this page, the first authentication is empty, so we create a "waiter" until the logging has finished
    if(isLogging) {
        return <Spinner />;
    }

    // If logging loading finished and we are not logged, we go back to Most popular page (Not the Home page as it is not created)
    if (!authentication?.logged) {
        return <Navigate to="/popular" />;
    }

    // In any other case, we see the page (which is only an error page as it doesn't exists)
    return (
        <Page404
            title="Page not ready"
            subtitle="Page in development"
            message="The user profile page is currently in development (and it probably will be forever)."
        />
    )
}

export default UserProfile;