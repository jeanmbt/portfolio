import { Project } from "../types/projects";
import artcollabs from "../public/projectImg/artcollabs.gif"
import myly from "../public/projectImg/myly.gif"
import peopleDotCom from "../public/projectImg/peopleDotCom.png"
import todo from "../public/projectImg/todo.png"
import whichhours from "../public/projectImg/whichhours.gif"

export  const projects: Project[] = [
  {
    title: "PeopleDotCom",
    img: `${peopleDotCom.src}`,
    techs: ["react", "typescript", "graphql", "mui", "prisma", "apollo", "javascript"],
    description: "Nunc at vestibulum leo. Nam eget urna a ex facilisis molestie. In sagittis ultricies auctor."
  },

  {
    title: "artcollabs",
    img:  `${artcollabs.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Nunc at vestibulum leo. Nam eget urna a ex facilisis molestie. In sagittis ultricies auctor."
    
  },
  {
    title: "React To Do",
    img:  `${todo.src}`,
    techs: ["react", "typescript", "styled components", "javascript"],
    description: "Nunc at vestibulum leo. Nam eget urna a ex facilisis molestie. In sagittis ultricies auctor."
  },
  {
    title: "myly",
    img:  `${myly.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Nunc at vestibulum leo. Nam eget urna a ex facilisis molestie. In sagittis ultricies auctor."
  },
  {
    title: "whichHours",
    img:  `${whichhours.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Nunc at vestibulum leo. Nam eget urna a ex facilisis molestie. In sagittis ultricies auctor."
  },
];