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
    { skillSet: "MongoDB" },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/bchiang7",
      icon: <GithubIcon />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/bchiang7",
      icon: <LinkIcon />,
    },
    {
      name: "Codepen",
      url: "https://codepen.io/bchiang7",
      icon: <CodePenIcon />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bchiang7",
      icon: <InstagramIcon />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/bchiang7",
      icon: <TwitterIcon />,
    },
  ],
  navLinks: [
    {
      name: "About",
      url: "/#about",
    },

    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  datas: [
    {
      title: "Twitch Clone",
      description: "Peru",
      tech: ["React","Express"],
      image:
        "/twitch-clone.png",
    },
    {
      title: "Sign Up & Log in Form",
      description: "France",
      tech: ["React","Redux-Form"],
      image:
        "/redux-form.png",
    },
    {
      title: "Mimisa Rocks",
      description: "Australia",
      tech: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      title: "Four",
      description: "Australia",
      tech: "A piece of heaven",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      title: "Five",
      description: "Australia",
      tech: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
  ],
};
