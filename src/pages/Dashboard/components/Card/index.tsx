import React from 'react'
import { Button } from '../../../../components/atoms/Button'

export const Card = ({title, category, cost}) => {
  return (
    <article className="bg-white p-4 shadow-md h-40 relative flex 
    flex-col justify-between gap-2">
      <Button className="absolute top-0 right-0" variants="excluir">Excluir</Button>
      <h2 className="font-bold text-xl rounded-full self-start">{title}</h2>
      <p className="px-4 h-8 flex items-center justify-center text-gray-900 
      bg-gray-100 rounded-full self-start">{category}</p>
      <p className="font-medium  ">{cost}</p>
    </article>
  )
}
