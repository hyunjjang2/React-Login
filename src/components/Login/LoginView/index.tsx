import { CustomView } from "./LoginView.styled";
import React,{ ReactNode } from "react";
import LoginInput from "../Logininput";


interface LoginViewComponentProps {
    children: ReactNode;
  }

function LoginView ({children}:LoginViewComponentProps){
    return(
    <CustomView>
        {children}
    </CustomView>
    )
}

export default LoginView;