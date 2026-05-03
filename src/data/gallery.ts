// src/data/gallery.ts

export interface MultilangText {
    en: string;
    uk: string;
    es: string;
}

export interface GalleryItem {
    id: string;
    title: MultilangText;
    year: string;
    material: MultilangText;
    description: MultilangText;
    src: ImageMetadata;
}

import psycho from "../assets/gallery/American Psycho.webp";
import buzok from "../assets/gallery/Buzok.webp";
import dorm from "../assets/gallery/Dorm.webp";
import duck from "../assets/gallery/Duck.webp";
import monkey from "../assets/gallery/Even Monkey Knows.webp";
import hills from "../assets/gallery/Hills.webp";
import cats from "../assets/gallery/Japanese Cats.webp";
import mark from "../assets/gallery/Mark.webp";
import mushroom from "../assets/gallery/Mushroom.webp";
import panels from "../assets/gallery/Panels.webp";
import peach from "../assets/gallery/Peach.webp";
import siauliai from "../assets/gallery/Siauliai.webp";
import tangerine from "../assets/gallery/Tangerine.webp";
import taxi from "../assets/gallery/Yellow Taxi.webp";
import meme from "../assets/gallery/Asturian meme.webp"


export const galleryIntro: MultilangText = {
    en: `I started painting with gouache in the first grade while attending art classes after school, but I stopped by the second grade. 

However, in the seventh grade, boring geography lessons prompted me to pick up a brush again. That was the moment I became a bit "artsy."

Even though I don't consider myself a great artist, I love the idea of sharing my work with the world! That’s why I decided to create this page. Some of these paintings were gifted to friends and close ones, while others are kept by my mum.

Usually, I prefer to paint with acrylics, but sometimes like to try new materials!.`,
    uk: `Я почала малювати гуашшю у першому класі, відвідуючи художній гурток після школи, але покинула це вже у другому класі.

Проте у сьомому класі нудні уроки географії змусили мене знову взяти пензель до рук. Саме тоді я стала трохи "творчою".

Хоча я не вважаю себе великою художницею, мені подобається ідея ділитися своїми роботами зі світом! Тому я вирішила створити цю сторінку. Деякі з цих картин були подаровані друзям та близьким, а інші зберігаються у моєї мами.

Зазвичай я віддаю перевагу акрилу, але іноді люблю пробувати нові матеріали!.`,
    es: `Empecé a pintar con témperas en primer grado mientras asistía a clases de arte después de la escuela, pero lo dejé en segundo grado.

Sin embargo, en séptimo grado, las aburridas lecciones de geografía me impulsaron a volver a tomar el pincel. Ese fue el momento en que me volví un poco "artística".

Aunque no me considero una gran artista, ¡me encanta la idea de compartir mi trabajo con el mundo! Por eso decidí crear esta página. Algunas de estas pinturas fueron regaladas a amigos y seres queridos, mientras que otras las guarda mi madre.

Normalmente prefiero pintar con acrílicos, ¡pero a veces me gusta probar materiales nuevos!.`
};

export const galleryItems: GalleryItem[] = [
    {
        id: '1',
        title: {en: 'American Psycho', uk: 'Американський психопат', es: 'American Psycho'},
        src: psycho,
        year: '2023',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `I think the title speaks for itself. After watching the movie "American Psycho," I was really struck by its aesthetic. \n\nAt the time, sigma memes were everywhere, which inspired me to paint Patrick Bateman. It was also a great opportunity to practice my portrait techniques.`,
            uk: `Думаю, назва говорить сама за себе. Після перегляду фільму "Американський психопат" мене дуже вразила його естетика. \n\nНа той час меми про sigma були всюди, що й надихнуло мене намалювати Патріка Бейтмана. Це також була чудова можливість потренувати техніку портрета.`,
            es: `Creo que el título habla por sí solo. Después de ver la película "American Psycho", me impresionó mucho su estética. \n\nEn ese momento, los memes de sigma estaban en todas partes, lo que me inspiró a pintar a Patrick Bateman. También fue una gran oportunidad para practicar mis técnicas de retrato.`
        }
    },
    {
        id: '2',
        title: {en: 'Buzok', uk: 'Бузок', es: 'Lilas'},
        src: buzok,
        year: '2020',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `I painted this while being stuck at home during the pandemic. These flowers were a rare piece of the outside world, so I felt a strong urge to capture them. \n\nI used to believe that flowers were easy to paint, but this piece taught me a lot about playing with vases, reflections, and shadows. I still don't like the paintings of flovers.`,
            uk: `Я намалювала це, застрягши вдома під час пандемії. Ці квіти були рідкісним шматочком зовнішнього світу, тому я відчула сильне бажання зафіксувати їх. \n\nРаніше я вірила, що квіти малювати легко, але ця робота навчила мене багато чому у роботі з вазами, відображеннями та тінями. Я досі не дуже люблю картини з квітами.`,
            es: `Pinté esto mientras estaba atrapada en casa durante la pandemia. Estas flores eran una pieza rara del mundo exterior, así que sentí un fuerte deseo de capturarlas. \n\nSolía creer que las flores eran fáciles de pintar, pero esta pieza me enseñó mucho sobre el juego con los jarrones, los reflejos y las sombras. Todavía no me gustan las pinturas de flores.`
        }
    },
    {
        id: '3',
        title: {en: 'Dorm', uk: 'Гуртожиток', es: 'Residencia'},
        src: dorm,
        year: '2022',
        material: {en: 'Cheap Acrylics', uk: 'Дешевий акрил', es: 'Acrílicos baratos'},
        description: {
            en: `When I first moved to Lithuania for my studies, I deeply missed the paints I had left behind at home. \n\nI eventually bought some cheap acrylics from JYSK and started painting what I saw around me. Currently, this painting belongs to a my friend and former classmate.`,
            uk: `Коли я вперше переїхала до Литви на навчання, я дуже сумувала за фарбами, які залишила вдома. \n\nЗрештою я купила дешевий акрил у JYSK і почала малювати те, що бачила навколо. Зараз ця картина належить моєму другові та колишньому однокласнику.`,
            es: `Cuando me mudé por primera vez a Lituania para mis estudios, extrañaba profundamente las pinturas que había dejado en casa. \n\nFinalmente compré unos acrílicos baratos en JYSK y empecé a pintar lo que veía a mi alrededor. Actualmente, esta pintura pertenece a un amigo y ex compañero de clase.`
        }
    },
    {
        id: '4',
        title: {en: 'Goose', uk: 'Гусак', es: 'Ganso'},
        src: duck,
        year: '2022',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `I found a similar painting of a goose on Pinterest and felt inspired to recreate it in my sketchbook.`,
            uk: `Я знайшла схожу картину з гусаком на Pinterest і надихнулася відтворити її у своєму скетчбуці.`,
            es: `Encontré una pintura similar de un ganso en Pinterest y me sentí inspirada para recrearla en mi cuaderno de bocetos.`
        }
    },
    {
        id: '5',
        title: {en: 'Even Monkey Knows', uk: 'Навіть мавпа знає', es: 'Incluso el mono lo sabe'},
        src: monkey,
        year: '2023-2024',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `This was a "one-day painting" born out of boredom. When I brought it to my parents' house, a friend of theirs absolutely loved the message it conveyed. \n\nHe asked to have it, and although my mum was initially hesitant, I convinced her to let it go. My main philosophy regarding my art is that it has to live. I’m happy knowing that someone truly enjoys it, so we gifted it to him for his birthday.`,
            uk: `Це була "картина одного дня", народжена від нудьги. Коли я привезла її до батьківського дому, їхньому другові дуже сподобався меседж, який вона несла. \n\nВін попросив її собі, і хоча мама спочатку вагалася, я переконала її віддати. Моя головна філософія щодо мистецтва полягає в тому, що воно має жити. Я щаслива знати, що хтось щиро насолоджується нею, тому ми подарували її йому на день народження.`,
            es: `Esta fue una "pintura de un día" nacida del aburrimiento. Cuando la llevé a casa de mis padres, a un amigo de ellos le encantó el mensaje que transmitía. \n\nMe pidió tenerla y, aunque mi madre dudó al principio, la convencí para que la dejara ir. Mi filosofía principal sobre mi arte es que tiene que vivir. Me hace feliz saber que alguien realmente la disfruta, así que se la regalamos por su cumpleaños.`
        }
    },
    {
        id: '6',
        title: {en: 'Mountains', uk: 'Гори', es: 'Montaňas'},
        src: hills,
        year: '2026',
        material: {en: 'Oil Pastel', uk: 'Олійна пастель', es: 'Pastel al óleo'},
        description: {
            en: `I found a painting kit for Japanese-style mountains at a store called "Aurora." However, following references is boring, so I decided to create something unique. \n\nLater, I saw a TikTok about this specific kit and posted my result in the comments—it surprisingly got over 500 likes!`,
            uk: `Я знайшла набір для малювання гір у японському стилі в магазині "Аврора". Проте дотримуватися референсів нудно, тому я вирішила створити щось унікальне. \n\nПізніше я побачила TikTok про цей самий набір і виклала свій результат у коментарях — він несподівано набрав понад 500 лайків!`,
            es: `Encontré un kit de pintura para montañas al estilo japonés en una tienda llamada "Aurora". Sin embargo, seguir las referencias es aburrido, así que decidí crear algo único. \n\nLuego vi un TikTok sobre este kit específico y publiqué mi resultado en los comentarios; ¡sorprendentemente obtuvo más de 500 likes!`
        }
    },
    {
        id: '7',
        title: {en: 'Japanese Cats', uk: 'Японські коти', es: 'Gatos japoneses'},
        src: cats,
        year: '2025',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `I wanted to paint something special for Darío since he loves Japan. I worked on this piece for over half a year before gifting it to him. \n\nThe coolest part? About six months later, we actually ended up visiting Japan together.`,
            uk: `Я хотіла намалювати щось особливе для Даріо, оскільки він любить Японію. Я працювала над цією роботою понад пів року, перш ніж подарувати її йому. \n\nНайкрутіше? Приблизно через шість місяців ми справді поїхали до Японії разом.`,
            es: `Quería pintar algo especial para Darío ya que le encanta Japón. Trabajé en esta pieza durante más de medio año antes de regalársela. \n\n¿Lo más genial? Unos seis meses después, terminamos visitando Japón juntos.`
        }
    },
    {
        id: '8',
        title: {en: 'Mark', uk: 'Марк', es: 'Mark'},
        src: mark,
        year: '2023',
        material: {en: 'Gouache', uk: 'Гуаш', es: 'Gouache'},
        description: {
            en: `This reminds me of a "golden time" in the dorm. We used to gather with friends, drink wine, and watch the show "Supermum" in the background while painting.`,
            uk: `Це нагадує мені про "золотий час" у гуртожитку. Ми збиралися з друзями, пили вино і дивилися шоу "Супермама" на фоні, поки малювали.`,
            es: `Esto me recuerda a una "época dorada" en la residencia. Solíamos reunirnos con amigos, beber vino y ver el programa "Supermami" de fondo mientras pintábamos.`
        }
    },
    {
        id: '9',
        title: {en: 'Mushroom', uk: 'Гриб', es: 'Seta'},
        src: mushroom,
        year: '2022',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `It was my mum's birthday, and I didn't have a gift ready. I managed to finish this entire painting in just three days!`,
            uk: `Це був день народження моєї мами, а в мене не було готового подарунка. Мені вдалося закінчити всю цю картину всього за три дні!`,
            es: `Era el cumpleaños de mi madre y no tenía un regalo listo. ¡Logré terminar toda esta pintura en solo tres días!`
        }
    },
    {
        id: '10',
        title: {en: 'Panels', uk: 'Панельки', es: 'Paneles'},
        src: panels,
        year: '2020-2021',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `This was painted a while ago, so I don't remember all the details. However, I loved the raw state of the painting so much that I decided never to "finish" it. \n\nIt remains one of my favorite pieces and still hangs on my wall today.`,
            uk: `Це було намальовано давно, тому я не пам'ятаю всіх деталей. Проте мені так сподобався цей незавершений стан картини, що я вирішила ніколи її не "доробляти". \n\nВона залишається однією з моїх улюблених робіт і досі висить на моїй стіні.`,
            es: `Esto fue pintado hace tiempo, así que no recuerdo todos los detalles. Sin embargo, me gustó tanto el estado crudo de la pintura que decidí no "terminarla" nunca. \n\nSigue siendo una de mis piezas favoritas y todavía cuelga en mi pared hoy.`
        }
    },
    {
        id: '11',
        title: {en: 'Peach', uk: 'Персик', es: 'Melocotón'},
        src: peach,
        year: '2021',
        material: {en: 'Pencils', uk: 'Олівці', es: 'Lápices'},
        description: {
            en: `This was completely random. While in Poland, I bought some colorful pencils and wanted to draw something but had no ideas. \n\nI asked my roommate for a random word, and she said: "Peach."`,
            uk: `Це було абсолютно випадково. Будучи в Польщі, я купила кольорові олівці й хотіла щось намалювати, але не мала ідей. \n\nЯ попросила сусідку по кімнаті сказати випадкове слово, і вона сказала: "Персик".`,
            es: `Esto fue completamente aleatorio. Mientras estaba en Polonia, compré unos lápices de colores y quería dibujar algo pero no tenía ideas. \n\nLe pedí a mi compañera de cuarto una palabra al azar y dijo: "Melocotón".`
        }
    },
    {
        id: '12',
        title: {en: 'Siauliai', uk: 'Шяуляй', es: 'Siauliai'},
        src: siauliai,
        year: '2022-2023',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `This was my first "long-term" project, taking over six months to complete. Most of the work was done during wine-and-paint nights with friends in the dorm. \n\nNow it belongs to a friend. Even though she moved from Šiauliai to Vilnius, this painting serves as a reminder of the place where we first met.`,
            uk: `Це був мій перший "довгостроковий" проєкт, на завершення якого пішло понад шість місяців. Більша частина роботи була зроблена під час вечорів з вином та малюванням з друзями в гуртожитку. \n\nТепер вона належить подрузі. Хоча вона переїхала з Шяуляя до Вільнюса, ця картина служить нагадуванням про місце, де ми вперше зустрілися.`,
            es: `Este fue mi primer proyecto a "largo plazo", tardó más de seis meses en completarse. La mayor parte del trabajo se realizó durante noches de vino y pintura con amigos en la residencia. \n\nAhora pertenece a una amiga. Aunque se mudó de Šiauliai a Vilna, esta pintura sirve como recordatorio del lugar donde nos conocimos por primera vez.`
        }
    },
    {
        id: '13',
        title: {en: 'Tangerine', uk: 'Мандарин', es: 'Mandarina'},
        src: tangerine,
        year: '2020',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `I believe I was following a tutorial for this one. I don't have many other memories associated with it, but I like how it turned out.`,
            uk: `Здається, я малювала це за туторіалом. У мене не дуже багато спогадів, пов'язаних з нею, але мені подобається результат.`,
            es: `Creo que estaba siguiendo un tutorial para esta. No tengo muchos otros recuerdos asociados con ella, pero me gusta cómo quedó.`
        }
    },
    {
        id: '14',
        title: {en: 'Yellow Taxi', uk: 'Жовте таксі', es: 'Taxi amarillo'},
        src: taxi,
        year: '2023-2024',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `One of my personal favorites. Cityscapes are what I enjoy painting the most. This piece took about half a year to finish, but the result was worth it.`,
            uk: `Одна з моїх найулюбленіших робіт. Міські пейзажі — це те, що мені подобається малювати найбільше. На цю роботу пішло близько пів року, але результат того вартий.`,
            es: `Una de mis favoritas personales. Los paisajes urbanos son lo que más disfruto pintando. Esta pieza tardó aproximadamente medio año en terminarse, pero el resultado valió la pena.`
        }
    },
    {
        id: '15',
        title: {en: 'Asturian meme', uk: 'Мем астурійський', es: 'Meme asturiano'},
        src: meme,
        year: '2026',
        material: {en: 'Acrylics', uk: 'Акрил', es: 'Acrílicos'},
        description: {
            en: `This is a painting of one day. On the first of May, I visited the town of Nava, where the cider museum is located. So, upon returning home, I wanted to paint something thematic! \n\nBy the way, the bottle was painted in one minute, and the rest of the work took about three hours.`,
            uk: `Це малюнок одного дня. Першого травня я побувала у містечку Нава, де знаходиться музей сидру. Тому, повернувшись додому, мені захотілось намалювати щось тематичне! \n\nДо речі, бутилка була намальована за одну хвилину, а решта роботи зайняла близько трьох годин.`,
            es: `Este es un dibujo de un día. El primero de mayo estuve en la ciudad de Nava, donde se encuentra el museo de la sidra. Por eso, al volver a casa, ¡quería pintar algo temático! \n\nPor cierto, la botella fue pintada en un minuto, y el resto del trabajo tomó alrededor de tres horas.`
        }
    }
];