export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string | null;
    tags: string[];
    liveUrl?: string | null;
    githubUrl?: string | null;
    githubBackendUrl?: string | null;
    technologies: string[];
}

const BASE_URL = '/my-page2.0';

export const projects: Project[] = [
    {
        id: 'pixel-time-tracker',
        title: 'Pixel Time Tracker',
        description: 'A retro-styled time tracking application with pixel art aesthetics.',
        fullDescription: 'I created this time tracker to help manage my tasks with a custom pixel art interface. Unlike traditional Pomodoro apps, this works as a stopwatch — perfect for tracking real work sessions without time pressure. Features include custom multi-label support, session history with statistics, and customizable themes.',
        image: `${BASE_URL}/projects/pixel-tracker.webp`,
        tags: ['code', 'design'],
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'fullstack'],
        liveUrl: 'https://krovostcora.github.io/pixel-time-tracker/',
        githubUrl: 'https://github.com/krovostcora/pixel-time-tracker',
    },
    {
        id: 'vicatomaps',
        title: 'Vicatomaps',
        description: 'Mobile navigation app for multi-country road trips in Europe with cost estimation.',
        fullDescription: 'Vicatomaps shows not only the route, time, and distance, but also the estimated total cost of the trip, including fuel and tolls. Developed as a bachelor’s thesis project, it provides REST APIs for route calculation and fuel price integration.',
        image: `${BASE_URL}/projects/vicatomaps.webp`,
        tags: ['mobile', 'research', 'code', 'thesis', 'fullstack'],
        technologies: ['Dart', 'Flutter', 'REST API'],
        githubUrl: null,
    },
    {
        id: 'pollen-meteo',
        title: 'Pollen & Meteo',
        description: 'Web application providing information about pollen levels and weather conditions.',
        fullDescription: 'University internship project featuring real-world data visualizations. Responsible for front-end development using React/Redux and integrating Chart.js for data insights.',
        image: `${BASE_URL}/projects/pollen.webp`,
        tags: ['code', 'design', 'internship', 'fullstack'],
        liveUrl: 'https://krovostcora.github.io/pollen-meteo/',
        githubUrl: 'https://github.com/krovostcora/pollen-meteo',
        technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Chart.js'],
    },
    {
        id: 'storybridge',
        title: 'Storybridge',
        description: 'StoryBridge is a youth-led initiative bringing young writers and readers together through storytelling, literacy projects and community connection..',
        fullDescription: 'In my role as a Volunteer Designer at StoryBridge, I focused on creating visually compelling layout designs in Figma to support a youth-led initiative dedicated to empowering young writers. \n' +
            '\n' +
            'By collaborating with a passionate team, I contributed to the project that foster community connection and storytelling. My work aimed to enhance the platform\'s user experience and encourage creativity among teens.',
        image: `${BASE_URL}/projects/storybridge.webp`,
        tags: ['design', 'volunteering'],
        liveUrl: 'https://story-bridge-blog.vercel.app/about',
        technologies: ['Figma', 'Responsive Web Design'],
    },
    {
        id: 'mini-lead-tracker',
        title: 'Mini Lead Tracker',
        description: 'A mini-CRM test task for managing leads with comments, search, filters, and pagination.',
        fullDescription: 'This project was completed as a Middle FullStack Developer test task. It is a mini-CRM where users can create, edit, and delete leads, update statuses, search by name/email/company, filter and paginate records, and add comments on lead detail pages. It was also my first hands-on experience working with an ORM/ODM approach using Mongoose.',
        image: `${BASE_URL}/projects/mini-lead-tracker.webp`,
        tags: ['code', 'fullstack', 'test-task'],
        githubUrl: 'https://github.com/krovostcora/mini-lead-tracker',
        technologies: ['Next.js (App Router)', 'NestJS', 'MongoDB', 'Mongoose', 'TypeScript', 'Docker'],
    },
    {
        id: 'cronostera',
        title: 'Cronostera',
        description: 'Event management mobile application for browsing and creating events.',
        fullDescription: 'Mobile app developed during internship using React Native (iOS/Android) and a Node.js/SQLite backend to handle real-time event data.',
        image: `${BASE_URL}/projects/cronostera.webp`,
        tags: ['mobile', 'code', 'internship'],
        githubUrl: '#',
        githubBackendUrl: '#',
        technologies: ['React Native', 'Node.js', 'Express', 'SQLite'],
    },
    {
        id: 'safe-internet',
        title: 'Safe Internet',
        description: 'Educational manual about online scams for different age groups.',
        fullDescription: 'My first large-scale project created for Web classes. The goal was to create a simple manual for people of different ages who are either just starting to use the internet or are easily tricked by scams.',
        image: `${BASE_URL}/projects/safe-internet.webp`,
        tags: ['code'],
        liveUrl: '#',
        githubUrl: '#',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 'recommend',
        title: 'Recommend',
        description: 'Personal recommendation system for tracking movies and books.',
        fullDescription: 'HCI class project focused on user-friendly interface. Includes Google Auth via Firebase and a personal rating system for tracking media.',
        image: `${BASE_URL}/projects/recommend.webp`,
        tags: ['code', 'design'],
        liveUrl: 'https://krovostcora.github.io/recommendations/',
        githubUrl: '#',
        technologies: ['React', 'Firebase', 'Figma'],
    }
];