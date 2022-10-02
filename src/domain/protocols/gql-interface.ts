import { CreateSubscriberMutationResponse, GetLessonBySlugQueryResponse, GetLessonsQueryResponse } from '@/domain/models'

export interface GQLInterface {
  getLessons(): GetLessonsQueryResponse | undefined
  getLessonBySlug(slug: string): GetLessonBySlugQueryResponse
  createSubscriber(name: string, email: string): Promise<CreateSubscriberMutationResponse>
}