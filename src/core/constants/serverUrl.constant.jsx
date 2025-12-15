class ServerUrl {
    
    //Base URL
    static REACT_APP_API_URL = "http://localhost:5000/api"

    static API_MODULE_AUTH = "/auth";

  // Auth Module Endpoints
  static API_REQUEST_OTP = ServerUrl.API_MODULE_AUTH + "/request-otp";
  static API_CHECK_USER_EXISTS = ServerUrl.API_MODULE_AUTH + "/check-user-exists";
  static API_VERIFY_OTP = ServerUrl.API_MODULE_AUTH + "/verify-otp";
  static API_LOGIN = ServerUrl.API_MODULE_AUTH + "/login";

    // User endpoints
    static API_MODULE_USER = "/user";
    static API_CREATE_REQUEST = ServerUrl.API_MODULE_USER + "/requests";
    static API_GET_REQUEST = ServerUrl.API_MODULE_USER + "/requests";
    static API_SEARCH_REQUESTS = ServerUrl.API_MODULE_USER + "/requests/search";

    // Traveler endpoints
    static API_MODULE_TRAVELER = "/traveler";
    static API_TRAVELER_FEED = ServerUrl.API_MODULE_TRAVELER + "/feed";
    static API_TRAVELER_ACCEPT = ServerUrl.API_MODULE_TRAVELER + "/accept";

    // Admin endpoints
    static API_MODULE_ADMIN = "/admin";
    static API_ADMIN_KYC_PENDING = ServerUrl.API_MODULE_ADMIN + "/kyc/pending";
    static API_ADMIN_KYC_APPROVE = ServerUrl.API_MODULE_ADMIN + "/kyc/approve";
    static API_ADMIN_USERS = ServerUrl.API_MODULE_ADMIN + "/users";
    static API_ADMIN_TRAVELERS = ServerUrl.API_MODULE_ADMIN + "/travelers";

    // Tracking endpoints
    static API_MODULE_TRACKING = "/tracking";
    static API_TRACKING_UPDATE = ServerUrl.API_MODULE_TRACKING + "/location/update";

    // Add more endpoints as needed
}
export default ServerUrl;