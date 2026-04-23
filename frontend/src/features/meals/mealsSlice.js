import { createSlice } from '@reduxjs/toolkit';
import { MOCK_MEALS } from '../../services/mockData';

const initialState = {
  allMeals: MOCK_MEALS,
  filteredMeals: MOCK_MEALS,
  featured: MOCK_MEALS.filter(m => m.rating >= 4.8),
  activeFilters: {
    category: 'All',
    cuisine: 'All',
    isVeg: null,
  }
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.activeFilters = { ...state.activeFilters, ...action.payload };
      
      // Apply filters
      state.filteredMeals = state.allMeals.filter(meal => {
        const categoryMatch = state.activeFilters.category === 'All' || meal.category === state.activeFilters.category;
        const cuisineMatch = state.activeFilters.cuisine === 'All' || meal.cuisine === state.activeFilters.cuisine;
        const vegMatch = state.activeFilters.isVeg === null || meal.isVeg === state.activeFilters.isVeg;
        return categoryMatch && cuisineMatch && vegMatch;
      });
    },
    searchMeals: (state, action) => {
      const query = action.payload.toLowerCase();
      if (!query) {
        state.filteredMeals = state.allMeals;
      } else {
        state.filteredMeals = state.allMeals.filter(meal => 
          meal.name.toLowerCase().includes(query) || 
          meal.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
    }
  }
});

export const { setFilters, searchMeals } = mealsSlice.actions;
export default mealsSlice.reducer;
