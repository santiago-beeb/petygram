import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  color: #fff;
  background: #444;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: inline-block;
  width: 80%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  height: 32px;
  display: inline-block;
  width: 80%;
  margin: auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #06c;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &[disabled] {
    opacity: 0.3;
  }
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  margin: 15px;
`;
export const Parrafo = styled.p`
  padding: 8px 0;
  margin: 8px;
`;
export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
