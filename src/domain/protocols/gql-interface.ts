import { GetLessonBySlugQueryResponse, GetLessonsQueryResponse } from '@/domain/models'

export interface GQLInterface {
  getLessons(): GetLessonsQueryResponse | undefined
  getLessonBySlug(slug: string): GetLessonBySlugQueryResponse
}