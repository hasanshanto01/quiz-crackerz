import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='mt-5 text-2xl font-bold text-accent'>Some Commonly Asked Questions Answers</h2>
            <div className='w-3/4 my-10 mx-auto bg-accent p-5 rounded-xl text-justify'>
                <div className='border-2 border-cyan-300 p-2 rounded-lg m-3'>
                    <h2 className='text-2xl font-semibold mb-2'>1. What is the purpose of React Router?</h2>
                    <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing <strong>Single Page Web Applications</strong>. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
                <div className='border-2 border-cyan-300 p-2 rounded-lg m-3'>
                    <h2 className='text-2xl font-semibold mb-2'>2. How does context api work?</h2>
                    <p>The React Context API is <strong>a way for a React app to effectively produce global variables that can be passed around</strong>. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='border-2 border-cyan-300 p-2 rounded-lg m-3'>
                    <h2 className='text-2xl font-semibold mb-2'>3. What is useRef hook in react?</h2>
                    <p>
                        The useRef Hook <strong>
                            allows you to persist values between renders</strong>. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;