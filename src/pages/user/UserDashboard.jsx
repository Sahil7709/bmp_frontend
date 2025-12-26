import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  PlusSquare,
  History,
  Target,
  Truck
} from "lucide-react";
import useResponsive from "../../core/hooks/useResponsive";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isMobile } = useResponsive();

  const stats = {
    activeRequests: 2,
    completedDeliveries: 15,
    totalSpent: 185.5,
  };

  const recentRequests = [
    {
      id: 1,
      from: "New York, NY",
      to: "Boston, MA",
      status: "In Transit",
      date: "2023-06-15",
    },
    {
      id: 2,
      from: "Chicago, IL",
      to: "Detroit, MI",
      status: "Pending",
      date: "2023-06-18",
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-blue-50 min-h-screen">
      {/* Welcome */}
      <h1 className="text-xl md:text-3xl font-semibold text-blue-800 mb-4">
        Welcome back, {user?.name || "User"}!
      </h1>

      {/* Info Alert */}
      <div className="bg-blue-100 border-l-4 border-blue-600 text-blue-800 p-4 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
        <p>
          Welcome to your dashboard! To book a new parcel, visit the homepage and
          click <strong>“Book My Parcel”</strong>.
        </p>
        <button
          onClick={() => navigate("/")}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Go to Homepage
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Active Requests", value: stats.activeRequests },
          { label: "Completed Deliveries", value: stats.completedDeliveries },
          { label: "Total Spent", value: `$${stats.totalSpent}` },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-4"
          >
            <p className="text-sm md:text-base text-gray-600">
              {item.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Requests */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
          <h2 className="text-lg md:text-xl font-semibold text-blue-800">
            Recent Requests
          </h2>
          <button
            onClick={() => navigate("/user/history")}
            className="border border-blue-600 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            View All
          </button>
        </div>

        <div className="space-y-3">
          {recentRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-lg shadow border p-4"
            >
              <h3 className="font-semibold text-blue-700">
                Request #{req.id}
              </h3>
              <p className="text-sm text-gray-600">From: {req.from}</p>
              <p className="text-sm text-gray-600">To: {req.to}</p>
              <p className="text-sm text-gray-600">Date: {req.date}</p>
              <p className="text-sm mt-1">
                Status:{" "}
                <span className="font-semibold text-blue-600">
                  {req.status}
                </span>
              </p>

              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => navigate(`/user/track/${req.id}`)}
                  className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                >
                  Track
                </button>
                <button
                  onClick={() => navigate("/user/history")}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-blue-800 mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "New Request",
              icon: <PlusSquare className="w-10 h-10 text-blue-600" />,
              action: () => navigate("/user/new-request"),
              btn: "Book Parcel",
            },
            {
              title: "My History",
              icon: <History className="w-10 h-10 text-blue-700" />,
              action: () => navigate("/user/history"),
              btn: "View History",
            },
            {
              title: "Track Parcel",
              icon: <Target className="w-10 h-10 text-blue-800" />,
              action: () => navigate("/user/track"),
              btn: "Track Now",
            },
            {
              title: "My Profile",
              icon: <Truck className="w-10 h-10 text-blue-500" />,
              action: () => navigate("/user/profile"),
              btn: "View Profile",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="mt-2 font-semibold text-blue-800">
                {item.title}
              </h3>
              <button
                onClick={item.action}
                className="mt-4 w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition"
              >
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
