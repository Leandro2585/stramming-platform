import { GQLApolloClient } from '@/infra/graphql/helpers'

export const makeApolloClientFactory = (): GQLApolloClient => {
  return new GQLApolloClient()
}