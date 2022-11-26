import styled from "styled-components";

export const Card = styled.div`
  padding: 15px;
  border: 2px solid black;
  border-radius: 6px;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BoxImage = styled.div`
  margin-bottom: 30px;
`;

export const CardTitle = styled.h2`
  margin-bottom: 20px;
`;

export const BoxInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    width: 26px;
    height: 26px;
  }
`;

export const ListDifficulty = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ItemDifficulty = styled.li`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${({ difficulty, children }) => {
    return difficulty === children.toLowerCase() ? "red" : "white";
  }};
`;
