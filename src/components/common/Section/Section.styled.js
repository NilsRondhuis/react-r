import styled from "@emotion/styled";

export const SectionShared = styled.section`
  padding: ${(props) => props.theme.spacing(10)} 0;

  :nth-of-type(1) {
    background-color: ${(props) => props.theme.colors.purple};
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 28px;
  text-transform: uppercase;
`;
