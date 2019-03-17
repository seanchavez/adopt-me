import { createContext, SetStateAction } from "react";
import { string } from "prop-types";

const ThemeContext = createContext<[string, SetStateAction<string>]>([
  "green",
  obj => obj
]);

export default ThemeContext;
