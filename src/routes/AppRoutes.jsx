import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from '../layouts/PublicLayout';
import UserLayout from '../layouts/UserLayout';
import TravelerLayout from '../layouts/TravelerLayout';
import AdminLayout from '../layouts/AdminLayout';
import TravelerHomes from '../pages/traveler/TravelerHome';
import RequestFormPage from '../pages/user/requestform/RequestFormPage';

// Lazy loaded pages
const Home = lazy(() => import('../pages/public/Home'));
const About = lazy(() => import('../pages/public/About'));
const Services = lazy(() => import('../pages/public/Services'));
const Contact = lazy(() => import('../pages/public/Contact'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const UserHome = lazy(() => import('../pages/user/Home'));
const UserNewRequest = lazy(() => import('../pages/user/NewRequest'));
const UserTrack = lazy(() => import('../pages/user/Track'));
const UserHistory = lazy(() => import('../pages/user/History'));
const UserProfile = lazy(() => import('../pages/user/Profile'));
const UserBookingConfirmation = lazy(() => import('../pages/user/BookingConfirmation'));
const TravelerHome = lazy(() => import('../pages/traveler/Home'));
const TravelerFeed = lazy(() => import('../pages/traveler/Feed'));
const TravelerLive = lazy(() => import('../pages/traveler/Live'));
const TravelerPickupOTP = lazy(() => import('../pages/traveler/PickupOTP'));
const TravelerDropOTP = lazy(() => import('../pages/traveler/DropOTP'));
const TravelerDeliveries = lazy(() => import('../pages/traveler/Deliveries'));
const TravelerEarnings = lazy(() => import('../pages/traveler/Earnings'));
const TravelerTrack = lazy(() => import('../pages/traveler/Track'));
const TravelerProfile = lazy(() => import('../pages/traveler/Profile'));
const TravelerKYCPending = lazy(() => import('../pages/traveler/KYCPending'));
const TravelerKYCSubmit = lazy(() => import('../pages/traveler/KYCSubmit'));
const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'));
const AdminKYC = lazy(() => import('../pages/admin/KYC'));
const AdminDeliveries = lazy(() => import('../pages/admin/Deliveries'));
const AdminDisputes = lazy(() => import('../pages/admin/Disputes'));
const AdminUsers = lazy(() => import('../pages/admin/Users'));
const AdminProfile = lazy(() => import('../pages/admin/Profile'));
const AdminAnalytics = lazy(() => import('../pages/admin/Analytics'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));
const ScrollToTop = lazy(() => import('../pages/ScrollToTop'));

// Components
const ProtectedRoute = lazy(() => import('../components/ProtectedRoute'));

// User-friendly loading component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path='travelerhome' element={<TravelerHomes />} />

          </Route>

          {/* User routes */}
          <Route path="/user" element={
            // <ProtectedRoute allowedRoles={['USER']}>
            <UserLayout />
            // </ProtectedRoute>
          }>
            <Route index element={<UserHome />} />
            {/* <Route path="home" element={<UserHome />} /> */}
            <Route path="new-request" element={<UserNewRequest />} />
            <Route path="track/:id" element={<UserTrack />} />
            <Route path="history" element={<UserHistory />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="booking-confirmation" element={<UserBookingConfirmation />} />
          </Route>
          <Route path='/user/home' element={<RequestFormPage />} />


          {/* Traveler routes */}
          <Route path="/traveler" element={
            // <ProtectedRoute allowedRoles={['TRAVELER']}>
            <TravelerLayout />
            // </ProtectedRoute>
          }>
            <Route index element={<TravelerHome />} />
            <Route path="home" element={<TravelerHome />} />
            <Route path="feed" element={<TravelerFeed />} />
            <Route path="live" element={<TravelerLive />} />
            <Route path="pickup-otp" element={<TravelerPickupOTP />} />
            <Route path="drop-otp" element={<TravelerDropOTP />} />
            <Route path="deliveries" element={<TravelerDeliveries />} />
            <Route path="earnings" element={<TravelerEarnings />} />
            <Route path="track/:id" element={<TravelerTrack />} />
            <Route path="profile" element={<TravelerProfile />} />
            <Route path="kyc-pending" element={<TravelerKYCPending />} />
            <Route path="kyc-submit" element={<TravelerKYCSubmit />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="kyc" element={<AdminKYC />} />
            <Route path="deliveries" element={<AdminDeliveries />} />
            <Route path="disputes" element={<AdminDisputes />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="analytics" element={<AdminAnalytics />} />
          </Route>

          {/* Unauthorized route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;