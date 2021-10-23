import styled from "styled-components";
import { Container } from "./CommonComponents";

const Label = styled.label`
   font-size: 0.5em;
   margin-bottom: 0.5em;
   display: block;
`;

const StyledSelector = styled.select`
   padding: 0.5em;
   border: 2px solid ${(props) => props.theme.primary.main};
   border-radius: 3px;
   margin-bottom: 0.5em;
   width: 100%;
   box-sizing: border-box;
`;

export default function Selector({label,value,onChange,...res}){
    return(
        <Container alignItems="flex-start">
            <Label>{label}</Label>
            <StyledSelector value={value} onChange={onChange} {...res}>
                <option value="">Select user type</option>
                <option value="School">School</option>
                <option value="University">University</option>
                <option value="Employee">Employee</option>
            </StyledSelector>
        </Container>
    )
}