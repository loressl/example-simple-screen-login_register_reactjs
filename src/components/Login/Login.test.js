import React from 'react';
import {render,fireEvent, waitFor} from '@testing-library/react'
import Login from './index';


describe('Testes para o componente Login',()=>{
   
    it('Clicar no Forgot Password? abrir o modal', async ()=>{
        const {getByTestId} = render(<Login/>);
        const linkForgot= await waitFor(
            () => getByTestId('link-forgot')
        )
        fireEvent.click(linkForgot)
    
    })
})