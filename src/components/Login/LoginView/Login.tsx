import MyButton from '../../Button';
import LoginView from '.';
import LoginInput from '../Logininput';
import Logoimg from '../../../images/Logo.png'
import { useState } from 'react';
import axios from "axios";



function Login() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const idInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const pwInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPw(e.target.value)
    }


    const clicked = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/dbpractice/get_user_email/');
          const userEmails = response.data.user_email;
          const userPw = response.data.user_pw;
          console.log(userEmails); 
          console.log(userPw);// Do something with the data
          if(email==userEmails && pw==userPw) {
            alert('로그인에 성공했습니다.')
        } else {
            alert('등록되지 않은 회원입니다.')
        }
        } catch (error) {
          console.error('Error fetching user emails:', error);
        }
      };

    return (
        
          <LoginView>
              <img src={Logoimg}></img>
              <LoginInput type='id' placeholder='Usuário'
                onChange={idInput}></LoginInput>
              <LoginInput type='password' placeholder='Senha'
                onChange={pwInput}></LoginInput>
              <MyButton label='ENTRAR' Color='white' BgColor='black' onClick={clicked}/>
              
          </LoginView>
        
    );
}

export default Login