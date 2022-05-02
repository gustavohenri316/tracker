import React from 'react'
import { Button } from '../../components/atoms/Button'
import { TemplateContainer } from '../../components/templates'
import { Card } from './components/Card'

export const Dashboard = () => {

  const array = [
    {id: '0', title: 'Netflix', category: 'streaming', cost: 3.99},
    {id: '0', title: 'Amazon', category: 'streaming', cost: 39.99},
    {id: '0', title: 'Internet', category: 'streaming', cost: 39.99},
    {id: '0', title: 'Spotify', category: 'streaming', cost: 39.99},
]
  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center
       h-1/6">
        <span className="font-bold text-2xl">Expanse Tracker</span>
        <nav className='flex gap-4'>
          <Button>Adicionar Nova Conta</Button>
          <Button variant='ghost'>Sair</Button>
        </nav>
      </header>

      <main className="w-full bg-gray-100 max-w-screen-lg h-5/6 
      grid overflow-y-scroll content-start grid-cols-3 gap-4 p-4 pb-8">
        {array.map(item => ( 
          <Card key={item.id} title={item.title} category={item.category} cost={item.cost}/>
        ))}
         
      </main>
    </TemplateContainer>
  )
}
