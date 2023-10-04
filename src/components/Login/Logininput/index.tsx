import { StyledLogin } from "./LoginInput.styled";

interface Props {
    type:string;
    placeholder:string;
    value: string;
    onChange: (e:any)=>void;
}

function LoginInput({type,placeholder,value,onChange}:Props) {
    return(
        <StyledLogin type={type} placeholder={placeholder} value={value} onChange={onChange}></StyledLogin>
    )
}

export default LoginInput;