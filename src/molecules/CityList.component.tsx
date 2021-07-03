import { useAtom } from "jotai";
import { citiesAtom } from "../global";
import CityTag from "../atoms/CityTag.component";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CityList = () => {
  const [cities] = useAtom(citiesAtom);
  return (
    <Container>
      {cities.map((city) => (
        <CityTag name={city.name} key={city.id}></CityTag>
      ))}
    </Container>
  );
};

export default CityList;
