import { Header, SideBar, Video } from '@/application/components'
import { makeGQLAdapter } from '@/main/factories/graphql'
import { useParams } from 'react-router-dom'

type Params = {
  slug: string
}

export const Event = () => {
  const { slug } = useParams<Params>()
  const gqlAdapter = makeGQLAdapter()
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        { slug ? <Video lessonSlug={slug} gqlAdapter={gqlAdapter}/> : <div className='flex-1'/> }
        <SideBar gqlAdapter={gqlAdapter}/>
      </main>
    </div>
  )
}