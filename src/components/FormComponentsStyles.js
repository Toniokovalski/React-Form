import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;

export const MainTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 3em;
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  color: ${props => props.invalid ? 'black' : 'red'};
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 20px;
  
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: none;
  }
  &:enabled {
    opacity: 1.0;
  }
`

export const ResetButton = styled.button`
  background-color: #d71f47;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const StyledAlert = styled.div`
  background-color: #6a915a;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 2em;
  line-height: 2;
  margin: 0;
  text-align: center;
  display: ${props => props.hidden ? 'block' : 'none'};
`
export const StyledUser = styled.div`
  color: green;
  display: ${props => props.hidden ? 'block' : 'none'};
  margin: 20px 0;
  font-size: 1.25em;
  font-weight: bold;
  
  div {
    margin-bottom: 10px;
  }
`