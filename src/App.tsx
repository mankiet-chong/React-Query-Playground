import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ConfigProvider } from "antd";
import Posts from "./Posts";

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <div className="App">
      {/* <Button type="primary">Click Me!</Button> */}
      <Posts />
    </div>
  </ConfigProvider>
);

export default App;
