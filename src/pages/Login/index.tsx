import React from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/InputText'
import { Link } from '../../components/molecules/Link'
import { SideBarHero } from '../../components/organism/SideBarHero'
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from '../../components/templates'

export const Login = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <SideBarHero/>
                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Acesse sua conta</h1>
                    <form className="flex flex-col w-full gap-4 max-w-xs">
                       <InputText label='Email' type='email'/>
                       <InputText label='Senha' type="password"/>
                        <Button>Entrar</Button>
                    </form>
                    <Link href='/register'>Criar Conta</Link>
                </TemplateMainHeroSection>
            </TemplateContent>
        </TemplateContainer>
    )
}
