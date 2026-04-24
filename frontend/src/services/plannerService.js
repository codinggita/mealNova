import apiService from './apiService';

// Planner service - handles all meal planner API calls
const plannerService = {
  // Get weekly plan for logged-in user
  getWeeklyPlan: async () => {
    return apiService.get('/planner');
  },

  // Add a meal to a specific day
  addMealToDay: async (day, mealId, mealType) => {
    return apiService.post('/planner', { day, mealId, mealType });
  },

  // Remove a meal from a specific day
  removeMealFromDay: async (day, mealId) => {
    return apiService.delete(`/planner/${day}/${mealId}`);
  },

  // Get grocery list based on weekly plan
  getGroceryList: async () => {
    return apiService.get('/planner/grocery-list');
  },
};

export default plannerService;
