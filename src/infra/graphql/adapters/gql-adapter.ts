import { QueryResult, useQuery } from '@apollo/client'
import { GET_LESSONS_QUERY, GET_LESSON_BY_SLUG_QUERY } from '@/infra/graphql/queries'
import { GQLInterface } from '@/domain/protocols'
import { GetLessonBySlugQueryResponse, GetLessonsQueryResponse } from '@/domain/models'

export class GQLAdapter implements GQLInterface {
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