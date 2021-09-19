import React from "react";
import { useDiet } from "../../hooks/useDiet";

import { Select } from "../common/SelectInput";

export const Diet = () => {
  const { values, setValues, options } = useDiet();

  return (
    <Select
      title="Diet"
      value={values}
      onChange={(values) => setValues(values)}
      options={options}
    />
  );
};
