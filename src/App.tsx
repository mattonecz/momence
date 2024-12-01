import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Home } from './views/home';
import styled from 'styled-components';

const AppWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <Home />
      </AppWrapper>
    </QueryClientProvider>
  );
};

export default App;
