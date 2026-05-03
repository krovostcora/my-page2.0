// src/utils/i18n.ts

export const languages = {
    en: 'English',
    uk: 'Українська',
    es: 'Español',
};

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.work': 'Work Journey',
        'nav.gallery': 'Art Gallery',
        'home.title': 'Hello!',
        'home.subtitle': 'My name is Anna.',
        'home.welcome': 'Welcome to my page!',
        'projects.title': 'Projects',
        'projects.filters': 'Filters',
        'projects.readMore': 'Read more',
        'work.title': 'Work Journey',
        'work.intro': 'Even though my goal is to work in Computer Science, I have tried many different roles along the way. I believe this experience has highly influenced me as a person, and in the following sections, I’ll explain how!',
        'work.details': 'Read Details',
        'projects.back': 'Back to projects',
        'projects.live': 'Live Demo',
        'projects.tech_docs': 'Technical Documentation',
        'projects.view_resource': 'View Resource',
    },
    uk: {
        'nav.home': 'Головна',
        'nav.projects': 'Проєкти',
        'nav.work': 'Досвід',
        'nav.gallery': 'Галерея',
        'home.title': 'Привіт!',
        'home.subtitle': 'Мене звати Анна.',
        'home.welcome': 'Вітаю на моїй сторінці!',
        'projects.title': 'Проєкти',
        'projects.filters': 'Фільтри',
        'projects.readMore': 'Детальніше',
        'work.title': 'Досвід роботи',
        'work.intro': 'Хоча моя мета — працювати в ІТ, на своєму шляху я спробувала багато різних ролей. Я вірю, що цей досвід сильно вплинув на мене як на особистість, і нижче я розповім, як саме!',
        'work.details': 'Деталі',
        'projects.back': 'Назад до проєктів',
        'projects.live': 'Демо',
        'projects.tech_docs': 'Технічна документація',
        'projects.view_resource': 'Відкрити матеріал',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.work': 'Trayectoria',
        'nav.gallery': 'Galería',
        'home.title': '¡Hola!',
        'home.subtitle': 'Mi nombre es Anna.',
        'home.welcome': '¡Bienvenido a mi página!',
        'projects.title': 'Proyectos',
        'projects.filters': 'Filtros',
        'projects.readMore': 'Leer más',
        'work.title': 'Trayectoria',
        'work.intro': 'Aunque mi objetivo es trabajar en informática, he probado muchos roles diferentes a lo largo del camino. Creo que esta experiencia me ha influido mucho como persona, ¡y en las siguientes secciones explicaré cómo!',
        'work.details': 'Leer Detalles',
        'projects.back': 'Volver a proyectos',
        'projects.live': 'Demo en vivo',
        'projects.tech_docs': 'Documentación Técnica',
        'projects.view_resource': 'Ver Recurso',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof lang]) {
        return ui[lang][key] || ui['en'][key];
    };
}