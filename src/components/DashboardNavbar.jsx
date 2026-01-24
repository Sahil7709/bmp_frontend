import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";

// Logo
import logo1 from "../assets/logo1.png";

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center h-16 px-6">
        
        {/* 🔹 Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo1} alt="Book My Parcel" className="h-8" />
        </div>

        {/* 🔸 Spacer */}
        <div className="flex-1" />

        {/* 🚀 Send Parcel */}
      <button
  onClick={() => navigate("/send-parcel")}
  className="mr-4 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
>
  <IoSend className="text-base" />
  <span>Send Parcel</span>
</button>

        {/* 🔔 Notification */}
        <button className="relative mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition">
          <IoMdNotificationsOutline className="text-white text-xl" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            1
          </span>
        </button>

        {/* 👤 Profile */}
        <div className="relative flex items-center gap-2">
          <div
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold"
          >
            {user?.name?.charAt(0) || "A"}
          </div>

          {/* Name (hidden on mobile) */}
          <span className="hidden md:block text-sm font-medium">
            {user?.name || "Amit Sharma"}
          </span>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-12 w-40 rounded-md border bg-white shadow-lg">
              <button
                onClick={() => {
                  navigate("/profile");
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={() => setOpen(false)}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
