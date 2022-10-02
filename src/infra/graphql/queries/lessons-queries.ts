import { gql } from '@apollo/client'

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: available_at_ASC, stage: PUBLISHED) {
      id
      lesson_type
      slug
      available_at
      title
    }
  }
`

export const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String){
    lessons(where: {slug: $slug}) {
      title
      video_id
      description
      teacher {
        bio
        name
        avatar_url
      }
    }
  }
`