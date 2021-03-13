import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './presentation/pages/Home';
import ArticlePage from './presentation/pages/Article';

const queryClient = new QueryClient();

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route
              path="/article/:id"
              render={({ match }: MatchProps) => {
                return <ArticlePage id={match.params.id} />;
              }}>
            </Route>
            <Redirect path="/" to="/"/>
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
