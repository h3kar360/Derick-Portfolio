import { useState } from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
    // place a router for future routes and scaling
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>,
        ),
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
