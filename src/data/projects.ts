export interface MultilangText {
    en: string;
    uk: string;
    es: string;
}

export interface ProjectResource {
    type: 'video' | 'presentation' | 'document';
    url: string;
    label: string;
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
    resources?: ProjectResource[];
    screenshots?: ImageMetadata[];
}

import pixelImg from "../assets/projects/pixel-tracker.webp";
import vicaImg from "../assets/projects/vicatomaps.webp";
import pollenImg from "../assets/projects/pollen.webp";
import storyImg from "../assets/projects/storybridge.webp";
import leadImg from "../assets/projects/mini-lead-tracker.webp";
import cronoImg from "../assets/projects/cronostera.webp";
import safeImg from "../assets/projects/safe-internet.webp";
import recImg from "../assets/projects/recommend.webp";

import pixelImg1 from "../assets/projects/pixel_timer/pixel_timer1.webp";
import pixelImg2 from "../assets/projects/pixel_timer/pixel_timer2.webp";
import pixelImg3 from "../assets/projects/pixel_timer/pixel_timer3.webp";
import pixelImg4 from "../assets/projects/pixel_timer/pixel_timer4.webp";
import pixelImg5 from "../assets/projects/pixel_timer/pixel_timer5.webp";

import pollenImg1 from "../assets/projects/pollen-meteo/pollen-meteo1.webp";
import pollenImg2 from "../assets/projects/pollen-meteo/pollen-meteo2.webp";
import pollenImg3 from "../assets/projects/pollen-meteo/pollen-meteo3.webp";
import pollenImg4 from "../assets/projects/pollen-meteo/pollen-meteo4.webp";


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
            en: 'I created this time tracker to help manage my tasks with a custom pixel art interface. Unlike traditional Pomodoro apps, this works as a stopwatch — perfect for tracking real work sessions without time pressure. \n\nFeatures include custom multi-label support, session history with statistics, and customizable themes.',
            uk: 'Я створила цей трекер часу, щоб допомогти керувати своїми завданнями за допомогою кастомного інтерфейсу в стилі піксель-арт. На відміну від традиційних додатків Pomodoro, він працює як секундомір — ідеально підходить для відстеження реальних робочих сесій без часового тиску. \n\nФункції включають підтримку кількох міток, історію сесій зі статистикою та теми, що налаштовуються.',
            es: 'Creé este rastreador de tiempo para ayudar a gestionar mis tareas con una interfaz personalizada de pixel art. A diferencia de las aplicaciones Pomodoro tradicionales, funciona como un cronómetro, perfecto para rastrear sesiones de trabajo reales sin presión de tiempo. \n\nLas características incluyen soporte para múltiples etiquetas, historial de sesiones con estadísticas y temas personalizables.'
        },
        image: pixelImg,
        tags: ['code', 'design'],
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'fullstack'],
        liveUrl: 'https://krovostcora.github.io/pixel-time-tracker/',
        githubUrl: 'https://github.com/krovostcora/pixel-time-tracker',
        screenshots: [pixelImg5, pixelImg1, pixelImg2, pixelImg3, pixelImg4],
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
            en: "The idea for this project came from my father, who once struggled to estimate the true cost of a road trip across Europe. He inspired me to build an alternative to ViaMichelin — an app that helps calculate fuel and toll expenses upfront.\n\nCurrently, it exists as a working 'Proof of Concept' due to API and App Store fees, but it already features multi-language support, dark/light modes, and full Google Maps integration.",
            uk: "Ідея цього проєкту з’явилася завдяки моєму татові, який одного разу зіткнувся з проблемою: було важко заздалегідь зрозуміти реальну вартість поїздки Європою на авто. Він надихнув мене створити альтернативу ViaMichelin — додаток, який автоматично рахує витрати на пальне та платні дороги.\n\nНаразі це працюючий прототип (Proof of Concept), оскільки публікація в Apple Store та професійні карти вимагають платних ліцензій. Проте проєкт вже підтримує кілька мов, світлу й темну теми та повністю інтегрований з Google Maps.",
            es: "La idea de este proyecto nació gracias a mi padre, quien una vez tuvo dificultades para calcular el coste real de un viaje en coche por Europa. Él me inspiró a crear una alternativa a ViaMichelin, una aplicación que ayuda a entender los gastos de combustible y peajes.\n\nPor ahora es un prototipo funcional (Proof of Concept), ya que publicar en la Apple Store requiere licencias de pago. Aun así, el proyecto ya soporta varios idiomas, temas claro/oscuro e integración con Google Maps."
        },
        image: vicaImg,
        tags: ['mobile', 'research', 'code', 'thesis', 'fullstack'],
        technologies: ['Dart', 'Flutter', 'REST API'],
        githubUrl: null,
        resources: [
            {
                type: 'video',
                url: 'https://player.vimeo.com/video/1188824321?badge=0&autopause=0&player_id=0&app_id=58479',
                label: 'Demo Video'
            },
            {
                type: 'presentation',
                url: 'https://www.canva.com/design/DAG7v-SDFE4/AzSwszNXZdll21m4eaN7TQ/edit',
                label: 'Project Presentation'
            },
            {
                type: 'document',
                url: 'https://file.notion.so/f/f/7c3c1f57-58c2-40f4-9a52-f1decffa6c5f/b8d5ed1c-61cf-42ef-b6fa-726e4795de20/Software_Engineering_Kutova_Anna_BBD.pdf?table=block&id=2e8ca0c9-47ca-8004-ba5f-e4217751818e&spaceId=7c3c1f57-58c2-40f4-9a52-f1decffa6c5f&expirationTimestamp=1777852800000&signature=sEId37P2ameZVvMOSaF6oXK3JAWIa7vgkn3wJR96FeI&downloadName=Software+Engineering_Kutova+Anna_BBD.pdf',
                label: 'Bachelor Thesis'
            }
        ]
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
            en: "A university internship project designed to correlate environmental data. The application visualizes pollen concentration levels alongside real-time weather data fetched via a third-party API.\n\nI was responsible for the entire frontend architecture, including the UI/UX design (originally prototyped in Figma) and a multilingual system supporting English, Lithuanian, and Ukrainian.\n\nWhile the backend and PostgreSQL database—developed by another team member—are currently offline, the frontend remains a robust showcase of complex data visualization using Chart.js, state management with Redux, and a dynamic dark/light theme implementation.",
            uk: "Проєкт університетського стажування, створений для кореляції екологічних даних. Додаток візуалізує концентрацію пилку в повітрі паралельно з даними про погоду в реальному часі, отриманими через зовнішній API.\n\nЯ відповідала за всю архітектуру фронтенду, включаючи UI/UX дизайн (створений у Figma) та систему локалізації, що підтримує англійську, литовську та українську мови.\n\nХоча бекенд та база даних PostgreSQL, розроблені іншим студентом, наразі недоступні, фронтенд залишається потужним прикладом візуалізації складних даних за допомогою Chart.js, управління станом через Redux та реалізації динамічної світлої й темної тем.",
            es: "Proyecto de prácticas universitarias diseñado para correlacionar datos ambientales. La aplicación visualiza los niveles de concentración de polen junto con datos meteorológicos en tiempo real obtenidos a través de una API externa.\n\nFui responsable de toda la arquitectura front-end, incluido el diseño UI/UX (prototipado originalmente en Figma) y un sistema multilingüe que soporta inglés, lituano y ucraniano.\n\nAunque el back-end y la base de datos PostgreSQL —desarrollados por otro integrante del equipo— se encuentran actualmente fuera de línea, el front-end sigue siendo una sólida demostración de visualización de datos complejos mediante Chart.js, gestión de estado con Redux e implementación de temas claro y oscuro."
        },
        image: pollenImg,
        tags: ['code', 'design', 'internship', 'fullstack'],
        liveUrl: 'http://84.32.188.59:3001/',
        githubUrl: 'https://github.com/krovostcora/pollen-meteo',
        technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Chart.js'],
        screenshots: [pollenImg2, pollenImg3, pollenImg1],
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