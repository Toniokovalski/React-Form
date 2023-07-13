import {useState, useEffect} from "react";
import {
    FormWrapper,
    MainTitle,
    StyledForm,
    StyledInput,
    StyledButton,
    ResetButton,
    StyledAlert,
    StyledLabel,
    StyledUser
} from './FormComponentsStyles';
import axios from "axios";
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [enabled, setEnabled] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        if (name.length >= 3 && email.length >= 3 && mobileNumber.length >= 3) setEnabled(true)
        else setEnabled(false)
    }, [email.length, enabled, mobileNumber.length, name.length])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("User created successfully")
        try {
            const { data } = await axios.get(
              "https://jsonplaceholder.typicode.com/users/1"
            ).finally(() => {
                setName("");
                setEmail("");
                setMobileNumber("");
            });
            setUser(data)
        } catch (err) {
            console.log(err);
        }
    };

    const resetForm = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("");
    }

    return (
      <FormWrapper>
          <MainTitle>This is testing project</MainTitle>
          <StyledForm onSubmit={handleSubmit}>
              <StyledLabel htmlFor={"name"}>Name:</StyledLabel>
              <StyledInput
                id={"name"}
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                invalid={name.length >= 3}
              />
              <StyledLabel htmlFor={"email"}>Email:</StyledLabel>
              <StyledInput
                id={"email"}
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                invalid={email.length >= 3}
              />
              <StyledLabel htmlFor={"phone"}>Mobile Number:</StyledLabel>
              <StyledInput
                id={"phone"}
                type="tel"
                value={mobileNumber}
                placeholder="Mobile Number"
                onChange={(e) => setMobileNumber(e.target.value)}
                invalid={mobileNumber.length >= 3}
              />

              <StyledButton type="submit" data-testid={"submit"} disabled={!enabled}>Create</StyledButton>
              <ResetButton type="reset" data-testid={"reset-button"} onClick={resetForm}>Reset</ResetButton>
          </StyledForm>
          <StyledAlert hidden={message}>{message}</StyledAlert>

          <StyledUser hidden={user}>
              <div>{user.name}</div>
              <div>{user.phone}</div>
          </StyledUser>
      </FormWrapper>
    );
}

export default Form;
