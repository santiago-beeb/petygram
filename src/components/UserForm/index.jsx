import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import {
  ButtonContainer,
  Error,
  Parrafo,
  Title,
  Form,
  Input,
} from "./styles";
import { SubmitButton } from "../SubmitButton";

export const UserForm = ({
  onSubmit,
  title,
  mutateAction,
  manager,
  errorMessage,
  p,
}) => {
  const email = useInputValue("");
  const password = useInputValue("");
  const { loading, error } = manager;

  const handleSubmit = (e) => {
    e.preventDefault();

    mutateAction({
      variables: {
        input: {
          email: email.value,
          password: password.value,
        },
      },
    }).then(({ data }) => {
      onSubmit(data);
    });
  };
  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} placeholder="Email" {...email} required />
        <Input
          disabled={loading}
          type="password"
          placeholder="Password"
          required
          {...password}
        />
        <ButtonContainer>
          <SubmitButton disabled={loading} type="submit">
            {title}
          </SubmitButton>
          {error && <Error>{errorMessage}</Error>}
          <Parrafo>{p}</Parrafo>
        </ButtonContainer>
      </Form>
    </>
  );
};
