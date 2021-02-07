import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Blake Myers',
  subtitle: "I'm a Senior Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Need to fill in',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume:
    'https://github.com/blakelmyers/gatsby-simplefolio/blob/master/src/docs/BlakeMyersResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Ballee.JPG',
    title: 'The Adventures of Ballee',
    info: 'Modded 2D Java game developed with kids',
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
