import { Map, Terrain, Layers, Assessment, Public, Room } from '@mui/icons-material';
import PageTemplate from '../components/PageTemplate ';
const services = [
  {
    title: 'Mapping Services',
    description: 'High-quality mapping services to visualize geographic data.',
    icon: <Map fontSize="large" color="info" />,
    image: 'Mapping Services',
    details: 'Our mapping services offer the highest quality cartographic representations, tailored to meet the unique needs of your project. We use advanced technology to ensure accurate and detailed maps, enhancing your ability to analyze and interpret geographic data effectively. Our team of experts is committed to delivering reliable and visually appealing maps that support decision-making and strategic planning.'
  },
  {
    title: 'Terrain Analysis',
    description: 'Detailed terrain analysis for better understanding of landscapes.',
    icon: <Terrain fontSize="large" color="warning" />,
    image: `Terrain Analysis`,
    details: 'Our terrain analysis services provide comprehensive insights into landscape features and topography. We utilize cutting-edge tools and techniques to analyze terrain data, helping you understand the physical characteristics of the land. Whether you are involved in urban planning, environmental conservation, or infrastructure development, our terrain analysis will guide your projects with precise and actionable information.'
  },
  {
    title: 'Layer Management',
    description: 'Efficient layer management for complex GIS projects.',
    icon: <Layers fontSize="large" color="success" />,
    image: 'Layer Management',
    details: 'Effective layer management is crucial for the success of any GIS project. Our services ensure seamless organization and integration of various data layers, making complex projects manageable and efficient. We provide tools and expertise to help you maintain clarity and accuracy in your GIS data, facilitating better analysis and decision-making processes. Trust us to handle your layer management needs with precision and care.'
  },
  {
    title: 'Spatial Analysis',
    description: 'Advanced spatial analysis to derive meaningful insights.',
    icon: <Assessment fontSize="large" color="success" />,
    image: 'Spatial Analysis',
    details: 'Spatial analysis is at the core of understanding geographic relationships and patterns. Our advanced spatial analysis services leverage powerful algorithms and software to reveal hidden insights from your data. Whether you are studying population trends, environmental changes, or resource distribution, our spatial analysis provides the depth and accuracy needed for informed decision-making. Explore new dimensions of your data with our expert spatial analysis services.'
  },
  {
    title: 'Global Services',
    description: 'Global GIS services for various applications and industries.',
    icon: <Public fontSize="large" color="error" />,
    image: 'Global Services',
    details: 'Our global GIS services are designed to meet the diverse needs of industries worldwide. We offer comprehensive solutions that address the unique challenges faced by businesses and organizations operating on a global scale. From data collection and mapping to analysis and reporting, our services are tailored to provide accurate and actionable geographic information. Partner with us for reliable and scalable global GIS services that drive success.'
  },
  {
    title: 'Location Services',
    description: 'Accurate location services for precise data positioning.',
    icon: <Room fontSize="large" color="warning" />,
    image: 'Global Services',
    details: 'Accurate location data is essential for a wide range of applications, from navigation to asset management. Our location services offer precise positioning and geospatial data that enhance the functionality and reliability of your projects. We utilize state-of-the-art technology to ensure the accuracy and integrity of location information, supporting your efforts to deliver high-quality solutions. Rely on our location services for dependable and precise geospatial data.'
  }
];
const GisPage = () => <PageTemplate title="Our GIS Services" services={services} />;

export default GisPage;