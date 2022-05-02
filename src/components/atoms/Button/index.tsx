import { ButtonHTMLAttributes, ReactNode } from "react"
import tw from "tailwind-styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost'
  variants?: "excluir"
}

export const Button = ({ children, variant, variants, ...props }: Props) => {
 
  return (
    <>
      <BaseButton{...props} variant={variant} variants={variants}>
        {children}
      </BaseButton>
    </>
  )
}
interface StyleProps{
  variant?: 'ghost',
  variants?: "excluir"
}

export const BaseButton = tw.button<StyleProps>`
  h-10 px-8 text-white font-bold  disabled:bg-gray-200 
  disabled:cursor-not-allowed"
  ${({ variant }) => variant === 'ghost' ? Ghost : Main }
  ${({ variants }) => variants === "excluir" ? Excluir : null }
  

`
const Main = ' bg-gray-900 hover:bg-[#00FF4E] hover:text-gray-900'
const Ghost = ' bg-transparent text-gray-900 hover:bg-[#00FF4E]'
const Excluir = 'bg-transparent text-gray-900 hover:bg-red-700 hover:text-white'
