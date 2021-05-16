import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abdullah Alsaidi site', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
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
    info: 'Developing and Deploying Pricing Models for the Supply Chain',
    info2: '',
    url: 'movecar.com',
  },
  {
    id: nanoid(),
    img: 'fieldboundary.jpeg',
    title: 'Field Boundary Detection',
    info: 'Building and deploying AI field boundary detection for Spacenus.',
    info2: 'Developing and deploying harvesting satellite imagery API with serverless framework for Spacenus.',
    url: 'https://www.field-boundary.com/',
  },
  {
    id: nanoid(),
    img: '',
    title: 'Robot Localization system using GSM network and SLAM',
    info: 'The localization of moving targets in wireless sensor networks has been a very important problem in the past decade. Massive research has been dedicated to find solutions for this problem. Though there exist various methods to solve the problem, the Received Signal Level (RSL) method has proved to be one of the best. Technically this methods uses the signal strength levels from different anchor nodes as indicators to the corresponding position. However, building a mathematical model to link the position with the corresponding RSSLs is a very complicated impirical approach. For this reason we use machine learning algorithms to build the required mathematical model. Considering the tracking problem of moving targets to a be a successive application of localization algorithms, we make use of Kalman Filter and information available from the accelorometer of the moving target in order to obtain better accuracy. This project and the associated codes are part of my graduation project named "Localization and Tracking of a moving target in a wireless sensor network" in the department of Computer and Automation Engineering, Faculty of Mechanical and Electrical Engineering, Damasus University.',
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
      url: 'https://www.linkedin.com/in/abdullah-alsaidi/',
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
