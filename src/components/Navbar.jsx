import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function handleLogout() {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
  }
  return (
    <div>
      <div className="bg-white text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="font-bold px-4 py-2 rounded  text-blue-800 text-3xl">
          <Link href="/dashboard">Employee Management System</Link>
        </div>

        <div className="flex space-x-4">
          <button className="hover:bg-blue-100 px-4 py-2 rounded transition text-blue-800">
            <Link href="/dashboard">Dashboard</Link>
          </button>
          <button
            onClick={handleLogout}
            className="hover:bg-blue-100 px-4 py-2 rounded transition text-blue-800"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
