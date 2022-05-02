import React from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/InputText'
import { Link } from '../../components/molecules/Link'
import { SideBarHero } from '../../components/organism/SideBarHero'
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from '../../components/templates'

export const Register = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <SideBarHero/>
                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Crie sua conta</h1>
                    <form className="flex flex-col w-full gap-4 max-w-xs">
                       <InputText label='Email' type='email'/>
                       <InputText label='Senha' type="password"/>
                        <Button>Criar Conta</Button>
                    </form>
                    <Link href='/'>Já tenho uma conta</Link>
                </TemplateMainHeroSection>
            </TemplateContent>
        </TemplateContainer>
    )
}
