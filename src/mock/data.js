import { nanoid } from 'nanoid';

const currentDate = new Date()
const experienceYears = currentDate.getFullYear() - 2018

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
  subtitle: 'I am Software Engineer with Data science Experience',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: `Sotware engineer with ${experienceYears}+ years of experience in working on productionizing Artificial intelligence applications, predictive modeling, and geospatial data analysis. in addition to building data and CI/CD pipelines for Machine learning applications.`,
  paragraphTwo: `Skills and Technologies: Clean Code Data Visualizatio Data Processing and Cleaning Pandas Docker  PostgreSQL Redis  TDD
  Git
  Agile
  Django
  Python`,
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1ta1Tm5Rta9uQPg_79gpOgazjx_Z29Qmw/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
    {
      id: nanoid(),
      img: 'oneRagtime.png',
      title: "Developing New Features in Oneragtime Venture Capital Platform.",
      info2: '',
      url: 'https://www.oneragtime.com/'
    },
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
    info: 'Develop machine learning algorithms to build the Wireless Sensor Netowork mathematical model. Considering the tracking problem of moving targets to be a successive application of localization algorithms, we make use of the Kalman Filter and information available from the accelerometer of the moving target in order to obtain better accuracy. This project and the associated codes are part of my graduation project named "Localization and Tracking of a moving target in a wireless sensor network" in the department of Computer and Automation Engineering, Faculty of Mechanical and Electrical Engineering, Damasus University.',
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
