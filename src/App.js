import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from './components/Cart';

const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                Component: Body
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/restaurant/:resId',
                Component: RestaurantMenu
            },
            {
                path: '/grocery',
                element: (<Suspense fallback={<Shimmer />}><Grocery /></Suspense>)
                
            },
            {
                path: '/cart',
                Component: Cart
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);