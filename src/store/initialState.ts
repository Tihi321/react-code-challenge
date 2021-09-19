import { TFetchUrl } from "ts-use";
import { ETheme, StateKeys } from "../enums/store";

export const initialState = {
  [StateKeys.Theme]: ETheme.Dark,
  [StateKeys.SearchTerm]: "",
  [StateKeys.SearchRecipes]: [],
  [StateKeys.BookmarkedRecipes]: [] as string[],
  [StateKeys.UseBookmarks]: false,
  [StateKeys.CategoryDiet]: [] as string[],
  [StateKeys.CategoryHealth]: [] as string[],
  [StateKeys.CategoryCuisineType]: [] as string[],
  [StateKeys.CategoryMealType]: [] as string[],
  [StateKeys.SearchQuery]: {} as TFetchUrl,
};
