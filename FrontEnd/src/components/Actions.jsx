import { DeleteFilled } from '@ant-design/icons';
import React from 'react';

function Actions(props) {
  console.log({props});
  return (
    <div>
      <DeleteFilled onClick={() => {console.log('click', props)}} />
    </div>
  )
}

export default Actions