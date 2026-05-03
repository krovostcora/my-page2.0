// src/data/projects.ts

export interface MultilangText {
    en: string;
    uk: string;
    es: string;
}

export interface Project {
    id: string;
    title: MultilangText;
    description: MultilangText;
    fullDescription: MultilangText;
    image: ImageMetadata | null;
    tags: string[];
    liveUrl?: string | null;
    githubUrl?: string | null;
    githubBackendUrl?: string | null;
    technologies: string[];
}

import pixelImg from "../assets/projects/pixel-tracker.webp";
import vicaImg from "../assets/projects/vicatomaps.webp";
import pollenImg from "../assets/projects/pollen.webp";
import storyImg from "../assets/projects/storybridge.webp";
import leadImg from "../assets/projects/mini-lead-tracker.webp";
import cronoImg from "../assets/projects/cronostera.webp";
import safeImg from "../assets/projects/safe-internet.webp";
import recImg from "../assets/projects/recommend.webp";


export const projects: Project[] = [
    {
        id: 'pixel-time-tracker',
        title: {
            en: 'Pixel Time Tracker',
            uk: 'Піксельний трекер часу',
            es: 'Rastreador de tiempo Pixel'
        },
        description: {
            en: 'A retro-styled time tracking application with pixel art aesthetics.',
            uk: 'Ретро-додаток для відстеження часу з естетикою піксель-арту.',
            es: 'Una aplicación de seguimiento de tiempo con estilo retro y estética pixel art.'
        },
        fullDescription: {
            en: 'I created this time tracker to help manage my tasks with a custom pixel art interface. Unlike traditional Pomodoro apps, this works as a stopwatch — perfect for tracking real work sessions without time pressure. Features include custom multi-label support, session history with statistics, and customizable themes.',
            uk: 'Я створила цей трекер часу, щоб допомогти керувати своїми завданнями за допомогою кастомного інтерфейсу в стилі піксель-арт. На відміну від традиційних додатків Pomodoro, він працює як секундомір — ідеально підходить для відстеження реальних робочих сесій без часового тиску. Функції включають підтримку кількох міток, історію сесій зі статистикою та теми, що налаштовуються.',
            es: 'Creé este rastreador de tiempo para ayudar a gestionar mis tareas con una interfaz personalizada de pixel art. A diferencia de las aplicaciones Pomodoro tradicionales, funciona como un cronómetro, perfecto para rastrear sesiones de trabajo reales sin presión de tiempo. Las características incluyen soporte para múltiples etiquetas, historial de sesiones con estadísticas y temas personalizables.'
        },
        image: pixelImg,
        tags: ['code', 'design'],
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'fullstack'],
        liveUrl: 'https://krovostcora.github.io/pixel-time-tracker/',
        githubUrl: 'https://github.com/krovostcora/pixel-time-tracker',
    },
    {
        id: 'vicatomaps',
        title: {
            en: 'Vicatomaps',
            uk: 'Vicatomaps',
            es: 'Vicatomaps'
        },
        description: {
            en: 'Mobile navigation app for multi-country road trips in Europe with cost estimation.',
            uk: 'Мобільний навігаційний додаток для подорожей Європою з розрахунком вартості.',
            es: 'App de navegación para viajes por Europa con estimación de costes.'
        },
        fullDescription: {
            en: 'Vicatomaps shows not only the route, time, and distance, but also the estimated total cost of the trip, including fuel and tolls. Developed as a bachelor’s thesis project, it provides REST APIs for route calculation and fuel price integration.',
            uk: 'Vicatomaps показує не лише маршрут, час та відстань, а й орієнтовну загальну вартість поїздки, включаючи пальне та платні дороги. Розроблений як бакалаврський проєкт, він надає REST API для розрахунку маршруту та інтеграцію цін на пальне.',
            es: 'Vicatomaps muestra no solo la ruta, el tiempo y la distancia, sino también el coste total estimado del viaje, incluyendo combustible y peajes. Desarrollado como proyecto de tesis de grado, proporciona APIs REST para el cálculo de rutas e integración de precios de combustible.'
        },
        image: vicaImg,
        tags: ['mobile', 'research', 'code', 'thesis', 'fullstack'],
        technologies: ['Dart', 'Flutter', 'REST API'],
        githubUrl: null,
    },
    {
        id: 'pollen-meteo',
        title: {
            en: 'Pollen & Meteo',
            uk: 'Pollen & Meteo',
            es: 'Pollen & Meteo'
        },
        description: {
            en: 'Web application providing information about pollen levels and weather conditions.',
            uk: 'Веб-додаток, що надає інформацію про рівень пилку та погодні умови.',
            es: 'Aplicación web con información sobre niveles de polen y condiciones climáticas.'
        },
        fullDescription: {
            en: 'University internship project featuring real-world data visualizations. Responsible for front-end development using React/Redux and integrating Chart.js for data insights.',
            uk: 'Проєкт під час університетського стажування, що містить візуалізацію реальних даних. Відповідала за фронтенд-розробку з використанням React/Redux та інтеграцію Chart.js для аналізу даних.',
            es: 'Proyecto de prácticas universitarias con visualizaciones de datos reales. Responsable del desarrollo front-end usando React/Redux e integración de Chart.js para el análisis de datos.'
        },
        image: pollenImg,
        tags: ['code', 'design', 'internship', 'fullstack'],
        liveUrl: 'http://84.32.188.59:3001/',
        githubUrl: 'https://github.com/krovostcora/pollen-meteo',
        technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Chart.js'],
    },
    {
        id: 'storybridge',
        title: {
            en: 'Storybridge',
            uk: 'Storybridge',
            es: 'Storybridge'
        },
        description: {
            en: 'A youth-led initiative bringing young writers and readers together through storytelling.',
            uk: 'Молодіжна ініціатива, що об’єднує молодих письменників та читачів через сторітелінг.',
            es: 'Iniciativa juvenil que une a jóvenes escritores y lectores a través de la narrativa.'
        },
        fullDescription: {
            en: 'In my role as a Volunteer Designer at StoryBridge, I focused on creating visually compelling layout designs in Figma to support a youth-led initiative dedicated to empowering young writers. By collaborating with a passionate team, I contributed to the project that foster community connection and storytelling.',
            uk: 'У ролі дизайнера-волонтера в StoryBridge я зосередилася на створенні візуально привабливих макетів у Figma для підтримки молодіжної ініціативи. Співпрацюючи з захопленою командою, я зробила свій внесок у проєкт, що сприяє зміцненню спільноти та розвитку сторітелінгу.',
            es: 'Como diseñadora voluntaria en StoryBridge, me centré en crear diseños visualmente atractivos en Figma para apoyar una iniciativa juvenil dedicada a empoderar a jóvenes escritores. Al colaborar con un equipo apasionado, contribuí al proyecto que fomenta la conexión comunitaria y la narrativa.'
        },
        image: storyImg,
        tags: ['design', 'volunteering'],
        liveUrl: 'https://story-bridge-blog.vercel.app/about',
        technologies: ['Figma', 'Responsive Web Design'],
    },
    {
        id: 'mini-lead-tracker',
        title: {
            en: 'Mini Lead Tracker',
            uk: 'Mini Lead Tracker',
            es: 'Mini Lead Tracker'
        },
        description: {
            en: 'A mini-CRM test task for managing leads with comments, search, filters, and pagination.',
            uk: 'Тестове завдання: міні-CRM для керування лідами з коментарями, пошуком та фільтрами.',
            es: 'Mini-CRM para gestionar clientes potenciales con comentarios, búsqueda y filtros.'
        },
        fullDescription: {
            en: 'This project was completed as a Middle FullStack Developer test task. It is a mini-CRM where users can manage leads, update statuses, search and paginate records. It was also my first hands-on experience working with an ORM/ODM approach using Mongoose.',
            uk: 'Цей проєкт був виконаний як тестове завдання на позицію Middle FullStack розробника. Це міні-CRM, де користувачі можуть керувати лідами, оновлювати статуси, шукати та пагінувати записи. Це також був мій перший досвід роботи з ORM/ODM підходом за допомогою Mongoose.',
            es: 'Este proyecto se completó como una tarea de prueba para Desarrollador FullStack. Es un mini-CRM donde los usuarios pueden gestionar prospectos, actualizar estados y buscar registros. También fue mi primera experiencia práctica trabajando con un enfoque ORM/ODM usando Mongoose.'
        },
        image: leadImg,
        tags: ['code', 'fullstack', 'test-task'],
        githubUrl: 'https://github.com/krovostcora/mini-lead-tracker',
        technologies: ['Next.js (App Router)', 'NestJS', 'MongoDB', 'Mongoose', 'TypeScript', 'Docker'],
    },
    {
        id: 'cronostera',
        title: {
            en: 'Cronostera',
            uk: 'Cronostera',
            es: 'Cronostera'
        },
        description: {
            en: 'Event management mobile application for browsing and creating events.',
            uk: 'Мобільний додаток для керування подіями: перегляд та створення івентів.',
            es: 'Aplicación móvil para la gestión, búsqueda y creación de eventos.'
        },
        fullDescription: {
            en: 'Mobile app developed during internship using React Native (iOS/Android) and a Node.js/SQLite backend to handle real-time event data.',
            uk: 'Мобільний додаток, розроблений під час стажування з використанням React Native (iOS/Android) та бекенду на Node.js/SQLite для роботи з даними подій у реальному часі.',
            es: 'Aplicación móvil desarrollada durante las prácticas usando React Native (iOS/Android) y un backend de Node.js/SQLite para manejar datos de eventos en tiempo real.'
        },
        image: cronoImg,
        tags: ['mobile', 'code', 'internship'],
        githubUrl: '#',
        githubBackendUrl: '#',
        technologies: ['React Native', 'Node.js', 'Express', 'SQLite'],
    },
    {
        id: 'safe-internet',
        title: {
            en: 'Safe Internet',
            uk: 'Безпечний інтернет',
            es: 'Internet Seguro'
        },
        description: {
            en: 'Educational manual about online scams for different age groups.',
            uk: 'Освітній посібник про онлайн-шахрайство для різних вікових груп.',
            es: 'Manual educativo sobre estafas en línea para diferentes grupos de edad.'
        },
        fullDescription: {
            en: 'My first large-scale project created for Web classes. The goal was to create a simple manual for people of different ages who are either just starting to use the internet or are easily tricked by scams.',
            uk: 'Мій перший масштабний проєкт, створений для занять з веб-розробки. Метою було створити простий посібник для людей різного віку, які або тільки починають користуватися інтернетом, або яких легко обдурити шахраям.',
            es: 'Mi primer proyecto a gran escala creado para las clases de Web. El objetivo era crear un manual sencillo para personas de diferentes edades que están empezando a usar internet o que son engañadas fácilmente por estafas.'
        },
        image: safeImg,
        tags: ['code'],
        liveUrl: '#',
        githubUrl: '#',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 'recommend',
        title: {
            en: 'Recommend',
            uk: 'Recommend',
            es: 'Recommend'
        },
        description: {
            en: 'Personal recommendation system for tracking movies and books.',
            uk: 'Персональна рекомендаційна система для відстеження фільмів та книг.',
            es: 'Sistema de recomendación personal para rastrear películas y libros.'
        },
        fullDescription: {
            en: 'HCI class project focused on user-friendly interface. Includes Google Auth via Firebase and a personal rating system for tracking media.',
            uk: 'Проєкт для занять з HCI, зосереджений на зручному інтерфейсі. Включає авторизацію через Google за допомогою Firebase та персональну систему рейтингу.',
            es: 'Proyecto de la clase de HCI centrado en una interfaz amigable para el usuario. Incluye autenticación de Google a través de Firebase y un sistema de calificación personal.'
        },
        image: recImg,
        tags: ['code', 'design'],
        liveUrl: 'https://krovostcora.github.io/recommendations/',
        githubUrl: '#',
        technologies: ['React', 'Firebase', 'Figma'],
    }
];