import React from 'react';
import { User, LogOut } from 'lucide-react';

function Navbar({ isLoggedIn = false, onSignOut, onSignIn, currentUser }) {
  return (
    <nav className="navbar bg-light shadow-sm px-3 d-flex justify-content-end align-items-center">
      {isLoggedIn ? (
        <div className="d-flex align-items-center gap-2">
          {/* User Avatar */}
          <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
            <User size={18} />
          </div>
          <span className="fw-semibold">{currentUser}</span>

          {/* Logout Button */}
          <button className="btn btn-outline-danger btn-sm ms-2" onClick={onSignOut}>
            <LogOut size={16} className="me-1" />
            Logout
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center gap-2">
          {/* Empty Avatar */}
          <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
            <User size={18} />
          </div>

          {/* Sign In Button */}
          <button className="btn btn-outline-success btn-sm ms-2" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
