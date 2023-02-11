import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthenticationProvider } from './context/AuthenticationProvider';
import Layout from './Layout';
import UserProfile from "./pages/UserProfile";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthenticationProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>

                        <Route index element={<p>Index Page</p>} />
                        <Route path="/popular" element={<p>Popular Page</p>} />
                        <Route path="/information/:id" element={<p>Film information Page</p>} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/*" element={<p>404 Page</p>} />

                    </Route>
                </Routes>
            </AuthenticationProvider>
        </BrowserRouter>
    </React.StrictMode>
)
