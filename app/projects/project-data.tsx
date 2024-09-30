export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: "AI agent using RAG",
    year: 2024,
    description:
      "Built an AI agent for Tray.ai that answers questions using the product documentation.",
    url: "https://tray.ai/documentation/",
    imageUrl: "",
  },
  {
    title: "",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
