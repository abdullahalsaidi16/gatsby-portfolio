import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Title',
  name: 'Abdullah Alsaidi',
  subtitle: 'I am Data Scientist with Backend Developement expirence',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Full Stack Data Scientist with 2+ years of experience in working on productionizing Artificial intelligence applications, predictive modeling, and geospatial data analysis. in addition to building data and CI/CD pipelines for Machine learning applications.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1ta1Tm5Rta9uQPg_79gpOgazjx_Z29Qmw/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movecar.png',
    title: 'Pricing Engine for movecar.com',
    info: '',
    info2: '',
    url: 'movecar.com',
  },
  {
    id: nanoid(),
    img: 'fieldboundary.jpeg',
    title: 'Field Boundary Detection',
    info: 'Developing Field boundry detection model for Spacenus',
    info2: '',
    url: 'https://www.field-boundary.com/',
  },
  {
    id: nanoid(),
    img: '',
    title: 'Robot Localization system using GSM network and SLAM',
    info: '',
    info2: '',
    url: 'https://www.instagram.com/p/CLxhE-KgWgC/',
    repo: 'https://github.com/abdullahalsaidi16/wsn_localization_tracking'
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'abdullah.alsaidi16@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/3bdullah_sa16',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abdullahalsaidi16',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
