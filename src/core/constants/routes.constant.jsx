class RoutePath {
    // Public routes
    static PUBLIC_HOME = "/";
    static PUBLIC_ABOUT = "/about";
    static PUBLIC_SERVICES = "/services";
    static PUBLIC_CONTACT = "/contact";
    
    // Auth routes
    static AUTH_LOGIN = "/login";
    static AUTH_REGISTER = "/register";
    
    // User routes
    static USER_DASHBOARD = "/user/home";
    static USER_NEW_REQUEST = "/user/new-request";
    static USER_BOOKING_CONFIRMATION = "/user/booking-confirmation";
    static USER_MY_REQUESTS = "/user/my-requests";
    static USER_TRACK_PARCEL = "/user/track";
    
    // Traveler routes
    static TRAVELER_DASHBOARD = "/traveler/home";
    static TRAVELER_KYC_PENDING = "/traveler/kyc-pending";
    static TRAVELER_FEED = "/traveler/feed";
    
    // Admin routes
    static ADMIN_DASHBOARD = "/admin/dashboard";
    static ADMIN_TRAVELER_APPROVAL = "/admin/traveler-approval";
    
    // Add more routes as needed
}

export default RoutePath;