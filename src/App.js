import React, { lazy, Suspense, useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import NavBarItems from "./Headerdata";
import { restaurantList } from "./Config"
import RestorentCard from "./RestorentCard"
import BodyData from "./BodyData";
import FotterData from "./FoterData";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Errors from "./Errors";
import RestaurantDetails from "./RestaurantDetails";
import Profile from "./ProfileClass";
import userContex from "../utils/useContex";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import cardPage from './cardPage'
import CardPage from "./cardPage";
const InstaMart = lazy(() => import("./InstaMart"))
const AppLayout = () => {

    const [logged, setLogged] = useState("")

    useEffect(() => {
        const data={
            name:"say"
        }
        setLogged(data?.name)
        }, [])
    
    return (
        <Provider store={appStore}>
        <userContex.Provider value={{loggedinUser:logged,setLogged}}>
        <>
            <NavBarItems />
            <Outlet />
            <FotterData />
        </>
        </userContex.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Errors />,
        children: [
            {
                path: "/about",
                element: <AboutUs />,
                children: [{
                    path: "profile",
                    element: <Profile />

                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/",
                element: <BodyData />
            },
            {
                path: "/RestaurantDetails/:id",
                element: <RestaurantDetails />
            },
            {
                path:"/cardPage",
                element:<CardPage/>
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<h1>lodding</h1>}>
                    <InstaMart />
                </Suspense>
            },
        ]
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)