export interface GalleryItem {
    id: string;
    title: string;
    year: string;
    material: string;
    description: string;
    src: string;
}

const BASE_URL = '/my-page2.0';

export const galleryIntro = `I started painting with gouache in the first grade while attending art classes after school, but I stopped by the second grade. 

However, in the seventh grade, boring geography lessons prompted me to pick up a brush again. That was the moment I became a bit "artsy."

Even though I don't consider myself a great artist, I love the idea of sharing my work with the world! That’s why I decided to create this page. Some of these paintings were gifted to friends and close ones, while others are kept by my mum.

Usually, I prefer to paint with acrylics, but sometimes like to try new materials!.`;

export const galleryItems: GalleryItem[] = [
    {
        id: '1',
        title: 'American Psycho',
        src: `${BASE_URL}/gallery/American Psycho.png`,
        year: '2023',
        material: 'Acrylics',
        description: `I think the title speaks for itself. After watching the movie "American Psycho," I was really struck by its aesthetic. \n\nAt the time, "sigma" memes were everywhere, which inspired me to paint Patrick Bateman. It was also a great opportunity to practice my portrait techniques.`
    },
    {
        id: '2',
        title: 'Buzok',
        src: `${BASE_URL}/gallery/Buzok.png`,
        year: '2020',
        material: 'Acrylics',
        description: `I painted this while being stuck at home during the pandemic. These flowers were a rare piece of the outside world, so I felt a strong urge to capture them. \n\nI used to believe that flowers were easy to paint, but this piece taught me a lot about playing with vases, reflections, and shadows. I still don't like the paintings of flovers.`
    },
    {
        id: '3',
        title: 'Dorm',
        src: `${BASE_URL}/gallery/Dorm.png`,
        year: '2022',
        material: 'Cheap Acrylics',
        description: `When I first moved to Lithuania for my studies, I deeply missed the paints I had left behind at home. \n\nI eventually bought some cheap acrylics from JYSK and started painting what I saw around me. Currently, this painting belongs to a my friend and former classmate.`
    },
    {
        id: '4',
        title: 'Goose',
        src: `${BASE_URL}/gallery/Duck.png`,
        year: '2022',
        material: 'Acrylics',
        description: `I found a similar painting of a goose on Pinterest and felt inspired to recreate it in my sketchbook.`
    },
    {
        id: '5',
        title: 'Even Monkey Knows',
        src: `${BASE_URL}/gallery/Even Monkey Knows.png`,
        year: '2023-2024',
        material: 'Acrylics',
        description: `This was a "one-day painting" born out of boredom. When I brought it to my parents' house, a friend of theirs absolutely loved the message it conveyed. \n\nHe asked to have it, and although my mum was initially hesitant, I convinced her to let it go. My main philosophy regarding my art is that it has to live. I’m happy knowing that someone truly enjoys it, so we gifted it to him for his birthday.`
    },
    {
        id: '6',
        title: 'Hills',
        src: `${BASE_URL}/gallery/Hills.png`,
        year: '2024',
        material: 'Oil Pastel',
        description: `I found a painting kit for Japanese-style mountains at a store called "Aurora." However, following references is boring, so I decided to create something unique. \n\nLater, I saw a TikTok about this specific kit and posted my result in the comments—it surprisingly got over 500 likes!`
    },
    {
        id: '7',
        title: 'Japanese Cats',
        src: `${BASE_URL}/gallery/Japanese cats.png`,
        year: '2025',
        material: 'Acrylics',
        description: `I wanted to paint something special for Darío since he loves Japan. I worked on this piece for over half a year before gifting it to him. \n\nThe coolest part? About six months later, we actually ended up visiting Japan together.`
    },
    {
        id: '8',
        title: 'Mark',
        src: `${BASE_URL}/gallery/Mark.png`,
        year: '2023',
        material: 'Gouache',
        description: `This reminds me of a "golden time" in the dorm. We used to gather with friends, drink wine, and watch the show "Supermum" in the background while painting.`
    },
    {
        id: '9',
        title: 'Mushroom',
        src: `${BASE_URL}/gallery/Mushroom.png`,
        year: '2022',
        material: 'Acrylics',
        description: `It was my mum's birthday, and I didn't have a gift ready. I managed to finish this entire painting in just three days!`
    },
    {
        id: '10',
        title: 'Panels',
        src: `${BASE_URL}/gallery/panels.png`,
        year: '2020-2021',
        material: 'Acrylics',
        description: `This was painted a while ago, so I don't remember all the details. However, I loved the raw state of the painting so much that I decided never to "finish" it. \n\nIt remains one of my favorite pieces and still hangs on my wall today.`
    },
    {
        id: '11',
        title: 'Peach',
        src: `${BASE_URL}/gallery/Peach.png`,
        year: '2021',
        material: 'Pencils',
        description: `This was completely random. While in Poland, I bought some colorful pencils and wanted to draw something but had no ideas. \n\nI asked my roommate for a random word, and she said: "Peach."`
    },
    {
        id: '12',
        title: 'Siauliai',
        src: `${BASE_URL}/gallery/Siauliai.png`,
        year: '2022-2023',
        material: 'Acrylics',
        description: `This was my first "long-term" project, taking over six months to complete. Most of the work was done during wine-and-paint nights with friends in the dorm. \n\nNow it belongs to a friend. Even though she moved from Šiauliai to Vilnius, this painting serves as a reminder of the place where we first met.`
    },
    {
        id: '13',
        title: 'Tangerine',
        src: `${BASE_URL}/gallery/Tangerine.png`,
        year: '2020',
        material: 'Acrylics',
        description: `I believe I was following a tutorial for this one. I don't have many other memories associated with it, but I like how it turned out.`
    },
    {
        id: '14',
        title: 'Yellow Taxi',
        src: `${BASE_URL}/gallery/Yellow Taxi.png`,
        year: '2023-2024',
        material: 'Acrylics',
        description: `One of my personal favorites. Cityscapes are what I enjoy painting the most. This piece took about half a year to finish, but the result was worth it.`
    },
];