import React, { useContext } from "react";
import { UserForm } from "../components/UserForm";
import { GraphqlMutationContainer } from "../containers/graphqlMutationContainer";
import { gql } from "@apollo/client";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const RegisterComponent = GraphqlMutationContainer(UserForm, REGISTER);
const LoginComponent = GraphqlMutationContainer(UserForm, LOGIN);

function NotRegisterUser(props) {
  const navigate = useNavigate();
  const { activateAuth } = useContext(Context);

  const handleOnSubmit = (data) => {
    activateAuth(data);
    navigate("/");
  };

  return (
    <>
      <RegisterComponent
        onSubmit={handleOnSubmit}
        title={"Registrarse"}
        errorMessage={"El usuario ya existe o hay algun problema"}
        p="¿Ya tienes una cuenta? Inicia Sesion"
      ></RegisterComponent>
      <LoginComponent
        onSubmit={handleOnSubmit}
        title={"Iniciar sesión"}
        errorMessage={"Hubo un problema al autenticar el usuario"}
        p="¿Aún no tienes una cuenta? Registrate"
      ></LoginComponent>
    </>
  );
}

export { NotRegisterUser };
