import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-accent drop-shadow-xl">
                <div className="flex-1 ml-14">
                    <NavLink to='/' className="btn btn-ghost normal-case text-3xl text-white">Quizzora</NavLink>
                </div>
                <div className="flex-none mr-14 text-white">
                    <ul className="flex gap-10 text-lg font-semibold">
                        <li className=''>
                            <NavLink
                                to="/topics"
                                className={({ isActive }) =>
                                    isActive ? 'text-cyan-500' : undefined
                                }
                            >
                                Topics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) =>
                                    isActive ? 'text-cyan-500' : undefined
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? 'text-cyan-500' : undefined
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    );
};

export default NavBar;