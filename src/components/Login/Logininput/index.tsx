import { StyledLogin } from "./LoginInput.styled";

interface Props {
    type:string;
    placeholder:string;
    onChange: (e:any)=>void;
}

function LoginInput({type,placeholder,onChange}:Props) {
    return(
        <StyledLogin type={type} placeholder={placeholder} onChange={onChange}></StyledLogin>
    )
}

export default LoginInput;