import TextBox from "@/components/textBox";
import ProjectCard from "@/components/projectCard";
import { projectData } from "@/app/data/projectData";

export default function Home() {

  const categorizedProjects = {
    full: projectData.filter((project) => project.stack === "full"),
    frontend: projectData.filter((project) => project.stack === "frontend"),
    backend: projectData.filter((project) => project.stack === "backend"),
  };

  return (
    <div className="p-6 space-y-6">
      {/* Project Cards */}
      <h2 className="text-xl font-semibold mt-6 text-white">Full Stack Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {categorizedProjects.full.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 text-white">Frontend Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {categorizedProjects.frontend.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 text-white">Backend Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {categorizedProjects.backend.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Text Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TextBox background="slate">
          <Section title="Goals">
            <p>- Become a proficient full-stack software developer, delivering high-quality solutions.</p>
            <p>- Bring fresh ideas, innovative perspectives, and valuable experience to the team.</p>
            <p>- Collaborate effectively to achieve the best possible outcomes and drive team success.</p>
            <p>- Build applications that automate tasks and improve user experiences.</p>
            <p>- Continuously enhance my skills and knowledge to stay at the forefront of technology.</p>
          </Section>
        </TextBox>

        <TextBox background="cyan">
          <Section title="Passions">
            <p>- I&apos;m driven by the pursuit of innovative solutions that improve how things are done.</p>
            <p>- I value efficiency and adaptability, ensuring flexibility while optimizing workflows.</p>
            <p>- Collaboration is key to success; I thrive on working with others to achieve exceptional results.</p>
            <p>- Problem-solving excites me—I&apos;m passionate about tackling challenges and finding creative solutions.</p>
            <p>- I believe in the power of technology to transform lives and drive progress.</p>
          </Section>
        </TextBox>

        <TextBox layout="wide" background="sky">
          <Section title="Skills">
            <p>- I’m a reliable and hardworking individual who is committed to getting the job done.</p>
            <p>- Once I set my mind to a task, I remain dedicated until it&apos;s completed to the highest standard.</p>
            <p>- I excel in teamwork, fostering collaboration to achieve shared goals.</p>
            <p>- I’m comfortable taking on leadership roles when the situation calls for it.</p>
            <p>- I thrive under pressure, learning and adapting quickly to new challenges.</p>
            <p>- Attention to detail is one of my core strengths, ensuring precision in every task.</p>
            <p>- I’m adept at maintaining a structured routine, which helps me stay organized and focused.</p>
          </Section>
        </TextBox>
      </div>


    </div>
  );
}

/* Section Reusable Component */
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="text-white">
    <h1 className="text-3xl font-semibold mb-4 underline">{title}</h1>
    <div className="text-lg space-y-2">{children}</div>
  </div>
);
