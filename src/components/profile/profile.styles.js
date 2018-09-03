import styled from "styled-components";

export const ProfileContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ProfileImage = styled.img`
  border: none;
  border-radius: 50%;
  width: 200px;
  height: auto;
  max-width: 40%;
`;

export const Name = styled.h1`
  font-weight: 700;
  color: #555;
  text-align: center;
  margin-bottom: 3px;
`;

export const Description = styled.h2`
  font-weight: 500;
  color: #999;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
`;
