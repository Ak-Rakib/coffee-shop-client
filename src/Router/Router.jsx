import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Error from "../Components/Error/Error";
import AddItem from "../Components/Pages/AddItem/AddItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/addItem',
                element: <AddItem></AddItem>
            }
        ]
    }
])