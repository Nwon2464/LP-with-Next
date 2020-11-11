import React from "react";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as CodePenIcon } from "./icons/codepen.svg";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";
import { ReactComponent as LinkIcon } from "./icons/link.svg";

module.exports = {
  skills: [
    { skillSet: "Javascript (ES6+)" },
    { skillSet: "HTML / CSS " },
    { skillSet: "React, Redux" },
    { skillSet: "Vue" },
    { skillSet: "Node Express" },
    { skillSet: "MongoDB" }
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/bchiang7",
      icon: <GithubIcon />
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/bchiang7",
      icon: <LinkIcon />
    },
    {
      name: "Codepen",
      url: "https://codepen.io/bchiang7",
      icon: <CodePenIcon />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bchiang7",
      icon: <InstagramIcon />
    },
    {
      name: "Twitter",
      url: "https://twitter.com/bchiang7",
      icon: <TwitterIcon />
    }
  ],
  navLinks: [
    {
      name: "About",
      url: "/#about"
    },
    {
      name: "Experience",
      url: "/#jobs"
    },
    {
      name: "Work",
      url: "/#projects"
    },
    {
      name: "Contact",
      url: "/#contact"
    }
  ]
};
