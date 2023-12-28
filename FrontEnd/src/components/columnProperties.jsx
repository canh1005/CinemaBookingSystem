export const columnProperties = (action = {}, defaultSettings) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      ...defaultSettings
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...defaultSettings
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: action,
      fixed: 'right',
    },
  ]
};