import "../styles.css";

const experiences = [
  {
    title: "App Developer",
    company: "Suredataconsulting, Callup247 App",
    period: "Jul 2023 – Dec 2024",
    location: "Remote, Nigeria",
    description: [
      "Designed user flows and ensured alignment with client requirements using Figma.",
      "Developed and published a social networking app for clients and service providers on iOS and Android using Flutter and Supabase.",
      "Delivered the project through iterative client feedback and overcame various technical challenges.",
    ],
  },
  {
    title: "App Development Team Lead",
    company: "Biscuit Beacon",
    period: "Dec 2023 – Dec 2024",
    location: "Remote, USA",
    description: [
      "Led a team of 12 interns to implement over 10 new features and maintain the app across platforms.",
      "Migrated the company website from Wix to Flutter Web.",
      "Implemented critical app features including themes, ads, in-app payments, and Google Cloud cost restrictions.",
      "Collaborated with the CEO and design lead to ideate and execute new features using Trello for project management.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="experience-card opacity-0 translate-y-5"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
          <h3 className="text-xl mb-2">{exp.company}</h3>
          <p className="text-gray-600 mb-4">
            {exp.period} | {exp.location}
          </p>
          <ul className="list-disc pl-5">
            {exp.description.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
