import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
 
export class GQLApolloClient {
  public client: ApolloClient<NormalizedCacheObject>

  constructor () {
    this.client = new ApolloClient({
      uri: 'https://api-sa-east-1.hygraph.com/v2/cl8q48hjp26lq01tcdhby5bbg/master',
      cache: new InMemoryCache()
    })
  }
}