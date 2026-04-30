// src/data/jobs.ts
import type { MultilangText } from "./projects.ts";

export interface Job {
    title: MultilangText;
    text: MultilangText;
    images: string[];
    layout: 'text-right' | 'images-bottom';
    id: string;
    projectLink?: string;
}

const BASE_URL = import.meta.env.BASE_URL;

export const jobs: Job[] = [
    {
        id: 'vodafone',
        title: {
            en: 'The First Step: Vodafone Promoter',
            uk: 'Перший крок: Промоутер Vodafone',
            es: 'El primer paso: Promotora de Vodafone'
        },
        text: {
            en: `It was my first job! \n\nAt the time, it was the only option I could find due to my age. My main task was to strike up conversations with people about mobile operators and try to convince them to switch to Vodafone.\n\nThanks to this experience, I became less shy and more communicative. Additionally, I met someone who remains a close friend of mine to this day!\n\nAnd to finish this part – I still use a Vodafone SIM card that I bought from myself!`,
            uk: 'Це була моя перша робота! \n\nНа той час це був єдиний варіант, який я змогла знайти через свій вік. Моїм головним завданням було розпочинати розмови з людьми про мобільних операторів і намагатися переконати їх перейти на Vodafone.\n\nЦей досвід дуже допоміг мені побороти мою соромʼязливість та страх підходити до незнайомців на вулиці. Також, під час роботи я зустріла свою тепер близьку подругу!\n\nІ під кінець — я досі користуюся SIM-карточкою Vodafone, яку купила сама у себе!',
            es: `¡Fue mi primer trabajo! \n\nEn aquel momento, era la única opción que podía encontrar debido a mi edad. Mi tarea principal era entablar conversaciones con la gente sobre operadores móviles e intentar convencerlos de que se cambiaran a Vodafone.\n\nGracias a esta experiencia, me volví menos tímida y más comunicativa. Además, ¡conocí a alguien que sigue siendo un amigo cercano hasta el día de hoy!\n\nY para terminar esta parte: ¡todavía uso una tarjeta SIM de Vodafone que me compré a mí misma!`
        },
        images: [`${BASE_URL}jobs/Vodafone_dithered.webp`, `${BASE_URL}jobs/Vodafone2_dithered.webp`],
        layout: 'text-right',
    },
    {
        id: 'barista1',
        title: {
            en: 'The Coffee Era: Barista',
            uk: 'Ера кави: Бариста',
            es: 'La era del café: Barista'
        },
        text: {
            en: `Thanks to a girl I met at my previous job, I found this place! This is how my love for coffee grew and became stronger.\n\nSince I was still in school, I mostly worked weekends (and sometimes Fridays). It was a genuinely cool time; there weren't many customers, so I had plenty of free time. I remember reading books there, studying world capitals for geography, or learning poems by heart for literature classes.\n\nAnother perk was getting two free coffees per day, which gave me space to experiment. That’s how I found out that mixing milk with cola or juice is definitely not the best idea.\n\nSadly, in 2020, I had to stop working due to the pandemic. When I wanted to return, the owner had changed and they refused to take me back. Well, I think that’s why that coffee shop closed down soon after! As you can see in the last photo, I got so used to having a coffee machine that I eventually bought one for personal use.`,
            uk: 'Завдяки дівчині, яку я познайомилася на попередній роботі, я знайшла це місце! Ось так моя любов до кави зростала і ставала все сильнішою.\n\nОскільки я ще вчилася в школі, я переважно працювала у вихідні (а іноді й у п’ятницю). Це був справді класний час; відвідувачів було небагато, тож у мене було багато вільного часу. Пам’ятаю, як я там читала книги, вивчала столиці країн світу для уроків географії або завчала вірші напам’ять для уроків літератури.\n\nЩе однією перевагою було те, що я отримувала дві безкоштовні кави на день, що давало мені можливість експериментувати. Так я дізналася, що змішувати молоко з колою або соком — це точно не найкраща ідея.\n\nНа жаль, у 2020 році мені довелося припинити працювати через пандемію. Коли я захотіла повернутись, власник змінився, і вони відмовилися взяти мене назад. Отож, думаю, саме тому ця кав’ярня незабаром закрилася! А на останньому фото кавоварка, яку я не могла не купити після такого досвіду!',
            es: `¡Gracias a una chica que conocí en mi trabajo anterior, encontré este lugar! Así fue como mi amor por el café creció y se hizo más fuerte.\n\nComo todavía estaba en la escuela, trabajaba principalmente los fines de semana (y a veces los viernes). Fue una época genial; no había muchos clientes, así que tenía mucho tiempo libre. Recuerdo leer libros allí, estudiar las capitales del mundo para geografía o aprender poemas de memoria para las clases de literatura.\n\nOtra ventaja era recibir dos cafés gratis al día, lo que me daba espacio para experimentar. Así descubrí que mezclar leche con cola o zumo definitivamente no es la mejor idea.\n\nLamentablemente, en 2020, tuve que dejar de trabajar debido a la pandemia. Cuando quise volver, el dueño había cambiado y se negaron a aceptarme de nuevo. Bueno, ¡creo que por eso esa cafetería cerró poco después! Como pueden ver en la última foto, me acostumbré tanto a tener una máquina de café que finalmente compré una para uso personal.`
        },
        images: [`${BASE_URL}jobs/Directors_dithered.webp`, `${BASE_URL}jobs/Directors2_dithered.webp`, `${BASE_URL}jobs/Directors3_dithered.webp`],
        layout: 'images-bottom',
    },
    {
        id: 'blablacar',
        title: {
            en: 'The Office Life: BlaBlaCar Support',
            uk: 'Офісне життя: Служба підтримки BlaBlaCar',
            es: 'Vida de oficina: Soporte de BlaBlaCar'
        },
        text: {
            en: `My first experience having an office job! It was a messy time in my life, for sure. I was about to graduate from school and was supposed to be preparing for my final exams (ZNO). But... that wasn't exactly the case.\n\nBack then, I was also doing debates, taking my first trips via Ukrainian Railways, and actively studying Polish since I was planning to get my degree there. But let’s get back to the job!\n\nFirst, I had some training. Later, I remember working on the same floor as the Busfor support team and overhearing their calls. I don’t want to go into too much detail, but at some point, I started feeling like a robot. There were just too many things going on at once. It was a cool place, but I wanted to have a fun summer and already had some savings for it. So, I decided to quit.`,
            uk: `Мій перший досвід роботи в офісі! Це був досить хаотичний період у моєму житті. Наближався мій випускний і я мала готуватися до випускних іспитів (ЗНО). Але... все було не зовсім так.\n\nТоді я також брала участь у дебатах, здійснювала свої перші подорожі «Укрзалізницею» та активно вивчала польську мову, оскільки планувала здобути там вищу освіту. Але повернімося до роботи! \n\nСпочатку я пройшла навчання. Пізніше, як я пам’ятаю, я працювала на тому ж поверсі, що й команда підтримки Busfor, і було цікаво чути їхні дзвінки. Не хочу вдаватися в подробиці, але в якийсь момент я почала почуватися як робот. Просто занадто багато всього відбувалося одночасно. Це було класне місце, але я хотіла весело провести літо і вже мала на це трохи заощаджень. Тож я вирішила звільнитися.`,
            es: `¡Mi primera experiencia en un trabajo de oficina! Fue una época caótica en mi vida, sin duda. Estaba a punto de graduarme de la escuela y se suponía que debía estar preparándome para mis exámenes finales (ZNO). Pero... ese no fue exactamente el caso.\n\nEn aquel entonces, también participaba en debates, hacía mis primeros viajes en los ferrocarriles ucranianos y estudiaba polaco activamente, ya que planeaba obtener mi título allí. ¡Pero volvamos al trabajo!\n\nPrimero, tuve algo de capacitación. Luego, recuerdo trabajar en el mismo piso que el equipo de soporte de Busfor y escuchar sus llamadas. No quiero entrar en demasiados detalles, pero en algún momento, comencé a sentirme como un robot. Había demasiadas cosas sucediendo a la vez. Era un lugar genial, pero quería tener un verano divertido y ya tenía algunos ahorros para ello. Así que decidí renunciar.`
        },
        images: [`${BASE_URL}jobs/BlaBlaCar_dithered.webp`],
        layout: 'text-right',
    },
    {
        id: 'barista2',
        title: {
            en: 'The Tough Chapter: Barista & All-rounder',
            uk: 'Непростий етап: бариста та універсал',
            es: 'El capítulo difícil: Barista y polivalente'
        },
        text: {
            en: `I found this job during a bit of a depressive period. While I was working there, the war in Ukraine started. The owner was terrible, and so were the other employees.\n\nTo sum it up: working there was as bad as the previous coffee shop was good. It was much harder because I wasn’t just a barista—I was also the croissant maker, the cleaner, and the waitress.\n\nAlso, we sold cakes there. If a cake fell, it could cost me my entire daily salary. Sometimes, I ended up working the whole day for nothing.`,
            uk: 'Я знайшла цю роботу в досить депресивний період свого життя. Поки я там працювала, почалася війна в Україні. Власниця був жахлива, і більшість інших співробітників були не краще.\n\nЯкщо коротко: працювати там було настільки ж погано, наскільки добре було в попередній кав’ярні. Це було набагато важче, бо я була не лише баристою — я ще й пекла круасани, прибирала та обслуговувала відвідувачів.\n\nКрім того, ми там продавали торти. Якщо торт падав, це могло коштувати мені цілої денної зарплати. Іноді я працювала цілий день просто так, безкоштовно.',
            es: `Encontré este trabajo durante un periodo un poco depresivo. Mientras trabajaba allí, comenzó la guerra en Ucrania. La dueña era terrible, y también los otros empleados.\n\nEn resumen: trabajar allí fue tan malo como bueno fue el café anterior. Fue mucho más difícil porque no solo era barista, también era la que hacía los croissants, la limpiadora y la camarera.\n\nAdemás, vendíamos pasteles. Si un pastel se caía, podía costarme todo mi salario diario. A veces, terminaba trabajando todo el día para nada.`
        },
        images: [`${BASE_URL}jobs/BadPlace3_dithered.webp`, `${BASE_URL}jobs/BadPlace2_dithered.webp`, `${BASE_URL}jobs/BadPlace_dithered.webp`],
        layout: 'images-bottom',
    },
    {
        id: 'iom',
        title: {
            en: 'International Organization for Migration (IOM)',
            uk: 'Міжнародна організація з міграції (МОМ)',
            es: 'Organización Internacional para las Migraciones (OIM)'
        },
        text: {
            en: `I found this job through my university. When I was about to move to Lithuania for my studies, I received an email about this opportunity. Even though it was based in Vilnius while I was studying in Šiauliai, I decided to apply – and luckily, I got the job!\n\nMy duty was to interview other Ukrainians in Lithuania who had moved after the war started. I asked about their well-being, the difficulties they faced, and how their integration was progressing.\n\nI’m really happy I took this chance. Thanks to this job, I traveled through most of Lithuania and met many incredible people.`,
            uk: 'Я знайшла цю роботу завдяки університету. Коли я готувалася переїхати до Литви на навчання, мені надіслали електронного листа з інформацією про цю вакансію. Хоча робота була у Вільнюсі, а я навчалася у Шяуляї, я вирішила подати заявку — і, на щастя, мене взяли на роботу!\n\nМоїм завданням було брати інтерв’ю в інших українців у Литві, які переїхали туди після початку війни. Я запитувала про їхнє самопочуття, труднощі, з якими вони стикалися, та про те, як проходила їхня інтеграція.\n\nЯ дуже рада, що скористалася цією нагодою. Завдяки цій роботі я подорожувала майже всією Литвою та познайомилася з багатьма неймовірними людьми.',
            es: `Encontré este trabajo a través de mi universidad. Cuando estaba a punto de mudarme a Lituania para mis estudios, recibí un correo electrónico sobre esta oportunidad. Aunque tenía su sede en Vilna mientras yo estudiaba en Šiauliai, decidí postularme y, por suerte, ¡obtuve el trabajo!\n\nMi deber era entrevistar a otros ucranianos en Lituania que se habían mudado después de que comenzara la guerra. Les pregunté sobre su bienestar, las dificultades que enfrentaban y cómo progresaba su integración.\n\nEstoy muy feliz de haber aprovechado esta oportunidad. Gracias a este trabajo, viajé por la mayor parte de Lituania y conocí a muchas personas increíbles.`
        },
        images: [`${BASE_URL}jobs/IOM_dithered.webp`],
        layout: 'text-right',
    },
    {
        id: 'pollen-meteo',
        title: {
            en: 'Internship at VUŠA: Full Stack Developer',
            uk: 'Стажування в VUŠA: Full Stack Developer',
            es: 'Prácticas en VUŠA: Desarrolladora Full Stack'
        },
        text: {
            en: `This internship was a compulsory part of my study program. There were five different projects to choose from, and I immediately picked this one because of my passion for web development.\n\nWorking within the Environmental Research Group at the Institute of Regional Development, I helped build tools related to environmental data. The internship was remote and didn't take up too much time, but it was a great practical experience. Plus, I now know significantly more about pollen concentration levels than I ever expected!`,
            uk: 'Це стажування була обов’язковою частиною моєї навчальної програми. Було п’ять різних проєктів на вибір, і я одразу вибрала цей через свою пристрасть до веб-розробки.\n\nПрацюючи в рамках Групи дослідження навколишнього середовища в Інституті регіонального розвитку, я допомагала створювати інструменти, пов’язані з екологічними даними. Стажування було віддаленим і не займало много часу, але це був чудовий практичний досвід. До того ж, тепер я знаю значно більше про рівні концентрації пилку, ніж коли-небудь ожила!',
            es: `Estas prácticas fueron una parte obligatoria de mi programa de estudios. Había cinco proyectos diferentes para elegir, e inmediatamente elegí este debido a mi pasión por el desarrollo web.\n\nTrabajando dentro del Grupo de Investigación Ambiental en el Instituto de Desarrollo Regional, ayudé a crear herramientas relacionadas con datos ambientales. Las prácticas fueron remotas y no requirieron demasiado tiempo, pero fueron una gran experiencia práctica. ¡Además, ahora sé mucho más sobre los niveles de concentración de polen de lo que jamás esperaba!`
        },
        images: [],
        layout: 'text-right',
        projectLink: `${BASE_URL}projects/pollen-meteo`
    }
];