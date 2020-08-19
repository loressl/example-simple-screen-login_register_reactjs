import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from './index';

describe('<Input/>', ()=>{
    it('Inserção de email', async()=>{
        const newEmail = 'teste@gmail.com';
        const {container} = render(<Input error="Error" placeholder="Email" type="email" name="email"/>);
        const input = container.querySelector('input');
        fireEvent.change(input,{target:{value: newEmail}});
        expect(input.value).toBe(newEmail);
        const span = container.querySelector('span');
        expect(span.textContent).toBe("Error");
    })

    it('Inserção de password', async ()=>{
        const newPassword = '123456';
        const {getByTestId } = render(
            <Input error="" placeholder="Password" type="password" name="password"/>);
        const fieldNode = await waitFor(
            ()=> getByTestId('input-form-field')
        )
        fireEvent.change(
            fieldNode,
            {target:{value: newPassword}}
        )
        expect(fieldNode.value).toEqual(newPassword);
    })
})
