import React from "react";

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { SocialMediaContainer } from "./socialMedia.styles";

import SocialMediaIcon from "../socialMediaIcon/socialMediaIcon";

const media = [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anton-levholm/",
    hoverColor: "#006fa6"
  }
];

const SocialMedia = () =>
  <SocialMediaContainer>
    {media.map((media, index) =>
      <SocialMediaIcon key={index} media={media} />
    )}
  </SocialMediaContainer>

export default SocialMedia;
