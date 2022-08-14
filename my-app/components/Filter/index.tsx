import React, { useState } from "react";
import { Select } from 'antd';

type Props = {
    categories: [],
    value: string,
    set: (event:any)=>void,
}

const { Option } = Select;

export default function index({categories, value, set}: Props) {

    

  return (
    <Select
      defaultValue={value}
      style={{ maxWidth: 220, width: "100%", marginBottom: 20 }}
      onChange={set}
    >
      {categories.map((e, id) => (
        <Option value={e} key={id}>
          {e}
        </Option>
      ))}
    </Select>
  );
}

  