import { on } from "events";
import { StyledButton } from "./button.styled";

interface Props {
    label : string;
    Color : string;
    BgColor : string;
    onClick : ()=>void;
}

function MyButton ({label, Color, BgColor,onClick}: Props) {
    return (
        <StyledButton style={{color:Color, background: BgColor}} onClick={onClick}>
            {label}
        </StyledButton>
    );
}

export default MyButton;