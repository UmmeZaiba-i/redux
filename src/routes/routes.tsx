import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Counter from "../components/Counter";
import NavBar from "../components/NavBar";
import MyTable from "../components/MyTable";
import Todo from "../components/Todo";
import Example from "../components/Example";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";
import Example3 from "../components/Example3";
import EllipsisSelect from "../components/EllipsisSelect";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/counter',
                element: <Counter />
            },
            {
                path: '/table',
                element:<MyTable/>
            },
            {
                path: '/todo',
                element: <Todo/>
            },
            {
                path:'/example',
                element: <Example/>
            },
            {
                path:'/example1',
                element: <Example1/>
            },
            {
                path:'/example2',
                element: <Example2/>
            },
            {
                path:'/example3',
                element: <Example3/>
            },
            {
                path:'/ellipsis',
                element: <EllipsisSelect/>
            },
        ]
    },

])
