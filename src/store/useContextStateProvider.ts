import { useStateStore } from "ts-use";
import { useLocalStorage } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";
import { initialState } from "./initialState";

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
