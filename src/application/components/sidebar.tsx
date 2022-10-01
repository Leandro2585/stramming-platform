import { GQLInterface } from '@/domain/protocols'
import { Lesson } from './lesson'

export type SideBarProps = {
  gqlAdapter: GQLInterface
}

export const SideBar = ({ gqlAdapter }: SideBarProps) => {
  const lessons = gqlAdapter.getLessons()?.lessons
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>Cronograma das aulas</span>

      <div className='flex flex-col gap-8'>
        {lessons?.map(lesson => (
          <Lesson 
            title={lesson.title}
            slug={lesson.slug}
            available_at={new Date(lesson.available_at)}
            type={lesson.lesson_type}
          />
        ))}
      </div>
    </aside>
  )
}