import styled from "@emotion/styled";
import Navbar from "./components/navbar/Navbar";
import PageNavigator from "./PageNavigator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <PageNavigator />
      </Main>
    </QueryClientProvider>
  );
}

export default App;

const Header = styled.header`
  max-width: 1024px;
  margin: 0 auto;
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;
