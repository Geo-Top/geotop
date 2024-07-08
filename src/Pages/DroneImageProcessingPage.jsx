import PageTemplate from '../components/PageTemplate ';
import { Camera, Terrain, AirplanemodeActive, Map, Cloud, VideoLibrary } from '@mui/icons-material';

const droneServices = [
  {
    title: 'Drone Photography',
    description: 'Capturing high-quality aerial photos for various applications including real estate and events.',
    icon: <Camera fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?drone-photography',
    details: 'Our drone photography services provide high-quality aerial photos that are perfect for real estate, events, and more. We use state-of-the-art drones to capture stunning images from above, ensuring clarity and detail in every shot. Our experienced pilots and photographers work together to deliver the best results for your needs.'
  },
  {
    title: 'Aerial Surveying',
    description: 'Conducting accurate and efficient aerial surveys using advanced drone technology and techniques.',
    icon: <Terrain fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?aerial-surveying',
    details: 'Our aerial surveying services use advanced drone technology to conduct accurate and efficient surveys. Whether you need topographic maps, 3D models, or volumetric measurements, we can provide detailed and reliable data. Our team ensures that your surveying needs are met with precision and professionalism.'
  },
  {
    title: 'Inspection Services',
    description: 'Inspecting hard-to-reach areas using drones equipped with high-resolution cameras and sensors.',
    icon: <AirplanemodeActive fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?drone-inspection',
    details: 'Our drone inspection services make it easy to inspect hard-to-reach areas, such as roofs, towers, and industrial sites. We use high-resolution cameras and sensors to capture detailed images and data, ensuring that you get a comprehensive view of the area being inspected. Our services help you save time and reduce risks.'
  },
  {
    title: 'Mapping & GIS',
    description: 'Creating detailed maps and geographic information system data using drone technology.',
    icon: <Map fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?mapping',
    details: 'Our mapping and GIS services use drones to create detailed maps and geographic information system (GIS) data. We provide accurate and up-to-date maps for various applications, including urban planning, agriculture, and environmental monitoring. Our team ensures that your mapping needs are met with high precision.'
  },
  {
    title: 'Cloud Processing',
    description: 'Processing large amounts of drone data quickly and efficiently using cloud resources.',
    icon: <Cloud fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?cloud-processing',
    details: 'Our cloud processing services allow you to process drone data quickly and efficiently. We use powerful cloud computing resources to handle large datasets, providing fast and accurate results. Whether you need image stitching, 3D modeling, or data analysis, our cloud processing services can help you achieve your goals.'
  },
  {
    title: 'Aerial Videography',
    description: 'Producing stunning aerial videos with high-quality drones and experienced videographers.',
    icon: <VideoLibrary fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?aerial-videography',
    details: 'Our aerial videography services produce stunning aerial videos that are perfect for marketing, events, and more. We use high-quality drones and cameras to capture smooth and dynamic footage from the air. Our experienced videographers work closely with you to create videos that tell your story and engage your audience.'
  }
];

const DroneProcessingPage = () => <PageTemplate title="Our Drone Image Processing Services" services={droneServices} />;

export default DroneProcessingPage;

