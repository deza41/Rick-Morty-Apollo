//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Routing from './routes/index';

const cache = new InMemoryCache({
  typePolicies: {
    Characters: {
      fields: {
        results: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        }
      }
    }
  }
})
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          < Routing />
      </div>
    </ApolloProvider>
  );
}

export default App;
