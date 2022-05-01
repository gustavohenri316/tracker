import React from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/InputText'
import { Link } from '../../components/molecules/Link'

export const Login = () => {
    return (
        <div className="w-screen h-screen bg-gray-50 flex justify-center">
            <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
                <aside className='flex justify-center items-center'>
                    <img src="/money.svg" alt="" />
                </aside>
                <main className="flex flex-col justify-center items-center gap-16">
                    <h1 className="font-bold text-3x1">Controle seus gastos</h1>
                    <form className="flex flex-col w-full gap-4">
                       <InputText label='Email' type='email'/>
                       <InputText label='Senha' type="password"/>
                        <Button disabled>LogIn</Button>
                    </form>
                    <Link href='/register'>Criar Conta</Link>
                </main>
            </div>
        </div>
    )
}
