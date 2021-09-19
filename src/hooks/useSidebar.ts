import { useStateSelector, useStateStore } from "ts-use";
import isEmpty from "lodash/isEmpty";
import { getSearchQueryObjectWith, getSearchTermWith, getUseBookmarksStateWith } from "../selectors";
import { StateKeys } from "../enums/store";


export const useSidebar = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();

  const searchTerm = useStateSelector(getSearchTermWith(stateSelector)) as string;
  const queryObject = useStateSelector(getSearchQueryObjectWith(stateSelector));
  const useBookmarks = useStateSelector(getUseBookmarksStateWith(stateSelector));

  const submitSearch = () => {
    onStateKeyChange(StateKeys.SearchQuery, queryObject);
  }

  const switchBookmarks = () => {
    onStateKeyChange(StateKeys.UseBookmarks, !useBookmarks);
  }

  return {
    submitSearch,
    searchDisabled: isEmpty(searchTerm),
    switchBookmarks,
    useBookmarks,
  };
}