import styled from "styled-components";

export const CaixaInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;

  & input {
    border: none;
    background-color: #d9d9d9;
    height: 71px;
    width: 365px;
    border-radius: 4px;
  }

  & ::placeholder {
    padding-left: 10px;
    font-weight: bold;
    font-size: 22px;
  }

  & button {
    width: 250.88px;
    height: 62.39px;
    background: #e83838;
    border-radius: 6.49941px;
    border: none;
  }

  & button:hover {
    width: 250.88px;
    height: 62.39px;
    background: #1e1e1e;
    border-radius: 8px;
    border: none;
    color: white;
  }
`;

export const ContainerGlobal = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;
`;

export const DivMeusPokemons = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  gap: 20px;
  overflow-y: auto;

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
  }
`;
