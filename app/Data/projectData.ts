
type ProjectData = {
    name: string;
    stack: "full" | "frontend" | "backend";
    description: string;
    image: string;
    link: string;
    gitHub: string;
}


export const projectData: ProjectData[] = [
    {
        name: "PlanIt",
        stack: "frontend",
        description: "This was my first collaborative project. It uses Javascript, HTML, and CSS. It is a simple web application that allows users to create and manage their daily tasks. Users can add and delete tasks, as well as mark them as completed or in progress. The application features a user-friendly interface and is designed to help users stay organized and productive.",
        image: "/images/planit.jpg",
        link: "https://riley6639.github.io/PlanIT/",
        gitHub: "https://github.com/Riley6639/PlanIT",
    },
    {
        name: "weather service",
        stack: "full",
        description: "a weather service that provides weather information for a given location",
        image: "/images/weather.jpg",
        link: "https://week-9-challenge-4.onrender.com/",
        gitHub: "https://github.com/Riley6639/week-9-challenge"
    },
    {
        name: "Galaxy Trade",
        stack: "full",
        description: "A web application for listing and trading items online. It allows users to create accounts, list items for sale, and browse items available for trade. The application features a user-friendly interface and is designed to facilitate online trading.",
        image: "/images/galaxy-trade.jpg",
        link: "https://galaxy-trade.vercel.app/",
        gitHub: "https://github.com/Petrichor4/GalaxyTrade"
    },
    {
        name: "Next Page",
        stack: "full",
        description: "Next Page is for book-lovers alike. It allows user to search for books, save books, and even get book recommendations for their next read.",
        image: "/images/next-page.jpg",
        link: "https://next-page-t17p.onrender.com/",
        gitHub: "https://github.com/cernxavi/Next-Page?tab=readme-ov-file"
    },
    {
        name: "Candidate-search",
        stack: "frontend",
        description: "This app is a candidate search website that uses an API to display different gitHub users. The user has the option to save the candidate or move on to a new one. On another page the user can see a list of the saved candidates.",
        image: "/images/candidate-search.jpg",
        link: "https://candidate-search-1-y7lt.onrender.com/",
        gitHub: "https://github.com/Riley6639/candidate-search"
    },
    {
        name: "Social Network API",
        stack: "backend",
        description: "This is a REST API that is for an application that displays user data. The database is seeded with sample data, and users can post, put, get, or delete user profiles, or user thoughts. Since this is just a backend application I have linked a video demonstrating the functionality of the API. The video shows how to create a user, add a thought, and delete a user.",
        image: "/images/social-network-api.jpg",
        link: "https://app.screencastify.com/v3/watch/knXPuoThcE03OWKCMYFR",
        gitHub: "https://github.com/Riley6639/social-network-api"
    }
]
