import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SearchBooks from "./pages/SearchBooks";
import SavedGames from "./pages/SavedGames";
import Navbar from "./components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={SearchBooks} /> */}
            <Route exact path="/" component={SavedGames} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
