import PageTemplate from '../components/PageTemplate ';
import { Brush, Devices, Palette, Accessibility, Code, PhoneIphone } from '@mui/icons-material';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating user-friendly and visually appealing designs.',
    icon: <Brush fontSize="large" color="action" />,
    image: 'https://source.unsplash.com/random?ui',
    details: 'Our UI/UX design services focus on creating user-friendly and visually appealing interfaces. We ensure that the design enhances the user experience and provides an intuitive interaction with your application or website. Our team of designers uses the latest tools and techniques to create engaging and functional designs that meet the specific needs of your target audience.'
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring your website looks great on all devices.',
    icon: <Devices fontSize="large" color="action" />,
    image: 'https://source.unsplash.com/random?responsive',
    details: 'Our responsive design services ensure that your website looks great and functions well on all devices, from desktops to smartphones. We use flexible layouts and media queries to create designs that adapt to different screen sizes, providing a seamless experience for your users, no matter how they access your site.'
  },
  {
    title: 'Branding & Identity',
    description: 'Developing a cohesive brand identity for your business.',
    icon: <Palette fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?branding',
    details: 'Our branding and identity services help you develop a cohesive and strong brand identity. From logo design to color schemes and typography, we ensure that your brand stands out and communicates your values effectively. Our designs are tailored to create a lasting impression and build brand recognition.'
  },
  {
    title: 'Accessibility Design',
    description: 'Designing websites that are accessible to everyone.',
    icon: <Accessibility fontSize="large" color="action" />,
    image: 'https://source.unsplash.com/random?accessibility',
    details: 'Our accessibility design services ensure that your website is usable by everyone, including people with disabilities. We follow the best practices and guidelines for web accessibility, such as WCAG, to create inclusive designs. Our goal is to make your site accessible to a wider audience, improving user experience and compliance.'
  },
  {
    title: 'Custom Web Design',
    description: 'Creating bespoke designs tailored to your business needs.',
    icon: <Code fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?custom',
    details: 'Our custom web design services are tailored to meet the specific needs of your business. We work closely with you to understand your goals and create a unique design that reflects your brand identity and appeals to your target audience. Our designs are not only visually appealing but also optimized for performance and usability.'
  },
  {
    title: 'Mobile App Design',
    description: 'Designing intuitive and engaging mobile app interfaces.',
    icon: <PhoneIphone fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?mobile',
    details: 'Our mobile app design services focus on creating intuitive and engaging interfaces for mobile applications. We ensure that the design is user-friendly and enhances the overall user experience. Our team uses the latest design trends and tools to create mobile app interfaces that are both functional and aesthetically pleasing.'
  }
];
const WebDesignPage = () => <PageTemplate title="Our Web Design Services" services={services} />;

export default WebDesignPage