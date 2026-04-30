// src/utils/i18n.ts

export const languages = {
    en: 'English',
    uk: 'Українська',
    es: 'Español',
};

export const ui = {
    en: {
        'nav.projects': 'Projects',
        'nav.work': 'Work Journey',
        'nav.gallery': 'Art Gallery',
        'nav.home': 'Home',
    },
    uk: {
        'nav.projects': 'Проєкти',
        'nav.work': 'Історія робіт',
        'nav.gallery': 'Галерея',
        'nav.home': 'Головна',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.work': 'Trayectoria',
        'nav.gallery': 'Galería',
        'projects.filter': 'Filtros',
        'projects.back': '← Volver a proyectos',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof lang]) {
        return ui[lang][key] || ui['en'][key];
    };
}