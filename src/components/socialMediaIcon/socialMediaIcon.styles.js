import styled from "styled-components";

export const IconLink = styled.a`
  text-decoration: none;

  & > svg:hover {
    color: ${props => props.hoverColor}
  }
`;
