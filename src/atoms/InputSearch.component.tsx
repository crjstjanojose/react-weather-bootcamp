import styled from "styled-components";
import SearchIcon from "../svg/SearchIcon.component";
import { useEffect, useState } from "react";
import useSearch from "../lib/UseSearch";

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.background};
  /* border: ${({ theme }) => theme.secondary} solid 2px; */
`;

interface SearchInputProps {
  error: boolean;
}

const SearchInput = styled.input<SearchInputProps>`
  width: 80%;
  border-radius: 100px;
  height: 1rem;
  margin-right: -2.5rem;
  background: ${({ error, theme }) =>
    `${error ? theme.error : theme.secondary}`};
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
  const { filterCities } = useSearch();

  useEffect(() => {
    filterCities(name);
  }, [name]);

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
