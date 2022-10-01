import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { makeApolloClientFactory } from '@/main/factories/graphql'
import { PublicRoutes } from '@/main/routes/public'
import '@/main/configs'

export const App = () => {
  return (
    <ApolloProvider client={makeApolloClientFactory().client}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </ApolloProvider>
  )
}
