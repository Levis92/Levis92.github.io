import React from "react";

import { ProfileContainer, ProfileImage, Name, Description } from './profile.styles';

import profileImage from "../../resources/images/profile.jpg";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage src={profileImage} />
      <Name>Anton Levholm</Name>
      <Description>Web developer with a passion for UX</Description>
    </ProfileContainer>
  );
};

export default Profile;
