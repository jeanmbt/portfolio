import bryan from "../public/projectImages/bryan.png";
import fynbird from "../public/projectImages/fynbird.png";

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
    title: "Bryan",
    image: `${bryan.src}`,
    techs: ["langchain", "local LLMs", "python", "autogen",], 
    description: "Conceptualized and implemented a internal AI-powered management and support tool for Brayn.io using cutting-edge technologies. Developed the front-end, the machine learning models back-end and API back-ends. Allows managing the company's projects, and to provide general information about them to the developers, performing RAG (Retrieval-Augmented Generation) and Advanced Function-Calling on the Documents Base and Agents that fetch data from Sources like Confluence, Jira and GitLab. It also provides multiple chats with OpenAI's GPT4 and Assistants API.",
  },
  {
    title: "Sicherheit-Nord",
    image: ``,
    techs: ["vue", "quasar", "typescript", "docker", "mysql"],
    description: "Collaboratively developed a comprehensive management tool tailored for a security company. The project encompassed front-end design, backend development, and database integration. This tool efficiently handles personal and event management, streamlining the company's operations. For Brayn.io.",
  },
  {
    title: "Fynbird",
    image: `${fynbird.src}`,
    url: "https://fynbird.io",
    techs: ["vue", "flutter", "docker", "bootstrap", "mysql"],
    description: "Refined a web-based financial management app, and spearheaded its extension into a mobile-responsive platform. Enhancements included dashboards, charts, and facilitating user access across multiple companies. Also bolstered general usability and integrated advanced features. For Brayn.io.",
  },
  {
    title: "Soft Egg",
    image: ``,
    techs: ["vue", "quasar", "typescript", "docker", "mysql"],
    description: "Collaboratively developed the front-end of a social media platform bridging entertainment seekers with providers. Responsibilities encompassed UI design, logic implementation, video streaming integration, and payment methods, creating a seamless user experience for Brayn.io.",
  },
  { 
    title: "MyWay",
    image: ``,
    techs: ["vue", "quasar", "pinia", "typescript", "docker"],
    description: "Collaborated on the development of a tool facilitating international job seekers in Germany. Responsible for implementing authentication, captchas, and various front-end features, for Brayn.io.",
  }
];
