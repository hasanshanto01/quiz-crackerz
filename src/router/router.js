import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Topics from '../components/Topics/Topics';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blog/Blog';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                },
                element: <Topics></Topics>
            },
            {
                path: '/topics',
                loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                },
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);