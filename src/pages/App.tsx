import "../styles/colors.styles.css";
import CitySearch from "../molecules/CitySearch.component";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <CitySearch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
