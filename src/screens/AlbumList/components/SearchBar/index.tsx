import React from "react";
import { Box } from "rebass";
import { Input } from "@rebass/forms";

type Props = {
  onChange: (val: string) => void;
  value: string;
};
const SearchBar = ({ onChange }: Props) => {
  return (
    <Box>
      <Input
        id="email"
        name="Search"
        type="text"
        placeholder="Search ..."
        onChange={evt => onChange(evt.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
