import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import logo from './logo.svg';
import './App.css';
import Homepage from './presentation/pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <Homepage/> */}
        </header>
        <Homepage/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
