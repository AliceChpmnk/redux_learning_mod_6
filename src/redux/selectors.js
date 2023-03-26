import { statusFilters } from "./constants";
import { createSelector } from "@reduxjs/toolkit";

//Атомарні селектори
export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;

//Складові селектори
//Для мемоізації селектора використовується функція createSelector (запобігання повторним обчисленням)
export const selectVisibleTasks = createSelector(
    // Масив вхідних селекторів
    [selectTasks, selectStatusFilter],
    // Функція перетворювач
    (tasks, statusFilter) => {
      // Виконуємо обчислення та повертаємо результат
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});