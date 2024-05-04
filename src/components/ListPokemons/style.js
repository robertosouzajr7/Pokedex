import styled from "styled-components";

export const DivMeusPokemons = styled.div`
  width: 400px;
  display: flex;
  height: 500px;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  background-color: #e83838;
  color: white;
  border-radius: 8px;
  gap: 20px;
  overflow-y: scroll;
  align-items: flex-start;

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
  }
`;
