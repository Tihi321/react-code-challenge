import { ETheme, StateKeys } from "../enums/store";

export const initialState = {
  [StateKeys.Theme]: ETheme.Dark,
  [StateKeys.SearchTerm]: "",
  [StateKeys.CategoryDiet]: [] as string[],
  [StateKeys.CategoryHealth]: [] as string[],
  [StateKeys.CategoryCuisineType]: [] as string[],
  [StateKeys.CategoryMealType]: [] as string[],
};
