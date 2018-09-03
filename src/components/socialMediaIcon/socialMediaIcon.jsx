import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconLink } from "./socialMediaIcon.styles";

const SocialMediaIcon = ({media: {icon, url, color = "#888", hoverColor = "#999"}}) =>
  <IconLink href={url} target="_blank" hoverColor={hoverColor}>
    <FontAwesomeIcon icon={icon} size="2x" color={color} />
  </IconLink>

export default SocialMediaIcon;
