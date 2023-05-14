import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {

            }
        ]
    }
])