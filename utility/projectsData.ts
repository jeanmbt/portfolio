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
    image: ``,
    techs: ["local LLMs", "python", "chromaDB", "MCP"],
    description: "Founded the sub-sector 'Bryan' at Brayn.io, where I developed internal and external solutions using LLMs and other types of machine learning Models. This includes setting up, developoing and deploying RAG and agentic applications with autonomous behaviour using local LLMs and leveraging technologies like ChromaDB, MCP, Langgraph, Langchain, Microsoft Autogen, Panel and other state-of-the-art tools.",
  },
  {
    title: "Anita",
    image: ``,
    url: "https://www.anita.legal/",
    techs: ["ChromaDB", "Embeddings", "Langgraph"],
    description: "Solved output quality issues by conceptualizing a system to match embeddings with the most relevant results.",
  },
  {
    title: "TimeIO",
    image: ``,
    url: "",
    techs: ["python", "fastAPI", "vue", "typescript", "postgresSQL"],
    description: "Developed both the frontend and backend of a management tool for sensors and their data for Helmholtz-Centre for Environmental Research - UFZ, at Brayn.io. The project involved creating a user-friendly interface, ensuring seamless integration between the frontend and backend components. This tool enhances the efficiency of sensor management and data analysis.",
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
