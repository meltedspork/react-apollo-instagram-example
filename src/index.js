import React from 'react'
import ReactDOM from 'react-dom'
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import { BrowserRouter, Route } from 'react-router-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj81mwlnz0cre0196qvftgbfz'
})
const client = new ApolloClient({
  networkInterface
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Route path='/' component={ListPage} />
        <Route path='/create' component={CreatePage} />
      </div>
    </BrowserRouter>
  </ApolloProvider>
  ),
  document.getElementById('root')
)