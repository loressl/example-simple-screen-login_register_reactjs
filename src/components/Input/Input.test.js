import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from './index';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

describe('<Input/>', ()=>{
    it('Inserção de email', ()=>{
        function handleChange(e){
            const value= e.target.value;
            if(!emailRegex.test(value)){
                expect(value).toEqual('teste@gmail.com');
                const span = container.querySelector('span');
                expect(span.textContent).toBe("");
            }
        }
        const newEmail = 'teste@gmail.com';
        const {container} = render(<Input error="" placeholder="Email" type="email" name="email" onChand={handleChange}/>);
        const input = container.querySelector('input');
        fireEvent.change(input,{target:{value: newEmail}});
        expect(input.value).toBe(newEmail);
    })

    it('Inserção de password', async ()=>{
        function handleChange(e){
            const value= e.target.value;
            if(value.length > 6){
                expect(value).toEqual('123456');
            }
        }
        const newPassword = '123456';
        const {getByTestId } = render(
            <Input error="" placeholder="Password" type="password" name="password" onChange={handleChange}/>);
        const fieldNode = await waitFor(
            ()=> getByTestId('input-form-field')
        )
        fireEvent.change(
            fieldNode,
            {target:{value: newPassword}}
        )
        expect(fieldNode.value).toEqual(newPassword);
    })

    it('Mensagem de erro', async()=>{
        const {container} = render(<Input error="Error" placeholder="Email" type="email" name="email"/>);
        const span = container.querySelector('span');
        expect(span.textContent).toBe("Error");
    })
})
