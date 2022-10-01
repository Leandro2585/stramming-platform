import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link } from 'react-router-dom'
import ptBR from 'date-fns/locale/pt-BR'

export type LessonProps = {
  title: string
  slug: string
  available_at: Date
  type: 'live' | 'class'
}

export const Lesson = ({ available_at, slug, title, type }: LessonProps) => {
  const isLessonAvailable = isPast(available_at)
  const available_date_formatted = format(available_at, "EEEE' • 'd' de 'MMMM' • 'kk'h'mm", {
    locale: ptBR
  })
  return (
    <Link to={`/event/lesson/${slug}`} className='group'>
      <p className='first-letter:uppercase'>{available_date_formatted}</p>
      <div className='rounded border border-gray-500 p-4 mt-2 group-hover:border-blue-500 transition-colors'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className='text-xs rounded px-2 py-[0.125rem] text-white border border-blue-300 font-bold'>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className='text-gray-200 mt-5 block'>
          {title}
        </strong>
      </div>
    </Link>
  )
}