import PageTemplate from '../components/PageTemplate ';
import { Brush, Palette, Photo, FormatPaint, Print, Edit } from '@mui/icons-material';

const services = [
  {
    title: 'Logo Design',
    description: 'Creating unique and memorable logos.',
    icon: <Brush fontSize="large" color="primary" />,
    image: 'https://source.unsplash.com/random?logo-design',
    details: 'Our logo design services create unique and memorable logos that represent your brand identity. We work closely with you to understand your vision and deliver a logo that stands out.'
  },
  {
    title: 'Brand Identity',
    description: 'Developing cohesive brand identities.',
    icon: <Palette fontSize="large" color="secondary" />,
    image: 'https://source.unsplash.com/random?brand-identity',
    details: 'Our brand identity services develop cohesive and strong brand identities. From color schemes to typography, we ensure your brand is consistently represented across all platforms.'
  },
  {
    title: 'Photo Editing',
    description: 'Enhancing and retouching photos.',
    icon: <Photo fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?photo-editing',
    details: 'Our photo editing services enhance and retouch your photos to make them look their best. We use advanced tools and techniques to improve quality, correct colors, and add special effects.'
  },
  {
    title: 'Illustrations',
    description: 'Creating custom illustrations.',
    icon: <FormatPaint fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?illustrations',
    details: 'Our illustration services create custom illustrations that bring your ideas to life. Whether for print or digital media, we provide high-quality illustrations tailored to your needs.'
  },
  {
    title: 'Print Design',
    description: 'Designing for print materials.',
    icon: <Print fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?print-design',
    details: 'Our print design services create high-quality designs for all your print materials. From business cards to brochures, we ensure your print materials are professional and visually appealing.'
  },
  {
    title: 'Digital Design',
    description: 'Creating digital assets for web and mobile.',
    icon: <Edit fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?digital-design',
    details: 'Our digital design services create digital assets for web and mobile platforms. We design user-friendly interfaces, social media graphics, and other digital content to enhance your online presence.'
  }
];
const GraphicDesignPage = () => <PageTemplate title="Our Graphic Design Services" services={services} />;

export default GraphicDesignPage