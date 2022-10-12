import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Topics from '../components/Topics/Topics';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blog/Blog';
import Quiz from "../components/Quiz/Quiz";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                },
                element: <Topics></Topics>
            },
            {
                path: '/topics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                },
                element: <Topics></Topics>
            },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                },
                element: <Quiz></Quiz>
            },
            {
                path: '/statistics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                },
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);