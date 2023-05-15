import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Error from "../Components/Error/Error";
import AddItem from "../Components/Pages/AddItem/AddItem";
import Home from "../Components/Pages/Home/Home/Home";
import UpdateItem from "../Components/Pages/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addItem',
                element: <AddItem></AddItem>
            },
            {
                path: "/updateItem/:id",
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])