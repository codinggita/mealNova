import apiService from './apiService';

// Auth service - handles login, register, logout API calls
const authService = {
  // Login user
  login: async (email, password) => {
    return apiService.post('/auth/login', { email, password });
  },

  // Register new user
  register: async (name, email, password) => {
    return apiService.post('/auth/register', { name, email, password });
  },

  // Logout - clear local storage
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Save token to localStorage
  saveToken: (token) => {
    localStorage.setItem('token', token);
  },

  // Get token from localStorage
  getToken: () => {
    return localStorage.getItem('token');
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  },
};

export default authService;
