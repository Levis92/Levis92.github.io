import styled from "styled-components";

export const IconLink = styled.a`
  text-decoration: none;

  & > svg {
    margin: 3px;

    &:hover {
      color: ${props => props.hoverColor}
    }
  }
`;
