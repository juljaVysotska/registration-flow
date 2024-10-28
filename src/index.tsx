import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { Forgot, Login, NewPassword, UI } from './pages';
import './styles/index.scss';
import { Routes } from './types/routes';

const router = createBrowserRouter([
    {
        path: Routes.LOGIN,
        element: <Login />,

    },
    {
        path: Routes.FORGOT,
        element: <Forgot />,
    },
    {
        path: Routes.NEW_PASSWORD,
        element: <NewPassword />,
    },
    {
        path: '/ui',
        element: <UI />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>

        <RouterProvider router={router} />
    </React.StrictMode>,
);
