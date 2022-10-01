import { GQLAdapter } from '@/infra/graphql/adapters'

export const makeGQLAdapter = (): GQLAdapter => {
  return new GQLAdapter()
}