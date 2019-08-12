import React from "react";
import { YellowBox } from "react-native";

// Ignora o erro do websocket
YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

// Routes
import Routes from "./routes";

export default function App() {
  return <Routes />;
}
