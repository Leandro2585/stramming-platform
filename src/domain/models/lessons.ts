export type GetLessonsQueryResponse = {
  lessons: Array<{
    id: string
    title: string
    slug: string
    lesson_type: 'live' | 'class'
    available_at: string
  }>
}

export type GetLessonBySlugQueryResponse = {
  lesson: {
    title: string
    video_id: string
    description: string
    teacher: {
      name: string
      bio: string
      avatar_url: string
    }
  }
}