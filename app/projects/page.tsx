import ProjectCard from "@/components/projectCard";
import { projectData } from "../Data/projectData";

export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    gitHub={project.gitHub}
                />
            ))}
        </div>
    );
}