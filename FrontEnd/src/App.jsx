import { useState } from "react";
import "./App.css";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";
import {  Button, ConfigProvider } from 'antd';
import CustomTable from "./components/CustomTable";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ConfigProvider theme={darkMode ? lightTheme : darkTheme}>
      {/* <Button color="primary" onClick={() => setDarkMode(!darkMode)}>Select me</Button> */}
      <CustomTable/>
    </ConfigProvider>
  );
}

export default App;
