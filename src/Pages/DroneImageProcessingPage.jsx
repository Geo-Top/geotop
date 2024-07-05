import PageTemplate from '../components/PageTemplate ';
import { Terrain, Satellite, Assessment, CloudQueue, Visibility, Code } from '@mui/icons-material';

const services = [
  {
    title: 'Image Classification',
    description: 'Classifying drone images into different categories.',
    icon: <Terrain fontSize="large" color="action" />,
    image: 'https://source.unsplash.com/random?drone-classification',
    details: 'Our image classification services use advanced algorithms to classify drone images into different categories such as vegetation, water bodies, and built-up areas. We ensure accurate classification to support applications like agriculture, forestry, and urban planning.'
  },
  {
    title: 'Change Detection',
    description: 'Detecting changes in land use and land cover over time.',
    icon: <Satellite fontSize="large" color="action" />,
    image: 'https://source.unsplash.com/random?drone-change-detection',
    details: 'Our change detection services identify changes in land use and land cover over time using drone imagery. This helps monitor deforestation, urban expansion, and other environmental changes, providing critical insights for decision-making.'
  },
  {
    title: 'Environmental Monitoring',
    description: 'Monitoring environmental parameters using drone data.',
    icon: <Assessment fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?environmental-monitoring',
    details: 'Our environmental monitoring services utilize drone data to track various environmental parameters such as vegetation health, water quality, and soil moisture. This information is essential for sustainable resource management and environmental protection.'
  },
  {
    title: 'Data Integration',
    description: 'Integrating drone data with other data sources.',
    icon: <CloudQueue fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?data-integration',
    details: 'Our data integration services combine drone data with other data sources like GIS and field surveys. This integration provides a comprehensive view of the studied area, enhancing the analysis and interpretation of the data.'
  },
  {
    title: 'Visualization',
    description: 'Visualizing drone data for better understanding and analysis.',
    icon: <Visibility fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?visualization',
    details: 'Our visualization services present drone data in an easily understandable format using maps, charts, and 3D models. This helps in better analysis and communication of the findings to stakeholders and decision-makers.'
  },
  {
    title: 'Custom Solutions',
    description: 'Developing tailored drone solutions to meet specific needs.',
    icon: <Code fontSize="large" color="primary" />,
    image: 'https://source.unsplash.com/random?custom-solutions',
    details: 'Our custom solutions cater to the unique requirements of your projects, providing bespoke drone services that align with your objectives. From specific data analysis to custom software development, we deliver high-quality solutions for your needs.'
  }
];
const DroneProcessingPage = () => <PageTemplate title="Our Drone Image Processing Services" services={services} />;

export default DroneProcessingPage;
