import MyButton from '../../Button';
import LoginView from '.';
import LoginInput from '../Logininput';
import Logoimg from '../../../images/Logo.png'
import { useState } from 'react';

const User = {
    email: 'lsh@gmail.com',
    pw: '1234'
};

function Login() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const idInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const pwInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPw(e.target.value)
    }

    const correctConfirm = () => {
        if(email===User.email && pw===User.pw) {
            alert('로그인에 성공했습니다.')
        } else {
            alert('등록되지 않은 회원입니다.')
        }
    }

    return (
        
          <LoginView>
              <img src={Logoimg}></img>
              <LoginInput type='id' placeholder='Usuário' value={email}
                onChange={idInput}></LoginInput>
              <LoginInput type='password' placeholder='Senha' value={pw}
                onChange={pwInput}></LoginInput>
              <MyButton label='ENTRAR' Color='white' BgColor='black' onClick={correctConfirm}/>
              
          </LoginView>
        
    );
}

export default Login