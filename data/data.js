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
      screenshot: "/twitchlogo.png",
      description:
        "Complete Twitch Clone, React for Front-end, Express Back for Back-end, Google Authentication & JWT Implemented. Log-in and Sign-up Form added.",
      tech: ["React", "Express"],
      image: "/twitch-clone.png",
    },
    {
      title: "Sign Up & Log in Form",
      screenshot: "/reduxform.png",
      description: "Log-in, and Sign-up Form validation by using Redux-form",
      tech: ["React", "Redux-Form", "Express"],
      image: "/redux-form.png",
    },
    {
      title: "OAuth Strategies",
      screenshot: "/passport.png",
      description:
        "Implemented 7 Passport Strategies such as Google, Facebook, Amazon, Twitter, Instagram, Github, and Spotify",
      tech: ["React", "Express"],
      image: "/oauth.png",
    },
    {
      title: "Email Inbox",
      screenshot: "/emailInbox.png",

      description:
        "Imitated real email-inbox application by using React-Table. Debounce search, Pagination, Filter, and Sorting",
      tech: ["React", "React-Table", "Express"],
      image: "/email.png",
    },
    {
      title: "COVID-19 Tracker",
      screenshot: "/covid.png",
      description: "Real time Covid-19 tracker Application with ChartJS ",
      tech: ["Javascript", "React", "ChartJS"],
      image: "/corona.png",
    },
  ],
};
