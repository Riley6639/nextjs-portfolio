
import Image from 'next/image';

interface ProjectCardProps {
    name: string;
    stack: "full" | "frontend" | "backend";
    description: string;
    image: string;
    link: string;
    gitHub: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, stack, description, image, link, gitHub }) => {
    return (
        <div className="
            flex 
            flex-col 
            items-center 
            bg-gradient-to-t from-pink-600 to-indigo-900
            text-white 
            p-6 
            space-y-4
            rounded-lg 
            shadow-md 
            hover:shadow-xl 
            hover:scale-105 
            transition-transform 
            duration-300 
            ease-in-out
        ">
            <h2 className="p-4 bg-slate-500 rounded-lg text-5x1">{name}</h2>
            <Image 
                src={image} 
                alt={`${name} screenshot`} 
                width={270} 
                height={200}
                className="rounded-lg rounded-full" />
            <p className="
                bg-gradient-to-t from-cyan-900 to-cyan-600 
                p-6 
                rounded-lg 
                shadow-md
            ">
                {description}
            </p>
            <div
                className="
                text-blue-900  
                underline 
                font-bold
                p-6
                space-x-4
            ">
                <a
                    href={link}
                    className="hover:text-blue-200"
                    target="_blank">
                        Visit
                </a>
                <a
                    href={gitHub}
                    className="hover:text-blue-200"
                    target="_blank">
                        GitHub
                </a>
            </div>

            <p className="text-sm text-gray-400 italic">Stack: {stack}</p>
        </div>
    );
}

export default ProjectCard;