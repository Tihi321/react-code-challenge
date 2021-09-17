import { useStateStore, useStateSelector } from "ts-use";
import { getThemeWith } from "../selectors";
import { ETheme, StateKeys } from "../enums/store";

export const useTheme = () => {
  const { stateSelector, stateKeyValueChanged } = useStateStore();

  const theme = useStateSelector(getThemeWith(stateSelector)) as ETheme;

  const switchTheme = () => stateKeyValueChanged(StateKeys.Theme, theme === ETheme.Dark ? ETheme.Light : ETheme.Dark);

  return {
    theme,
    switchTheme
  };
}