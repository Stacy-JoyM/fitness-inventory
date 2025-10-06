import React from 'react';
import { User, LogOut } from 'lucide-react';

function Navbar({ isLoggedIn = false, onSignOut, onSignIn, currentUser }) {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-end">
      {isLoggedIn ? (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <User size={18} />
          </div>
          <span className="font-medium text-gray-800">{currentUser}</span>
          <button
            className="inline-flex items-center gap-1 text-red-600 border border-red-600 hover:bg-red-50 text-sm px-3 py-1.5 rounded-md"
            onClick={onSignOut}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-400 text-white flex items-center justify-center">
            <User size={18} />
          </div>
          <button
            className="text-green-700 border border-green-700 hover:bg-green-50 text-sm px-3 py-1.5 rounded-md"
            onClick={onSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
