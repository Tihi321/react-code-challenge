import React from "react";
import { useMealType } from "../../hooks/useMealType";

import { Select } from "../common/SelectInput";

export const MealType = () => {
  const { values, setValues, options } = useMealType();

  return (
    <Select
      title="Meal type"
      value={values}
      onChange={(values) => setValues(values)}
      options={options}
    />
  );
};
