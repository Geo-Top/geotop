import {
  ThreeDRotation,
  Animation,
  Photo,
  Scanner,
  Print,
  Apartment,
} from "@mui/icons-material";
import PageTemplate from "../components/PageTemplate ";

const services = [
  {
    title: "3D Modeling Services",
    description: "High-quality 3D modeling services for various applications.",
    icon: <ThreeDRotation fontSize="large" color="action" />,
    image: "https://source.unsplash.com/random?3dmodel",
    details:
      "Our 3D modeling services provide detailed and accurate representations of objects, environments, and concepts. Using advanced software and techniques, we create high-quality models that meet your specific needs, whether for visualization, simulation, or production purposes. Trust our team to deliver precise and visually appealing 3D models that bring your projects to life.",
  },
  {
    title: "3D Animation",
    description: "Dynamic 3D animations to showcase your ideas effectively.",
    icon: <Animation fontSize="large" color="action" />,
    image: "https://source.unsplash.com/random?3danimation",
    details:
      "Our 3D animation services bring your ideas to life through dynamic and engaging animations. We use cutting-edge technology to create animations that effectively communicate your vision, whether for marketing, education, or entertainment. Let our experts transform your concepts into captivating animated sequences that leave a lasting impression.",
  },
  {
    title: "3D Rendering",
    description: "Photorealistic 3D rendering services for stunning visuals.",
    icon: <Photo fontSize="large" color="success" />,
    image: "https://source.unsplash.com/random?3drendering",
    details:
      "Our 3D rendering services produce photorealistic images that enhance the visual appeal of your projects. We use advanced rendering software to create stunning visuals that accurately depict your designs. Whether you need renderings for presentations, marketing materials, or product showcases, our team ensures high-quality results that exceed your expectations.",
  },
  {
    title: "3D Scanning",
    description: "Precise 3D scanning services for accurate digital models.",
    icon: <Scanner fontSize="large" color="action" />,
    image: "https://source.unsplash.com/random?3dscanning",
    details:
      "Our 3D scanning services capture precise digital models of real-world objects and environments. Using state-of-the-art scanning technology, we provide accurate and detailed scans that can be used for analysis, replication, and more. Our 3D scanning solutions are ideal for industries such as manufacturing, heritage preservation, and medical applications.",
  },
  {
    title: "3D Printing",
    description:
      "Professional 3D printing services for rapid prototyping and production.",
    icon: <Print fontSize="large" color="error" />,
    image: "https://source.unsplash.com/random?3dprinting",
    details:
      "Our 3D printing services offer rapid prototyping and production solutions using advanced 3D printing technology. We create high-quality, durable prints from a variety of materials to meet your project requirements. From concept models to final products, our 3D printing services provide a cost-effective and efficient way to bring your designs to reality.",
  },
  {
    title: "Virtual Reality Modeling",
    description: "Immersive VR modeling services for interactive experiences.",
    icon: <Apartment fontSize="large" color="warning" />,
    image: "https://source.unsplash.com/random?vrmodeling",
    details:
      "Our VR modeling services create immersive and interactive experiences using virtual reality technology. We develop detailed VR models that allow users to explore and interact with your designs in a virtual environment. Whether for training, education, or entertainment, our VR modeling services provide a unique and engaging way to experience your projects.",
  },
];
const D3ModelingPage = () => (
  <PageTemplate title="Our 3d modeling Services" services={services} />
);

export default D3ModelingPage;
