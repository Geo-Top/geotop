import PageTemplate from '../components/PageTemplate ';

import {
  Terrain,
  Explore,
  TrackChanges,
  Layers,
  Assessment,
  Code,
} from "@mui/icons-material";

const services = [
  {
    title: "Land Surveying",
    description: "Accurate measurement and mapping of land areas.",
    icon: <Terrain fontSize="large" color="action" />,
    image: "https://source.unsplash.com/random?land-surveying",
    details:
      "Our land surveying services provide precise measurement and mapping of land areas. We use the latest technology to deliver detailed and accurate surveys for property boundaries, construction projects, and land development.",
  },
  {
    title: "Topographic Surveys",
    description: "Detailed mapping of terrain features and elevations.",
    icon: <Explore fontSize="large" color="action" />,
    image: "https://source.unsplash.com/random?topographic-survey",
    details:
      "Our topographic survey services offer detailed mapping of terrain features and elevations. This information is essential for planning and design in construction, engineering, and environmental projects.",
  },
  {
    title: "Geodetic Surveys",
    description: "High-precision surveys using geodetic methods.",
    icon: <TrackChanges fontSize="large" color="success" />,
    image: "https://source.unsplash.com/random?geodetic-survey",
    details:
      "Our geodetic survey services provide high-precision measurements using geodetic methods. These surveys are crucial for large-scale projects, infrastructure development, and scientific research.",
  },
  {
    title: "GIS Mapping",
    description: "Creating detailed maps using Geographic Information Systems.",
    icon: <Layers fontSize="large" color="error" />,
    image: "https://source.unsplash.com/random?gis-mapping",
    details:
      "Our GIS mapping services create detailed maps using Geographic Information Systems. We integrate various data sources to produce comprehensive maps for urban planning, environmental monitoring, and resource management.",
  },
  {
    title: "Hydrographic Surveys",
    description: "Mapping of underwater terrain and features.",
    icon: <Assessment fontSize="large" color="warning" />,
    image: "https://source.unsplash.com/random?hydrographic-survey",
    details:
      "Our hydrographic survey services map underwater terrain and features. This data is vital for marine navigation, coastal development, and underwater construction projects.",
  },
  {
    title: "Custom Survey Solutions",
    description:
      "Developing tailored surveying solutions to meet specific needs.",
    icon: <Code fontSize="large" color="primary" />,
    image: "https://source.unsplash.com/random?custom-survey",
    details:
      "Our custom survey solutions cater to the unique requirements of your projects. We provide bespoke surveying services that align with your objectives, ensuring high-quality results for your needs.",
  },
];
const SurveyingPage = () => (
  <PageTemplate title="Our Surveying Services" services={services} />
);

export default SurveyingPage;
