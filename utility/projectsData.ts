
import artcollabs from "../public/projectImages/artcollabs.gif"
import myly from "../public/projectImages/myly.gif"
import peopleDotCom from "../public/projectImages/peopleDotCom.gif"
import todo from "../public/projectImages/todo.png"
import whichhours from "../public/projectImages/whichhours.gif"

export interface Project {
  title: string;
  image: string;
  techs: string[];
  url?: string,
  repoUrl?: string,
  description?: string;
}

export  const projectsData: Project[] = [
  {
    title: "PeopleDotCom",
    image: `${peopleDotCom.src}`,
    techs: ["nextjs", "react", "typescript", "graphql", "mui", "prisma", "apollo"],
    description: "NextJs full-stack application using Apollo, Prisma, GraphQL for the backend and data fetching. Responsive, accessible, with lazy load, sorting.",
    repoUrl: "https://github.com/jeanmbt/peopledotcomof",
    url: "https://peopledotcom.vercel.app/"
  },
  {
    title: "artcollabs",
    image:  `${artcollabs.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Full-stack application with authentication, authorization with multiple dynamic pages for artists to interact and collaborate",
    repoUrl: "https://github.com/jeanmbt/artcollabs_local",
    url: "https://art-collabs.herokuapp.com/"
  },
  {
    title: "React To Do",
    image:  `${todo.src}`,
    techs: ["react", "typescript", "styled components", "javascript"],
    description: `Simple front-end "To-Do" React application. With themable design and local data storage.`,
    repoUrl: "https://github.com/jeanmbt/peopledotcomof",
    url: "https://art-collabs.herokuapp.com/"
  },
  {
    title: "myly",
    image:  `${myly.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Full-stack application for musicians to store, rate and share music lyrics.",
    repoUrl: "https://github.com/jeanmbt/myly",
    url: "https://peopledotcom.vercel.app/"
  },
  {
    title: "whichHours",
    image:  `${whichhours.src}`,
    techs: ["rails", "sass", "postgreSQL", "javascript"],
    description: "Full-stack application for storing and displaying companies opening times and other relevant information.",
    repoUrl: "https://github.com/jeanmbt/whichtimes",
    url: "https://whichhours.herokuapp.com/"
  },
];