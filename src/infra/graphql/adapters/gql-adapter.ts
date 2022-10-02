import { QueryResult, useMutation, useQuery } from '@apollo/client'
import { GET_LESSONS_QUERY, GET_LESSON_BY_SLUG_QUERY } from '@/infra/graphql/queries'
import { CREATE_SUBSCRIBER_MUTATION } from '@/infra/graphql/mutations'
import { GQLInterface } from '@/domain/protocols'
import { CreateSubscriberMutationResponse, GetLessonBySlugQueryResponse, GetLessonsQueryResponse } from '@/domain/models'

export class GQLAdapter implements GQLInterface {
  async createSubscriber(name: string, email: string): Promise<CreateSubscriberMutationResponse> {
    const [createSubscriber, { data, loading }] = useMutation<CreateSubscriberMutationResponse>(CREATE_SUBSCRIBER_MUTATION)
    await createSubscriber({ variables: { name, email } })
    return { data, loading }
  }

  getLessonBySlug(slug: string): GetLessonBySlugQueryResponse {
    const { data } = useQuery(GET_LESSON_BY_SLUG_QUERY, { variables: {
      slug
    }})
    return data
  }

  getLessons(): GetLessonsQueryResponse | undefined {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    return data
  }
}