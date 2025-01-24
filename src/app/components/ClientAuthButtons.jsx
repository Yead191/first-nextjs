"use client"; 

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function ClientAuthButtons({ isAuthenticated }) {
    const { login, logout } = useKindeAuth();

    return isAuthenticated ? (
        <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 rounded text-white font-semibold hover:bg-red-600"
        >
            Sign Out
        </button>
    ) : (
        <button
            onClick={login}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
            Log In
        </button>
    );
}
