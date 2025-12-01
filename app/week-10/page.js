"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Assignment 10 - Welcome to the Shopping List App</h1>
            <p>
                {user ? 
                (<button 
                    onClick={firebaseSignOut} 
                    className="text-white font-bold py-2 px-4 rounded m-2 bg-red-600">Sign Out</button>) 
                : 
                (<button
                    onClick={gitHubSignIn} 
                    className="text-white font-bold py-2 px-4 rounded m-2 bg-green-600">Sign In with GitHub</button>)}
            </p>
            {user && <p>Welcome, {user.displayName}, email: {user.email} with the image: <img className="mb-5" src={user.photoURL} alt="User Avatar"/></p>}
            {user && <Link className="text-white font-bold py-2 px-4 rounded m-2 bg-slate-600" href="/week-10/shopping-list">Go to Shopping List</Link>} 
            {!user && <p>Please sign in to access the shopping list features.</p>}
        </div>
    );
}
