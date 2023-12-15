import { Table } from 'antd';
import React, { useMemo } from 'react';
import TableDetails from './TableDetails';
import Actions from './actions';
import { data } from './constants';
import { columnProperties } from './columnProperties';

function CustomTable() {
  const columns = useMemo(() => columnProperties(Actions), []);

  return (
    <Table
    columns={columns}
    expandable={{
      expandedRowRender: TableDetails
    }}
    dataSource={data}
  />
  )
}

export default CustomTable