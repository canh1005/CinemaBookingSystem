import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button, ConfigProvider, Radio, theme } from "antd";
import { useEffect, useState } from "react";
import CustomTable from "./components/CustomTable";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";
import { data } from "./components/constants";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log({ darkMode });
  const queryClient = new QueryClient();
  useEffect(() => {
    queryClient.setQueryData(["getTableData"], data);
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
  }, [darkMode]);
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
        <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Button>
        <CustomTable />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
