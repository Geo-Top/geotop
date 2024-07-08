import PageTemplate from '../components/PageTemplate ';
import { Engineering, Build, Apartment, Landscape, Assessment, Code } from '@mui/icons-material';

const services = [
  {
    title: '3D Modeling',
    description: 'Creating detailed 3D models of buildings and infrastructure.',
    icon: <Engineering fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?3d-modeling',
    details: 'Our 3D modeling services provide detailed and accurate representations of buildings and infrastructure. Using advanced BIM software, we create comprehensive models that assist in design, analysis, and visualization.'
  },
  {
    title: 'Structural Design',
    description: 'Designing structural elements for safety and stability.',
    icon: <Build fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?structural-design',
    details: 'Our structural design services focus on creating safe and stable structures. We use BIM to design and analyze structural elements, ensuring they meet all safety standards and perform well under various conditions.'
  },
  {
    title: 'MEP Systems',
    description: 'Designing mechanical, electrical, and plumbing systems.',
    icon: <Apartment fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?mep-systems',
    details: 'Our MEP systems design services cover mechanical, electrical, and plumbing systems. We use BIM to integrate these systems into building models, ensuring efficient and conflict-free designs.'
  },
  {
    title: 'Landscape Design',
    description: 'Creating sustainable and aesthetic landscape plans.',
    icon: <Landscape fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?landscape-design',
    details: 'Our landscape design services focus on creating sustainable and aesthetic outdoor spaces. Using BIM, we integrate landscape elements into building models, providing a cohesive design that enhances the environment.'
  },
  {
    title: 'Project Management',
    description: 'Managing construction projects from planning to completion.',
    icon: <Assessment fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?project-management',
    details: 'Our project management services ensure that construction projects are completed on time and within budget. Using BIM, we manage all aspects of the project, from planning and design to construction and maintenance.'
  },
  {
    title: 'Custom BIM Solutions',
    description: 'Developing tailored BIM solutions to meet specific needs.',
    icon: <Code fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?bim-solutions',
    details: 'Our custom BIM solutions cater to the unique requirements of your projects. We provide bespoke BIM services that align with your objectives, ensuring high-quality results for your needs.'
  }
];
const BIMPage = () => <PageTemplate title="Our BIM Services" services={services} />;

export default BIMPage 
