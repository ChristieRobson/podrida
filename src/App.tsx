import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import './App.css';
import HomePage from './presentation/pages/Home';
import ArticlePage from './presentation/pages/Article';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //  expect this data to (for demo purposes at least) to not change very often, so don't keep refetching it
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

function App() {
  const [readArticles, updateReadArticles] = useState([] as string[]);

  const markAsRead = (id:string) => {
    if (!readArticles.includes(id)) {
      updateReadArticles(readArticles.concat([id]));
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          podrida
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage readArticles={readArticles}/>
            </Route>
            <Route
              path="/article/:id"
              render={({ match }: MatchProps) => {
                return <ArticlePage id={match.params.id} markAsRead={markAsRead}/>;
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
