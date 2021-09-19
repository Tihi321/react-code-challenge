import { useEffect } from 'react'
import isEmpty from 'lodash/isEmpty';
import { useStateSelector, useStateStore, useFetch, TFetchUrl } from "ts-use";
import { getSearchQueryStateWith, getSearchQueryObjectWith, getSearchTermWith } from "../selectors";
import { StateKeys } from '../enums/store';



export const useFetchData = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const searchTerm = useStateSelector(getSearchTermWith(stateSelector)) as string;
  const searchQuery = useStateSelector(getSearchQueryStateWith(stateSelector)) as TFetchUrl;
  const searchQueryObject = useStateSelector(getSearchQueryObjectWith(stateSelector)) as TFetchUrl;

  useEffect(() => {
    if (!isEmpty(searchTerm) && !isEmpty(searchQueryObject) && isEmpty(searchQuery)) {
      onStateKeyChange(StateKeys.SearchQuery, searchQueryObject);
    }
    // eslint-disable-next-line
  }, [searchQueryObject]);

  const { data } = useFetch(searchQuery, {});

  useEffect(() => {
    onStateKeyChange(StateKeys.SearchRecipes, data);
    // eslint-disable-next-line
  }, [data]);
}