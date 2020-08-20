import React from 'react';
import Button from './index';
import { render, fireEvent, act} from '@testing-library/react';

describe('<Button/>' , ()=>{
    it('Click', ()=>{ 
        function handleSubmit(){console.log('Sign In')}
        const {container} = render(<Button status={true} onClick={handleSubmit} name="Sign In"/>);
        const button = container.querySelector("button");
        act(()=>{fireEvent.click(button);})
        expect(button.disabled).not.toBeTruthy();
    })
})