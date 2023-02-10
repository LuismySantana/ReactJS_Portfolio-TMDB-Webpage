import { createBrowserRouter } from "react-router-dom"

import Layout from '../Layout'


const router = createBrowserRouter([
    { 
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, 
                element: <p>Index Page</p>
            },
            {
                path: "/popular",
                element: <p>Popular Page</p>,
            },
            {
                path: "/information/:id",
                element: <p>Films information Page</p>,
            },
            {
                path: "/*",
                element: <p>404 Page</p>
            }
        ]
    }
])


export default router;