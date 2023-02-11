import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout';
import UserProfile from "../pages/UserProfile";

// Webpage routing --> The most relevant ones are /popular and /information/:id
const router = createBrowserRouter([
    { 
        path: "/",
        element: <Layout />,
        children: [
            {
                // Default page (accessible for logged and not logged users)
                index: true,
                element: <p>Index Page</p>
            },
            {
                // Default page (accessible for logged and not logged users)
                path: "/popular",
                element: <p>Popular Page</p>,
            },
            {
                // Page to view extended information of a selected film (accessible for logged and not logged users)
                path: "/information/:id",
                element: <p>Film information Page</p>,
            },
            {
                // Logged user profile page (accessible only for logged users)
                path: "/profile",
                element: <UserProfile />,
            },
            {
                // Escape url
                path: "/*",
                element: <p>404 Page</p>
            }
        ]
    }
])


export default router;