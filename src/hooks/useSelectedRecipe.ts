import { useStateSelector, useStateStore } from "ts-use";
import isEqual from "lodash/isEqual";
import filter from "lodash/filter";
import includes from "lodash/includes";
import { getSearchBookmarksStateWith } from "../selectors";
import { StateKeys } from "../enums/store";


export const useSelectedRecipe = (uri: string) => {
  const { stateSelector, onStateKeyChange } = useStateStore();

  const searchBookmarks = useStateSelector(getSearchBookmarksStateWith(stateSelector));

  const switchBookmark = () => {
    const newBookmarks = includes(searchBookmarks, uri) ? filter(searchBookmarks, bookmarkUri => !isEqual(bookmarkUri, uri)) : [...searchBookmarks, uri];
    onStateKeyChange(StateKeys.BookmarkedRecipes, newBookmarks);
  }

  return {
    switchBookmark,
    isBookmarked: includes(searchBookmarks, uri),
  };
}