import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { AuthenticationProvider } from './context/AuthenticationProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthenticationProvider>
            <RouterProvider router={router} />
        </AuthenticationProvider>
    </React.StrictMode>
)
