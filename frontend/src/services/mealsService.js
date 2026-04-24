import apiService from './apiService';

// Meals service - handles all meals-related API calls
const mealsService = {
  // Get all meals with optional filters
  getAllMeals: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiService.get(`/meals${query ? `?${query}` : ''}`);
  },

  // Get single meal by ID
  getMealById: async (id) => {
    return apiService.get(`/meals/${id}`);
  },

  // Get meals by category
  getMealsByCategory: async (category) => {
    return apiService.get(`/meals?category=${category}`);
  },

  // Search meals by name
  searchMeals: async (query) => {
    return apiService.get(`/meals?search=${encodeURIComponent(query)}`);
  },
};

export default mealsService;
