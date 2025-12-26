// src/layouts/DashboardLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import useResponsive from "../core/hooks/useResponsive";

const drawerWidth = 240; // still used for desktop main width if you want

const DashboardLayout = ({ role, title }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile } = useResponsive();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const getRoleTitle = () => {
    switch (role) {
      case "USER":
        return "User Dashboard";
      case "TRAVELER":
        return "Traveler Dashboard";
      case "ADMIN":
        return "Admin Dashboard";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-slate-50">
      {/* Navbar fixed at top */}
      <DashboardNavbar
        title={title || getRoleTitle()}
        onMenuClick={handleDrawerToggle}
      />

      {/* Sidebar (the Tailwind version you already converted) */}
      <DashboardSidebar
        role={role}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main content */}
      <main
        className={`
          flex-1
          px-2 sm:px-4 lg:px-6
          pt-16           /* navbar height ~64px */
          pb-4
          sm:ml-60        /* leave space for desktop sidebar (w-60) */
          max-w-full
        `}
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* If you want to keep Outlet only: */}
        <Outlet />

        {/* Or if you sometimes pass children instead of Outlet:
            {children || <Outlet />} */}
      </main>
    </div>
  );
};

export const withDashboardLayout = (WrappedComponent, role, title) => {
  return (props) => (
    <DashboardLayout role={role} title={title}>
      <WrappedComponent {...props} />
    </DashboardLayout>
  );
};

export default DashboardLayout;
