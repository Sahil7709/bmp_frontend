import axios from 'axios';
import ApiInterceptor from './interceptor.service';
import ServerUrl from '../constants/serverUrl.constant';

class ApiService {
  // Auth APIs
  static requestOTP(phone) {
    return ApiInterceptor.init().post(ServerUrl.API_REQUEST_OTP, { phone });
  }
  
  static checkUserExists(data) {
    return ApiInterceptor.init().post(ServerUrl.API_CHECK_USER_EXISTS, data);
  }
  
  static verifyOTP(phone, otp, role) {
    return ApiInterceptor.init().post(ServerUrl.API_VERIFY_OTP, { phone, otp, role });
  }

  static loginWithEmailAndPassword(email, password) {
    return ApiInterceptor.init().post(ServerUrl.API_LOGIN, { email, password });
  }

  // User APIs
  static createRequest(requestData) {
    return ApiInterceptor.init().post(ServerUrl.API_CREATE_REQUEST, requestData);
  }

  static getRequestById(id) {
    return ApiInterceptor.init().get(`${ServerUrl.API_GET_REQUEST}/${id}`);
  }

  static searchRequests(params) {
    return ApiInterceptor.init().get(ServerUrl.API_SEARCH_REQUESTS, { params });
  }

  // Traveler APIs
  static getTravelerFeed(params) {
    return ApiInterceptor.init().get(ServerUrl.API_TRAVELER_FEED, { params });
  }

  static acceptMatch(matchId, data) {
    return ApiInterceptor.init().post(`${ServerUrl.API_TRAVELER_ACCEPT}/${matchId}`, data);
  }
  
  static verifyPickupOTP(data) {
    return ApiInterceptor.init().post(`${ServerUrl.API_MODULE_TRAVELER}/delivery/pickup-otp`, data);
  }
  
  static verifyDropOTP(data) {
    return ApiInterceptor.init().post(`${ServerUrl.API_MODULE_TRAVELER}/delivery/drop-otp`, data);
  }

  // Admin APIs
  static getPendingKYCs(params) {
    return ApiInterceptor.init().get(ServerUrl.API_ADMIN_KYC_PENDING, { params });
  }

  static approveKYC(kycId) {
    return ApiInterceptor.init().post(`${ServerUrl.API_ADMIN_KYC_APPROVE}/${kycId}`);
  }

  static getAllUsers(params) {
    return ApiInterceptor.init().get(ServerUrl.API_ADMIN_USERS, { params });
  }

  static getAllTravelers(params) {
    return ApiInterceptor.init().get(ServerUrl.API_ADMIN_TRAVELERS, { params });
  }
  
  // Tracking APIs
  static updateLocation(data) {
    return ApiInterceptor.init().post(`${ServerUrl.API_TRACKING_UPDATE}`, data);
  }

  // Generic methods (kept for backward compatibility)
  apiget(url) {
    return ApiInterceptor.init().get(`${url}`);
  }

  apipost(url, body) {
    return ApiInterceptor.init().post(`${url}`, body);
  }

  apiput(url, body) {
    return ApiInterceptor.init().put(`${url}`, body);
  }
  
  apipatch(url, body) {
    return ApiInterceptor.init().patch(`${url}`, body);
  }

  apidelete(url) {
    return ApiInterceptor.init().delete(`${url}`);
  }

  async fetchImageAsBase64(url) {
    try {
      const response = await fetch(url, { mode: 'cors' }); // requires CORS enabled on server
      if (!response.ok) throw new Error('Failed to fetch image');

      const blob = await response.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (err) {
      console.error("Failed to convert image to Base64:", err);
      return null;
    }
  }

  apipostForm(url, formData) {
    return ApiInterceptor.init().post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default ApiService;