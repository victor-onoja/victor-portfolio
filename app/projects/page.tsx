import "../styles.css";

const projects = [
  {
    title: "Coauthors",
    description:
      "Developed a collaborative leisure writing platform where all literature is copyrighted and protected, enabling seamless contributions.",
    technologies: "Flask, Vanilla.js",
  },
  {
    title: "Web3 Afrika Hackathon Winner",
    description:
      "Created a blockchain-powered chess variant that uses Ethereum stakes with innovative gameplay mechanics.",
    technologies: "Next.js",
  },
  {
    title: "CoFounderAI",
    description:
      "Built an AI-powered app helping entrepreneurs streamline idea execution to success.",
    technologies: "Flutter, Firebase, Gemini API",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Personal Projects & Achievements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card opacity-0 scale-90`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <p className="text-sm text-gray-600">
              Technologies: {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
