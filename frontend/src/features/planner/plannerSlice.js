import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_WEEK_PLAN } from '../../services/mockData';

const savedPlan = localStorage.getItem('weekPlan');

const initialState = {
  weekPlan: savedPlan ? JSON.parse(savedPlan) : DEFAULT_WEEK_PLAN,
  isDirty: false, // track if plan has unsaved changes
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    swapMeal: (state, action) => {
      const { day, mealTime, newMealId } = action.payload;
      if (state.weekPlan[day]) {
        state.weekPlan[day][mealTime] = newMealId;
        state.isDirty = true;
      }
    },
    savePlan: (state) => {
      localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan));
      state.isDirty = false;
    },
    resetPlan: (state) => {
      state.weekPlan = DEFAULT_WEEK_PLAN;
      state.isDirty = true;
    }
  }
});

export const { swapMeal, savePlan, resetPlan } = plannerSlice.actions;
export default plannerSlice.reducer;
