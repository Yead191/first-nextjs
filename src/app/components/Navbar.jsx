
import Link from 'next/link';
import React from 'react';
import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
    const links = <div className='flex flex-col md:flex-row items-center '>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/profile'}>Profile</Link></li>
    </div>
    const { isAuthenticated, logout, login } = getKindeServerSession();
    return (
        <div className="navbar bg-base-200 fixed z-10 lg:px-20 py-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-2xl">BlogJs</a>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {links}
                    {await isAuthenticated() ? (
                        <LogoutLink className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Log out</LogoutLink>

                    ) : (
                        <LoginLink
                            className="px-4 py-2 bg-blue-500 rounded  text-white font-semibold hover:bg-blue-600"
                        >
                            Log In
                        </LoginLink>
                    )}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div>
                    {await isAuthenticated() ? (
                        <LogoutLink>Log out</LogoutLink>
                    ) : (
                        <LoginLink
                            className="px-4 py-2 bg-blue-500 rounded  text-white font-semibold hover:bg-blue-600"
                        >
                            Log In
                        </LoginLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;