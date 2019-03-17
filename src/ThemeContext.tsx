import { createContext, SetStateAction, Dispatch } from "react";
import { string } from "prop-types";

const ThemeContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  "green",
  theme => theme
]);

export default ThemeContext;
