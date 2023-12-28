import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Button, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import CustomTable from "./components/CustomTable";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";
import { data } from './components/constants';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log({darkMode});
  const queryClient = new QueryClient()
  useEffect(() => {
    queryClient.setQueryData(['getTableData'], data);
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
        <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode' : 'Light Mode'}</Button>
      <ConfigProvider theme={darkMode ? lightTheme : darkTheme}>
        <CustomTable />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
