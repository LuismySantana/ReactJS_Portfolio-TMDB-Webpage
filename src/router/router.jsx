import { createBrowserRouter } from "react-router-dom"

import Layout from '../Layout'


const router = createBrowserRouter([
    { 
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, 
                element: <h1>Populars films Page</h1>
            },
            {
                path: "/information/:id",
                element: <h1>Films information Page</h1>,
            },
            {
                path: "/*",
                element: <h1>404 Page</h1>
            }
        ]
    }
])


export default router;