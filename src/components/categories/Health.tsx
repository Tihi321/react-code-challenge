import React from "react";
import { useHealth } from "../../hooks/useHealth";

import { Select } from "../common/SelectInput";

export const Health = () => {
  const { values, setValues, options } = useHealth();

  return (
    <Select
      title="Health"
      value={values}
      onChange={(values) => setValues(values)}
      options={options}
    />
  );
};
