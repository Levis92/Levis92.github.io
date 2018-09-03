import React from "react";

import { ProfileContainer, ProfileImage, Name, Description } from './profile.styles';

import SocialMedia from "../socialMedia/socialMedia";

import profileImage from "../../resources/images/profile.jpg";

const Profile = () =>
  <ProfileContainer>
    <ProfileImage src={profileImage} />
    <Name>Anton Levholm</Name>
    <Description>Web developer with a passion for UX</Description>
    <SocialMedia />
  </ProfileContainer>

export default Profile;
