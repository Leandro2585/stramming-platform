import { Logo } from '@/application/components'
import { GQLInterface } from '@/domain/protocols'
import { makeGQLAdapter } from '@/main/factories/graphql'
import { FormEvent, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Subscribe = () => {
  const [formState, setFormState] = useState({ name: '', email: '', loading: false })

  const navigate = useNavigate()
  const gqlAdapter = makeGQLAdapter()

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault()
    const { loading } = await gqlAdapter.createSubscriber(formState.name, formState.email)
    setFormState({ ...formState, loading })
    navigate('/')
  }

  return (
    <div className='absolute w-full bg-blur bg-no-repeat min-h-screen flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[640px]'>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-300'>aplicação completa</strong>, do zero, com <strong className='text-blue-300'>React JS</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado
          </p>
        </div>
        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className='flex flex-col gap-2 w-full'>
            <input 
              id='name' 
              type='text' 
              name='name' 
              placeholder='Digite seu nome completo'
              className='bg-gray-900 rounded px-5 h-14'
              onChange={event => setFormState({ ...formState, name: event.target.value })}
            />
            <input 
              id='email' 
              type='email' 
              name='email' 
              placeholder='Digite seu e-mail'
              className='bg-gray-900 rounded px-5 h-14'
              onChange={event => setFormState({ ...formState, email: event.target.value })}
            />
            <button 
              type='submit'
              disabled={formState.loading}
              className='disabled:opacity-50 mt-4 bg-blue-500 uppercase py-4 rounded font-bold text-sm hover:bg-blue-700 hover:text-zinc-300 transition-colors'
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src='/src/application/assets/code-mockup.png' className='mt-10' />
    </div>
  )
}