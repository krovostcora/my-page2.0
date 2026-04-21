# Anna's Portfolio

Особистий сайт-портфоліо: Art Gallery, Projects, Work Journey.

**Стек:** Astro + Tailwind CSS + GSAP + Alpine.js

---

## Швидкий старт

```bash
npm install
npm run dev
```

Відкрий http://localhost:4321

---

## Як додати картинку до галереї

1. Кинь файл `.jpg` / `.png` / `.webp` у папку `public/gallery/`
2. `git add . && git commit -m "add painting" && git push`

Готово — картинка з'явиться автоматично. Код не чіпаєш.

---

## Як додати проект

Відкрий `src/pages/projects.astro`, знайди масив `projects` і додай об'єкт:

```js
{
  title: 'Назва проекту',
  description: 'Короткий опис',
  image: '/projects/my-screenshot.png', // або null
  tags: ['design', 'code'],             // для фільтрів
  liveUrl: 'https://...',               // або null
  githubUrl: 'https://github.com/...',  // або null
},
```

---

## Як додати роботу у Work Journey

Відкрий `src/pages/work-journey.astro`, знайди масив `jobs`:

```js
{
  year: '2025',
  title: 'Назва компанії',
  text: `Твій текст тут.`,
  images: ['/jobs/photo.jpg'], // або [] якщо без фото
  layout: 'text-right',       // або 'images-bottom'
},
```

---

## Деплой на GitHub Pages

### 1. Налаштуй astro.config.mjs

```js
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/anna-portfolio', // назва репозиторію
  integrations: [tailwind()],
});
```

### 2. Увімкни Pages у Settings

GitHub репозиторій → Settings → Pages → Source: **GitHub Actions**

### 3. Push!

```bash
git push
```

GitHub Actions автоматично збере і задеплоїть. ~2 хвилини.

---

## Шрифт KyivType Sans

Встанови і раскоментуй у `Layout.astro`:

```bash
npm install @fontsource/kyiv-type-sans
```

```astro
---
import '@fontsource/kyiv-type-sans';
---
```

І у `tailwind.config.mjs`:

```js
fontFamily: {
  sans: ['KyivType Sans', 'sans-serif'],
}
```

---

## Структура файлів

```
src/
  layouts/
    Layout.astro        ← navbar, шрифти, GSAP
  pages/
    index.astro         ← Landing page
    gallery.astro       ← Art Gallery
    projects.astro      ← Projects з фільтрами
    work-journey.astro  ← Work Journey

public/
  gallery/              ← кидай картинки сюди!
    photo1.jpg
    photo2.jpg
  jobs/                 ← фото для Work Journey
  projects/             ← скріншоти проектів
  your-photo.jpg        ← твоє фото на landing
```
