import {
  InfoCircleFilled
} from '@ant-design/icons';
import React from 'react';
function TableDetails(props) {
  console.log(props);
  return (
    <div style={{display: 'flex', gap: '15px'}}>
      <InfoCircleFilled />
      <p>{props?.description}</p>
    </div>
  )
}

export default TableDetails