
type ProjectData = {
    name: string;
    description: string;
    image: string;
    link: string;
    gitHub: string;
}


export const projectData: ProjectData[] = [
    {
        name: "PlanIt",
        description: "This was my first collaborative project. It uses Javascript, HTML, and CSS. It is a simple web application that allows users to create and manage their daily tasks. Users can add and delete tasks, as well as mark them as completed or in progress. The application features a user-friendly interface and is designed to help users stay organized and productive.",
        image: "/images/planit.jpg",
        link: "https://riley6639.github.io/PlanIT/",
        gitHub: "https://github.com/Riley6639/PlanIT",
    },
    {
        name: "weather service",
        description: "a weather service that provides weather information for a given location",
        image: "/images/weather.jpg",
        link: "https://week-9-challenge-4.onrender.com/",
        gitHub: "https://github.com/Riley6639/week-9-challenge"
    },
    {
        name: "Galaxy Trade",
        description: "A web application for listing and trading items online. It allows users to create accounts, list items for sale, and browse items available for trade. The application features a user-friendly interface and is designed to facilitate online trading.",
        image: "/images/galaxyTrade.jpg",
        link: "https://galaxy-trade.vercel.app/",
        gitHub: "https://github.com/Petrichor4/GalaxyTrade"
    }
]
