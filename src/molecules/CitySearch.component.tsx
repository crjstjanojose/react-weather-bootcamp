import { useAtom } from "jotai";
import styled from "styled-components";
import CityTag from "../atoms/CityTag.component";
import InputSearch from "../atoms/InputSearch.component";
import { citiesAtom } from "../global";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding-top: 5rem;
  /* background-color: #f3f0f0; */
`;

const CitySearch = () => {
  const [cities] = useAtom(citiesAtom);
  return (
    <Container>
      <InputSearch found />
      <div>
        {cities.map((city) => (
          <CityTag name={city.name} key={city.id}></CityTag>
        ))}
      </div>
    </Container>
  );
};

export default CitySearch;
