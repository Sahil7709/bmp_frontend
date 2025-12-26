// src/layouts/DashboardSidebar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  AddBox,
  History,
  TrackChanges,
  People,
  Assignment,
  Gavel,
  AccountBox,
  Dashboard,
  PendingActions,
  UploadFile,
} from "@mui/icons-material"; // or swap to react-icons if you want

import useResponsive from "../core/hooks/useResponsive";

const drawerWidth = 240;

const menuItems = {
  USER: [
    { text: "Dashboard", icon: <Dashboard fontSize="small" />, path: "/user/dashboard" },
    { text: "New Request", icon: <AddBox fontSize="small" />, path: "/user/new-request" },
    { text: "My Requests", icon: <History fontSize="small" />, path: "/user/history" },
    { text: "Track Parcel", icon: <TrackChanges fontSize="small" />, path: "/user/track" },
    { text: "Profile", icon: <AccountBox fontSize="small" />, path: "/user/profile" },
  ],
  TRAVELER: [
    { text: "Dashboard", icon: <Dashboard fontSize="small" />, path: "/traveler/home" },
    { text: "Available Requests", icon: <Assignment fontSize="small" />, path: "/traveler/feed" },
    { text: "My Deliveries", icon: <TrackChanges fontSize="small" />, path: "/traveler/deliveries" },
    { text: "Earnings", icon: <People fontSize="small" />, path: "/traveler/earnings" },
    { text: "KYC Submission", icon: <UploadFile fontSize="small" />, path: "/traveler/kyc-submit" },
    { text: "Profile", icon: <AccountBox fontSize="small" />, path: "/traveler/profile" },
  ],
  ADMIN: [
    { text: "Dashboard", icon: <Dashboard fontSize="small" />, path: "/admin/dashboard" },
    { text: "KYC Management", icon: <Assignment fontSize="small" />, path: "/admin/kyc" },
    { text: "All Deliveries", icon: <TrackChanges fontSize="small" />, path: "/admin/deliveries" },
    { text: "Users", icon: <People fontSize="small" />, path: "/admin/users" },
    { text: "Disputes", icon: <Gavel fontSize="small" />, path: "/admin/disputes" },
    { text: "Analytics", icon: <Dashboard fontSize="small" />, path: "/admin/analytics" },
    { text: "Profile", icon: <AccountBox fontSize="small" />, path: "/admin/profile" },
  ],
};

const DashboardSidebar = ({ role, mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();

  const menuList = menuItems[role] || [];

  const handleNavigation = (path) => {
    navigate(path);
    if (mobileOpen) handleDrawerToggle();
  };

  const isSelected = (path) => location.pathname === path;

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo / Title */}
      <div className={`flex items-center px-4 ${isMobile ? "h-14" : "h-16"}`}>
        <span className="text-base font-semibold text-slate-900 md:text-lg">
          Book My Parcel
        </span>
      </div>

      <div className="h-px bg-slate-200" />

      {/* Menu items */}
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1">
          {menuList.map((item) => {
            const active = isSelected(item.path);
            return (
              <li key={item.text}>
                <button
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition
                    ${
                      active
                        ? "bg-indigo-50 text-indigo-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center ${
                      active ? "text-indigo-600" : "text-slate-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm">{item.text}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  return (
    <nav
      className="relative"
      aria-label="Sidebar"
    >
      {/* Mobile overlay drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } sm:hidden`}
        onClick={handleDrawerToggle}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-60 transform bg-white shadow-xl transition-transform duration-200 sm:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarContent />
      </div>

      {/* Desktop permanent sidebar */}
      <div
        className="hidden sm:fixed sm:inset-y-0 sm:left-0 sm:z-40 sm:flex sm:w-60 sm:flex-col sm:bg-white sm:shadow-md"
        style={{ width: drawerWidth }}
      >
        <SidebarContent />
      </div>
    </nav>
  );
};

export default DashboardSidebar;
