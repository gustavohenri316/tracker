import { ButtonHTMLAttributes, ReactNode } from "react"
import tw from "tailwind-styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost'
}

export const Button = ({ children, variant, ...props }: Props) => {
 
  return (
    <>
      <BaseButton{...props} variant={variant}>
        {children}
      </BaseButton>
    </>
  )
}
interface StyleProps{
  variant?: 'ghost'
}
export const BaseButton = tw.button<StyleProps>`
  h-10 px-8 text-white font-bold  disabled:bg-gray-200 
  disabled:cursor-not-allowed"
  ${({ variant }) => variant === 'ghost' ? Ghost : Main}
`
const Main = ' bg-gray-900 hover:bg-[#00FF4E] hover:text-gray-900'
const Ghost = 'bg-transparent hover:bg-gray-50 text-gray-900 hover:bg-[#00FF4E]'
