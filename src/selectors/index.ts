import { get } from "lodash";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";

export const getThemeWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.Theme)
  );
