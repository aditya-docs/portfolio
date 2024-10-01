export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "AI agent using RAG",
    year: 2024,
    description:
      "I developed an AI agent using Retrieval-Augmented Generation (RAG) to streamline product support by answering queries based on documentation from multiple sources, including Contentful, GitHub, and Notion. Key contributions include:<ul><li>Building a Node.js API layer to crawl the knowledge source and return data in a uniform markdown format.</li><li>Building the workflow pipeline that calls the API, generates content chunks using LangChain, converts them into embeddings using AWS Bedrock and lastly stores the embeddings into a Vector Database (Pinecone).</li><li>Building an API endpoint to retrieve, augment, and stream AI-generated answers in real-time to the frontend.</li></ul>The solution uses AWS Bedrock for both embedding creation and answer generation.",
    url: "https://tray.ai/documentation/",
    imageUrl: "/projects/ai-agent.png",
  },
  {
    title: "Developer Portal",
    year: 2023,
    description:
      "I built the developer portal for Tray.ai from scratch in just 1 month as a single person dev team. It was built using Redocly allowing writers to write content in plain Markdown files. Key contributions include:<ul><li>Designing and developing the landing page for the portal.</li><li>Creating comprehensive OpenAPI specifications for all the Tray.io APIs.</li><li>Building essential developer tools to facilitate onboarding of API customers.</li><li>Developing custom components using React to enhance the functionality of the portal.</li><li>Implementing an automated pipeline to populate release notes from the product team.</li></ul>This project provided a centralized resource for Tray developers to access API documentation, tools, and updates, significantly improving the developer experience.",
    url: "https://developer.tray.ai/",
    imageUrl: "/projects/dev-portal.png",
  },
];
