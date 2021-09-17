import { useStateStore } from "ts-use";
import { ETheme, StateKeys } from "../enums/store";
import { useLocalStorage } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";

export const initialState = {
  [StateKeys.Theme]: ETheme.Dark,
};

export const useContextStateProvider = () => {
  const { onStateObjectChange } = useStateStore();
  const { data: theme } = useLocalStorage(
    LocalStorageKeys.Theme,
    initialState.theme
  );

  onStateObjectChange({
    theme
  });
};
