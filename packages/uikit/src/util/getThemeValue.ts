import get from "lodash/get";
import { DefaultTheme } from "styled-components";

const getThemeValue = (theme: DefaultTheme, path: string, fallback?: string): string =>
  get(theme, path, fallback);

export default getThemeValue;
