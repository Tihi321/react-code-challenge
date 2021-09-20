import get from "lodash/get";
import filter from "lodash/filter";
import includes from "lodash/includes";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { createSelector } from "reselect";
import { StateKeys } from "../enums/store";
import { Endpoints } from "../enums/api";

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

export const getCategoryHealthWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.CategoryHealth)
  );

export const getCategoryCuisineTypeWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.CategoryCuisineType)
  );

export const getCategoryMealTypeWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.CategoryMealType)
  );

export const getSearchQueryStateWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, StateKeys.SearchQuery)
  );

export const getSearchRecipesDataStateWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, [StateKeys.SearchRecipes])
  );

export const getSearchRecipesStateWith = (stateSelector: any) =>
  createSelector(
    getSearchRecipesDataStateWith(stateSelector),
    state => get(state, ["hits"], [])
  );

export const getSearchBookmarksStateWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, [StateKeys.BookmarkedRecipes])
  );

export const getUseBookmarksStateWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, [StateKeys.UseBookmarks])
  );

export const getOverflowWith = (stateSelector: any) =>
  createSelector(
    stateSelector,
    state => get(state, [StateKeys.Overflow])
  );

export const getSearchQueryObjectWith = (stateSelector: any) =>
  createSelector(
    getSearchTermWith(stateSelector),
    getCategoryDietWith(stateSelector),
    getCategoryHealthWith(stateSelector),
    getCategoryCuisineTypeWith(stateSelector),
    getCategoryMealTypeWith(stateSelector),
    (searchTerm, categoryDiet, categoryHealth, categoryCuisineType, categoryMealType) => {

      let queryArray = [
        {
          key: "type", value: "public"
        },
        {
          key: "q", value: searchTerm
        },
        {
          key: "app_id", value: process.env.REACT_APP_RECIPE_API_ID
        },
        {
          key: "app_key", value: process.env.REACT_APP_RECIPE_API_KEY
        }
      ];

      if (!isEmpty(categoryDiet)) {
        const categoryQuery = map(filter(categoryDiet, value => !isEmpty(value)), value => ({
          key: "diet", value
        }));

        queryArray = [...queryArray, ...categoryQuery];
      }

      if (!isEmpty(categoryHealth)) {
        const categoryQuery = map(filter(categoryHealth, value => !isEmpty(value)), value => ({
          key: "health", value
        }));

        queryArray = [...queryArray, ...categoryQuery];
      }

      if (!isEmpty(categoryCuisineType)) {
        const categoryQuery = map(filter(categoryCuisineType, value => !isEmpty(value)), value => ({
          key: "cuisineType", value
        }));

        queryArray = [...queryArray, ...categoryQuery];
      }

      if (!isEmpty(categoryMealType)) {
        const categoryQuery = map(filter(categoryMealType, value => !isEmpty(value)), value => ({
          key: "mealType", value
        }));

        queryArray = [...queryArray, ...categoryQuery];
      }

      return {
        url: Endpoints.GetRecipes,
        query: queryArray,
        suffix: "%20and%20cookies"
      };
    }
  );

export const getSearchResultsObjectWith = (stateSelector: any) =>
  createSelector(
    getSearchRecipesStateWith(stateSelector),
    recipes => map(recipes, recipe => ({
      picture: get(recipe, ["recipe", "image"]),
      label: get(recipe, ["recipe", "label"]),
      calories: get(recipe, ["recipe", "calories"]),
      healthLabels: get(recipe, ["recipe", "healthLabels"]),
      dietLabels: get(recipe, ["recipe", "dietLabels"]),
      uri: get(recipe, ["recipe", "uri"]),
    }))
  );

export const getSearchBookmarkedResultsObjectWith = (stateSelector: any) =>
  createSelector(
    getSearchResultsObjectWith(stateSelector),
    getSearchBookmarksStateWith(stateSelector),
    (recipes, bookmarks) => filter(recipes, recipe => includes(bookmarks, get(recipe, ["uri"])))
  );

export const getSearchResultObjectDataWith = (stateSelector: any) =>
  createSelector(
    getSearchRecipesStateWith(stateSelector),
    recipes => map(recipes, recipe => ({
      picture: get(recipe, ["recipe", "image"]),
      label: get(recipe, ["recipe", "label"]),
      ingredients: get(recipe, ["recipe", "ingredients"]),
      totalNutrients: get(recipe, ["recipe", "totalNutrients"]),
      digest: get(recipe, ["recipe", "digest"]),
      uri: get(recipe, ["recipe", "uri"]),
    }))
  );