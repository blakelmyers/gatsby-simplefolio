import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Blake Myers',
  subtitle: 'Lead Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I've been a developer ever since I discovered programming in high school using Visual Basic.  " +
    "I started my career as an intern at Boeing during my undergraduate in a Bachelor's in Computer Science.  " +
    "I also earned a Master's in Computer Science from Washington University in St Louis.  " +
    "At Boeing, I've worked on many challenging projects including Mission System software on the F/A 18, " +
    'prototyping demos for autonomous aircraft, and display/interface work on the new T7A trainer.  ' +
    'I am currently the lead developer on a team responsible for a display architecture used on aircraft ' +
    'involving both Mission Critical and Safety Critical displays.',
  paragraphTwo:
    "I'm a homeschooling Dad, published author, raspberry pi hobbyist and cancer survivor.  " +
    'I enjoy building new applications, creating digital art, video games and continue to expand ' +
    'my knowledge in software development and the latest technologies.',
  paragraphThree: 'I am currently working on learning tools Data Scientists use like Jupyter',
  resume:
    'https://github.com/blakelmyers/gatsby-simplefolio/blob/master/src/docs/BlakeMyersResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BookWall.jpg',
    title: 'Emrose and TomTom Book 1',
    info: 'Graphic Novel created using Procreate, an Apple Pencil, and an iPad',
    info2: '',
    url: 'https://www.amazon.com/Emrose-Tomtom-Dragon-Girl-Reborn/dp/B0C6BZG7DK',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'BsquaredNFTs.JPG',
    title: 'Bsquared NFTs React eCommerce Site',
    info: 'Building React/Redux eCommerce site to improve knowledge of web development with React',
    info2:
      'Site is currently a work in progress.  Hooked in Redux.  Working on adding Stripe payments ' +
      'and improving mobile usability',
    url: 'https://bsquared-nfts.netlify.app/',
    repo: 'https://github.com/blakelmyers/bsquared-nfts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Ballee.JPG',
    title: 'The Adventures of Ballee',
    info: 'Modded 2D Java game developed with kids under ELD Games (our family game studio)',
    info2: 'Second Link: https://youtu.be/dYNh2lTT5Ww',
    url: 'https://youtu.be/dYNh2lTT5Ww',
    repo: 'https://github.com/blakelmyers/AdventuresOfBallee', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MonkeyFrenzy.JPG',
    title: 'Monkey Frenzy',
    info: 'iOS game developed and released on App Store in 2015',
    info2: '',
    url: 'https://www.youtube.com/watch?v=RCVEXNIXDu8',
    repo: 'https://github.com/blakelmyers/MonkeyFrenzy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DinoWars.JPG',
    title: 'Dino Wars',
    info: '3D game developed with Unity Engine and Blender for class project',
    info2: 'Second Link: https://www.youtube.com/watch?v=bBWl140bsAY',
    url: 'https://www.youtube.com/watch?v=tQqCG6H15J4',
    repo: 'https://github.com/blakelmyers/Surround', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ObjectDetection.JPG',
    title: 'Object Detection with Kinect',
    info: 'Computer Vision project to use the Microsoft Kinect Sensor to detect sphere objects',
    info2: '',
    url: 'https://www.youtube.com/watch?v=QcSFhxyNlWw',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Ohms.JPG',
    title: 'Ohms Sensor Mote Charge Detection',
    info: 'Wireless Sensor Network Project to use sensor mote to detect charge',
    info2: '',
    url: 'https://www.youtube.com/watch?v=PCVc6b4T0zw',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'blakelmyers@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/blake-myers-04b162a1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/blakelmyers',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
