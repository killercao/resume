// @flow
import * as React from "react";
import * as ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./index.css";
import App from "./components/App";
import backgroundImage from "./assets/images/wrong-way.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const NoMatch = ({ location }) => (
  <CenterDiv>
    <h1
      style={{
        color: "white",
        fontWeight: "300",
      }}
    >
      Wrong URL ?!
    </h1>{" "}
    <p
      style={{
        color: "white",
        marginTop: "1rem",
      }}
    >
      This is 404...
    </p>
  </CenterDiv>
);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Switch
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Route exact path="/" component={App} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
