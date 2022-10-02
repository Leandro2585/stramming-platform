import { Event, Subscribe } from '@/application/pages'
import { Routes, Route } from 'react-router-dom'
import { makeGQLAdapter } from '@/main/factories/graphql'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Subscribe />}/>
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  )
}