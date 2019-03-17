import React, { useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Router, Link, RouteComponentProps } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const FourOhFour: FunctionComponent<RouteComponentProps> = () => <h1>404</h1>;

const App = () => {
  const theme = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            <FourOhFour default={true} />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
