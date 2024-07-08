import PageTemplate from '../components/PageTemplate ';
import { Brush, Palette, Photo, FormatPaint, Print, Edit } from '@mui/icons-material';
const services = [
  {
    title: 'Logo Design',
    description: 'Creating distinctive and memorable logos for brands worldwide.',
    icon: <Brush fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?logo-design',
    details: 'Our logo design services specialize in creating distinctive and memorable logos that resonate with your target audience. We collaborate closely with you to capture your brand essence and deliver a logo that stands the test of time, ensuring it reflects your unique identity and vision.'
  },
  {
    title: 'Brand Identity',
    description: 'Developing cohesive brand identities that resonate and inspire.',
    icon: <Palette fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?brand-identity',
    details: 'Our brand identity services focus on developing cohesive and impactful brand identities that resonate with your audience and inspire trust. From defining comprehensive visual systems to crafting compelling brand narratives, we ensure every touchpoint reflects your brand\'s core values and connects authentically with your customers.'
  },
  {
    title: 'Photo Editing',
    description: 'Enhancing and retouching photographs with precision and creativity.',
    icon: <Photo fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?photo-editing',
    details: 'Our photo editing services offer precise enhancements and creative retouching to bring out the best in your photographs. Utilizing advanced techniques and a keen eye for detail, we elevate your images to new heights, ensuring they captivate viewers and convey your intended message effectively.'
  },
  {
    title: 'Illustrations',
    description: 'Creating bespoke illustrations that tell compelling stories.',
    icon: <FormatPaint fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?illustrations',
    details: 'Our illustration services specialize in creating bespoke artwork that tells compelling stories and resonates with your audience. Whether for digital or print media, our team of talented illustrators brings your ideas to life with creativity and attention to detail, ensuring each illustration enhances your brand\'s narrative and visual identity.'
  },
  {
    title: 'Print Design',
    description: 'Designing impactful and visually engaging print materials.',
    icon: <Print fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?print-design',
    details: 'Our print design services focus on creating impactful and visually engaging designs for various print materials. From elegant business cards to informative brochures, we combine artistic flair with strategic thinking to ensure your print materials stand out and effectively communicate your message to your target audience.'
  },
  {
    title: 'Digital Design',
    description: 'Crafting engaging digital assets that enhance online presence.',
    icon: <Edit fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?digital-design',
    details: 'Our digital design services specialize in crafting engaging digital assets optimized for web and mobile platforms. We create user-friendly interfaces, dynamic social media graphics, and interactive digital content that enhance your online presence and engage your audience effectively.'
  }
];


const GraphicDesignPage = () => <PageTemplate title="Our Graphic Design Services" services={services} />;

export default GraphicDesignPage