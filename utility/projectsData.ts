import artcollabs from "../public/projectImages/artcollabs.gif"
import myly from "../public/projectImages/myly.gif"
import peopleDotCom from "../public/projectImages/peopledotcom.gif"


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
    techs: ["langchain", "open-source AI models", "python", "autogen", "vue"], 
    description: "Conceptualized and implemented a internal AI-powered management and support tool. Developed the front-end, the machine learning models, and the back-end. Allows managing the company's projects, and to provide general information about them to the developers, performing RAG (Retrieval-Augmented Generation) on the Documents Base and Agents that fetch data from Sources like Jira. It also provides multiple chats with OpenAI's GPT4 and Assistants API.",
  },
  {
    title: "SicherheitNord",
    image: ``,
    techs: ["vue", "quasar", "typescript", "docker", "mysql"],
    description: "Collaboratively developed a comprehensive management tool tailored for a security company. The project encompassed front-end design, backend development, and database integration. This tool efficiently handles personal and event management, streamlining the company's operations.",
  },
  {
    title: "Fynbird",
    image: ``,
    techs: ["vue", "flutter", "docker", "bootstrap", "mysql"],
    description: "Refined a web-based financial management app, and spearheaded its extension into a mobile-responsive platform. Enhancements included dashboards, charts, and facilitating user access across multiple companies. Also bolstered general usability and integrated advanced features.",
  },
  {
    title: "Soft Eggs",
    image: ``,
    techs: ["vue", "quasar", "typescript", "docker", "mysql"],
    description: "Collaboratively developed the front-end of a social media platform bridging entertainment seekers with providers. Responsibilities encompassed UI design, logic implementation, video streaming integration, and payment methods, creating a seamless user experience.",
  },
];
