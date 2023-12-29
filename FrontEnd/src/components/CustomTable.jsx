import { useQueryClient } from "@tanstack/react-query";
import { Table } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import Actions from "./Actions";
import TableDetails from "./TableDetails";
import { columnProperties } from "./columnProperties";

function CustomTable() {
  const defaultSettings = (key) => {
    return {sorter: (a, b) => a.key - b.key}
  }
  const columns = useMemo(() => columnProperties(Actions, defaultSettings), []);
  const queryClient = useQueryClient();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTimeout(setTableData(queryClient.getQueryData(["getTableData"])), 1000);
  }, []);

  console.log(tableData);

  return (
    <Table
      columns={columns}
      bordered={true}
      expandable={{
        expandedRowRender: TableDetails,
      }}
      dataSource={tableData}
    />
  );
}

export default CustomTable;
