import { Event } from '@/application/pages'
import { Routes, Route } from 'react-router-dom'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/event' element={<Event />}/>
      <Route path='/event/lesson/:slug' element={<Event />}/>
    </Routes>
  )
}