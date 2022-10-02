import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
 
export class GQLApolloClient {
  public client: ApolloClient<NormalizedCacheObject>

  constructor () {
    this.client = new ApolloClient({
      uri: import.meta.env.VITE_API_GRAPHCMS_CONTENT_API,
      headers: {
        'Authorization': `Bearer ${import.meta.env.GRAPHCMS_AUTH_TOKEN}`
      },
      cache: new InMemoryCache()
    })
  }
}