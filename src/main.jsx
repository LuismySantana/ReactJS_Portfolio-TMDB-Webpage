import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AuthenticationProvider } from './context/AuthenticationProvider';
import Layout from './Layout';
import UserProfile from "./pages/UserProfile";
import Page404 from './pages/Page404';
import PopularPage from './pages/PopularPage';
import FilmPage from './pages/FilmPage';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthenticationProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>

                        <Route index element={
                            <Page404
                                title="Page not ready"
                                subtitle="Page in development"
                                message="The home page is currently in development (and it probably will be forever)."
                            />} />
                        <Route path="/popular" element={<PopularPage />} />
                        <Route path="/information">
                            <Route index element={<Navigate to="/popular"/>}/>
                            <Route path=':id' element={<FilmPage />}/>
                        </Route>
                        <Route path="/profile" element={<UserProfile />} />
                        
                        <Route path="/*" element={
                            <Page404
                                title="Error 404"
                                subtitle="Page not found"
                                message="The place you're trying to go doesn't exists."
                            />}
                        />

                    </Route>
                </Routes>
            </AuthenticationProvider>
        </BrowserRouter>
    </React.StrictMode>
)
