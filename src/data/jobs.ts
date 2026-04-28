// src/data/jobs.ts
export interface Job {
    title: string;
    text: string;
    images: string[];
    layout: 'text-right' | 'images-bottom';
    projectLink?: string;
}

const BASE_URL = '/my-page2.0';

export const jobs: Job[] = [
    {
        title: 'The First Step: Vodafone Promoter',
        text: `It was my first job! \n\nAt the time, it was the only option I could find due to my age. My main task was to strike up conversations with people about mobile operators and try to convince them to switch to Vodafone.\n\nThanks to this experience, I became less shy and more communicative. Additionally, I met someone who remains a close friend of mine to this day!\n\nAnd to finish this part – I still use a Vodafone SIM card that I bought from myself!`,
        images: [`${BASE_URL}/jobs/Vodafone_dithered.webp`, `${BASE_URL}/jobs/Vodafone2_dithered.webp`],
        layout: 'text-right',
    },
    {
        title: 'The Coffee Era: Barista',
        text: `Thanks to a girl I met at my previous job, I found this place! This is how my love for coffee grew and became stronger.\n\nSince I was still in school, I mostly worked weekends (and sometimes Fridays). It was a genuinely cool time; there weren't many customers, so I had plenty of free time. I remember reading books there, studying world capitals for geography, or learning poems by heart for literature classes.\n\nAnother perk was getting two free coffees per day, which gave me space to experiment. That’s how I found out that mixing milk with cola or juice is definitely not the best idea.\n\nSadly, in 2020, I had to stop working due to the pandemic. When I wanted to return, the owner had changed and they refused to take me back. Well, I think that’s why that coffee shop closed down soon after! As you can see in the last photo, I got so used to having a coffee machine that I eventually bought one for personal use.`,
        images: [`${BASE_URL}/jobs/Directors_dithered.webp`, `${BASE_URL}/jobs/Directors2_dithered.webp`, `${BASE_URL}/jobs/Directors3_dithered.webp`],
        layout: 'images-bottom',
    },
    {
        title: 'The Office Life: BlaBlaCar Support',
        text: `My first experience having an office job! It was a messy time in my life, for sure. I was about to graduate from school and was supposed to be preparing for my final exams (ZNO). But... that wasn't exactly the case.\n\nBack then, I was also doing debates, taking my first trips via Ukrainian Railways, and actively studying Polish since I was planning to get my degree there. But let’s get back to the job!\n\nFirst, I had some training. Later, I remember working on the same floor as the Busfor support team and overhearing their calls. I don’t want to go into too much detail, but at some point, I started feeling like a robot. There were just too many things going on at once. It was a cool place, but I wanted to have a fun summer and already had some savings for it. So, I decided to quit.`,
        images: [`${BASE_URL}/jobs/BlaBlaCar_dithered.webp`],
        layout: 'text-right',
    },
    {
        title: 'The Tough Chapter: Barista & All-rounder',
        text: `I found this job during a bit of a depressive period. While I was working there, the war in Ukraine started. The owner was terrible, and so were the other employees.\n\nTo sum it up: working there was as bad as the previous coffee shop was good. It was much harder because I wasn’t just a barista—I was also the croissant maker, the cleaner, and the waitress.\n\nAlso, we sold cakes there. If a cake fell, it could cost me my entire daily salary. Sometimes, I ended up working the whole day for nothing.`,
        images: [`${BASE_URL}/jobs/BadPlace3_dithered.webp`, `${BASE_URL}/jobs/BadPlace2_dithered.webp`, `${BASE_URL}/jobs/BadPlace_dithered.webp`],
        layout: 'images-bottom',
    },
    {
        title: 'International Organization for Migration (IOM)',
        text: `I found this job through my university. When I was about to move to Lithuania for my studies, I received an email about this opportunity. Even though it was based in Vilnius while I was studying in Šiauliai, I decided to apply – and luckily, I got the job!\n\nMy duty was to interview other Ukrainians in Lithuania who had moved after the war started. I asked about their well-being, the difficulties they faced, and how their integration was progressing.\n\nI’m really happy I took this chance. Thanks to this job, I traveled through most of Lithuania and met many incredible people.`,
        images: [`${BASE_URL}/jobs/IOM_dithered.webp`], // Додай шлях до фото, якщо воно з'явиться
        layout: 'text-right',
    },
    {
        title: 'Internship at VUŠA: Full Stack Developer',
        text: `This internship was a compulsory part of my study program. There were five different projects to choose from, and I immediately picked this one because of my passion for web development.\n\nWorking within the Environmental Research Group at the Institute of Regional Development, I helped build tools related to environmental data. The internship was remote and didn't take up too much time, but it was a great practical experience. Plus, I now know significantly more about pollen concentration levels than I ever expected!`,
        images: [],
        layout: 'text-right',
        projectLink: `${BASE_URL}/projects/pollen-meteo`
    }
];