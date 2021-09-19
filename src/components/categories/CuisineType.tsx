import React from "react";
import { useCuisineType } from "../../hooks/useCuisineType";

import { Select } from "../common/SelectInput";

export const CuisineType = () => {
  const { values, setValues, options } = useCuisineType();

  return (
    <Select
      title="Cuisine type"
      value={values}
      onChange={(values) => setValues(values)}
      options={options}
    />
  );
};
