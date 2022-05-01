import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode
}

export const Button = ({ children, ...props}: Props) => {
  return (
    <>
      <button
        {...props}
        className="bg-gray-900 h-10 text-white font-bold hover:bg-[#00FF4E] disabled:bg-gray-200 disabled:cursor-not-allowed">
        {children}
      </button>
    </>
  )
}
