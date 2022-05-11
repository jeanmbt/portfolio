
import artcollabs from "../public/projectImg/artcollabs.gif"
import myly from "../public/projectImg/myly.gif"
import peopleDotCom from "../public/projectImg/peopleDotCom.png"
import todo from "../public/projectImg/todo.png"
import whichhours from "../public/projectImg/whichhours.gif"

export interface Project {
  title: string;
  img: string;
  techs: string[];
  url?: string,
  repoUrl?: string,
  description?: string;
}

export  const projectsData: Project[] = [
  {
    title: "PeopleDotCom (CHANGE PICTURE)",
    img: `${peopleDotCom.src}`,
    techs: ["nextjs", "react", "typescript", "graphql", "mui", "prisma", "apollo", "javascript"],
    description: "NextJs full-stack application using Apollo, Prisma, GraphQL for the backend and data fetching. Responsive, accessible, with lazy load, sorting."
  },

  {
    title: "artcollabs",
    img:  `${artcollabs.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Full-stack application with authentication, authorization with multiple dynamic pages for artists to interact and collaborate"
    
  },
  {
    title: "React To Do",
    img:  `${todo.src}`,
    techs: ["react", "typescript", "styled components", "javascript"],
    description: `Simple front-end "To-Do" React application. With themable design and local data storage.`
  },
  {
    title: "myly",
    img:  `${myly.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Full-stack application for musicians to store, rate and share music lyrics."
  },
  {
    title: "whichHours",
    img:  `${whichhours.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Full-stack application for storing and displaying companies opening times and other relevant information."
  },
];