import styled from "styled-components";
import { useWeatherDisplay } from "../lib/UseWeatherDisplay";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 4rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text.primary};
`;

const Title = styled.h1`
  font-weight: lighter;
`;
const CityName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TemperatureDisplay = styled.span`
  display: inline;
  justify-content: center;
`;

const TempImage = styled.span`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 1000px;
  margin-right: 1rem;
`;

const TempValue = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bolder;
`;

const MinMaxContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

const Loading = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
`;

const WeatherDisplay = () => {
  const { isFetching, data } = useWeatherDisplay();

  if (isFetching || !data) return <Loading>Carregando...</Loading>;

  if (!data.weather || !data.main) return <Loading>Sem dados</Loading>;

  return (
    <Container>
      <Title>Tempo agora em</Title>
      <CityName>{data.name}</CityName>
      <TemperatureDisplay>
        <TempImage>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Imagem do tempo"
          />{" "}
        </TempImage>
        <MinMaxContainer>
          <TempValue>{data.main.temp}</TempValue>
        </MinMaxContainer>
      </TemperatureDisplay>
      <MinMaxContainer>
        <span>Mìnima: {data.main.temp_min}</span>
        <span>Máxima: {data.main.temp_max}</span>
      </MinMaxContainer>
    </Container>
  );
};

export default WeatherDisplay;
