import {useState, useEffect} from "react";
import {
    FormWrapper,
    MainTitle,
    StyledForm,
    StyledInput,
    StyledButton,
    ResetButton,
    StyledAlert,
    StyledLabel
} from './FormComponentsStyles';
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if (name.length >= 3 && email.length >= 3 && mobileNumber.length >= 3) setEnabled(true)
        else setEnabled(false)
    }, [email.length, enabled, mobileNumber.length, name.length])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("User created successfully")
        try {
            const res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    mobileNumber: mobileNumber,
                }),
            })
              .then((response) => {
                if (response.status !== 200) {
                    setMessage("Some error occurred");
                    throw new Error(response.statusText);
                }
                console.log('test response', response.json())
                return response.json();
            }).finally(() => {
                  setName("");
                  setEmail("");
                  setMobileNumber("");
              });
            const resJson = await res.json();
            console.log('response', resJson)
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
          <StyledAlert hidden={message} className="message">{message}</StyledAlert>
          {/*{message && <StyledAlert className="message">{message ? message : null}</StyledAlert> }*/}
      </FormWrapper>
    );
}

export default Form;
