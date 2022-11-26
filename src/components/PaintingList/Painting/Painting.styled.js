import styled from "@emotion/styled";

export const Card = styled.div`
  padding: 15px;
`;

export const BoxImg = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin-bottom: 20px;

  svg {
    display: block;
    margin-right: 5px;
    width: 24px;
    height: 24px;
    fill: #6767e3;
  }
`;

export const BoldText = styled.span`
  font-size: 21px;
  font-weight: 700;
`;

export const Accessibility = styled.span`
  background-color: ${({ quantity }) => {
    return quantity >= 10 ? "green" : "red";
  }};
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: #74ff74;
  cursor: pointer;
`;
