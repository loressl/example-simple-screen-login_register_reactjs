import React, {useState} from 'react';
import './styles.css';
import Login from '../../components/Login';
import Register from '../../components/Register';

function PageBase(){
    const [isOpenLogin, setIsOpenLogin]= useState(true);
    const [isOpenRegister, setIsOpenRegister]= useState(false);

    return(
        <div className="wrapper">
           {isOpenLogin && <Login setIsOpenLogin={setIsOpenLogin} setIsOpenRegister={setIsOpenRegister}/>}
           {isOpenRegister && <Register setIsOpenLogin={setIsOpenLogin} setIsOpenRegister={setIsOpenRegister}/>}
        </div>
    );
}

export default PageBase;