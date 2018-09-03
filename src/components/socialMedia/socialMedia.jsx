import React from "react";

import { faLinkedin, faGithub, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';

import { SocialMediaContainer } from "./socialMedia.styles";

import SocialMediaIcon from "../socialMediaIcon/socialMediaIcon";

const media = [
  {
    icon: faGithub,
    url: "https://github.com/Levis92",
    hoverColor: "#24292e"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anton-levholm/",
    hoverColor: "#006fa6"
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/ALevholm",
    hoverColor: "#1da1f2"
  },
  {
    icon: faDribbble,
    url: "https://dribbble.com/levholm",
    hoverColor: "#ea4c89"
  }
];

const SocialMedia = () =>
  <SocialMediaContainer>
    {media.map((media, index) =>
      <SocialMediaIcon key={index} media={media} />
    )}
  </SocialMediaContainer>

export default SocialMedia;
