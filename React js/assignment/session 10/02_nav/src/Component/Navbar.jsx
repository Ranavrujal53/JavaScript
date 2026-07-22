import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

function Navbar() {
    const user = useContext(UserContext);
  return (
     <div>
            <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 shadow-md">
                <h2 className="text-2xl font-bold">
                    My Website
                </h2>

                <p className="text-lg font-medium">
                    Welcome, {user.username}
                </p>
            </nav>
        </div>
  )
}

export default Navbar
