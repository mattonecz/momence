import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Index } from './views/home';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="content">
      <QueryClientProvider client={queryClient}>
        <h1>Rsbuild with React</h1>
        <Index />
      </QueryClientProvider>
    </div>
  );
};

export default App;
