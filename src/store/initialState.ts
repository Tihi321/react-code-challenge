import { ETheme, StateKeys } from "../enums/store";

export const initialState = {
  [StateKeys.Theme]: ETheme.Dark,
  [StateKeys.SearchTerm]: "",
  [StateKeys.CategoryDiet]: [] as string[],
};
