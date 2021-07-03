import styled from "styled-components";
import SearchIcon from "../svg/SearchIcon.component";
import { useState } from "react";

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

interface SearchInputProps {
  error: boolean;
}

const SearchInput = styled.input<SearchInputProps>`
  width: 80%;
  border-radius: 100px;
  height: 1rem;
  margin-right: -2.5rem;
  background: ${({ error }) =>
    `${error ? `var(--primary)` : `var(--gray-dark-3)`}`};
  padding: 0.75rem 2rem;
  outline: none;
  transition: 0.2s;
  &:focus {
    width: 100%;
  }
`;

interface InputSearchProps {
  found: boolean;
}

const InputSearch: React.FC<InputSearchProps> = ({ found }) => {
  const [name, setName] = useState("");
  return (
    <SearchBar>
      <SearchInput
        error={!found}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SearchIcon />
    </SearchBar>
  );
};

export default InputSearch;
