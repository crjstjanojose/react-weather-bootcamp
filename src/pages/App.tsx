import "../styles/colors.styles.css";
import CitySearch from "../molecules/CitySearch.component";
import { QueryClient, QueryClientProvider } from "react-query";
import WeatherDisplay from "../atoms/WeatherDisplay";
import styled, { ThemeProvider } from "styled-components";
import ThemeSwitch from "../atoms/ThemeSwitch.component";
import { LightTheme, DarkTheme } from "../themes/index";
import { themeAtom } from "../global";
import { useAtom } from "jotai";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
`;

const AppContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;

const ContainerWeatherDisplay = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
`;

function App() {
  const queryClient = new QueryClient();
  const [theme] = useAtom(themeAtom);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
        <AppContainer>
          <Container>
            <ThemeSwitch />
            <div>
              <CitySearch />
            </div>
            <div>
              <ContainerWeatherDisplay>
                <WeatherDisplay></WeatherDisplay>
              </ContainerWeatherDisplay>
            </div>
          </Container>
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
