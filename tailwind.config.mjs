/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['KyivTypeSans', 'sans-serif'],
                display: ['Georgia', 'serif'],
            },
            colors: {
                bg:      'var(--color-bg)',
                surface: 'var(--color-surface)',
                raised:  'var(--color-surface-raised)',

                text:    'var(--color-text)',
                muted:   'var(--color-text-muted)',

                border:        'var(--color-border)',
                'border-strong': 'var(--color-border-strong)',

                accent:       'var(--color-accent)',
                'accent-hover': 'var(--color-accent-hover)',
                'accent-text':  'var(--color-accent-text)',

                nav:       'var(--color-nav)',
                'nav-pill':  'var(--color-nav-pill)',
                'nav-text':  'var(--color-nav-text)',
            },
        },
    },
};
