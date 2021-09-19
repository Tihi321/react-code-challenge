import React from "react";
import map from "lodash/map";
import styled from "styled-components";

import { searchBackgroundColor, searchBorderColor, searchTextColor } from "../../themes";

export const SelectInput = styled.select`
  border: 1px solid ${searchBorderColor};
  background-color: ${searchBackgroundColor};
  color: ${searchTextColor};
  padding: 5px;
  width: 100%;
  max-height: 80px;
`;

export const SelectContainer = styled.label`
  margin: 10px 0;
`;

export interface ISelectProps {
  title: string;
  onChange: (value: string[]) => void;
  value: string[];
  options: string[];
}

export const Select = ({ onChange, value, options, title }: ISelectProps) => {
  return (
    <SelectContainer>
      {title}
      <SelectInput
        value={value}
        onChange={(event) => {
          const values = Array.from(event.target.selectedOptions, (option) => option.value);
          onChange(values);
        }}
        multiple
      >
        {map(options, (option, index) => (
          <option value={option} key={`${option}-${index}`}>
            {option}
          </option>
        ))}
      </SelectInput>
    </SelectContainer>
  );
};
