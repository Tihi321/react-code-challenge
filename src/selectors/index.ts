import { get } from "lodash";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";

export const getThemeWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.Theme)
  );

export const getSearchTermWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.SearchTerm)
  );

export const getCategoryDietWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.CategoryDiet)
  );
