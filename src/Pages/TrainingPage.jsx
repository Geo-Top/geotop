import PageTemplate from '../components/PageTemplate ';
import { Map, Public, Computer, AirplanemodeActive, Architecture, Satellite } from '@mui/icons-material';

const trainings = [
  {
    title: 'GIS course',
    description: 'Learn Geographic Information Systems (GIS) to manage and analyze spatial data.',
    icon: <Map fontSize="large" color="primary" />,
    image: 'https://source.unsplash.com/random?gis',
    details: 'Our GIS training covers the basics and advanced techniques of Geographic Information Systems, focusing on spatial data management, analysis, and visualization.'
  },
  {
    title: 'Web GIS course',
    description: 'Develop skills to create and manage GIS applications on the web.',
    icon: <Public fontSize="large" color="secondary" />,
    image: 'https://source.unsplash.com/random?web-gis',
    details: 'Our Web GIS training provides you with the knowledge to develop, deploy, and manage GIS applications on the web using popular frameworks and technologies.'
  },
  {
    title: 'Web Development course',
    description: 'Master the art of web development with modern tools and techniques.',
    icon: <Computer fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?web-development',
    details: 'Our web development training covers both frontend and backend development, using technologies like HTML, CSS, JavaScript, React, Node.js, and more.'
  },
  {
    title: 'Drone Image Processing',
    description: 'Learn to process and analyze drone imagery for various applications.',
    icon: <AirplanemodeActive fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?drone',
    details: 'Our drone image processing training teaches you how to capture, process, and analyze drone imagery for applications such as mapping, surveying, and 3D modeling.'
  },
  {
    title: 'BIM course',
    description: 'Understand Building Information Modeling (BIM) for efficient construction management.',
    icon: <Architecture fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?bim',
    details: 'Our BIM training provides comprehensive knowledge on Building Information Modeling, helping you manage construction projects more efficiently through 3D modeling and data management.'
  },
  {
    title: 'Remote Sensing course',
    description: 'Explore the fundamentals and advanced techniques of remote sensing.',
    icon: <Satellite fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?remote-sensing',
    details: 'Our remote sensing training covers the principles and applications of remote sensing technology, including data acquisition, processing, and interpretation.'
  }
];
const TrainingPage = () => <PageTemplate title="Our Training Services" services={trainings} />;

export default TrainingPage;