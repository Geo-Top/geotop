import PageTemplate from '../components/PageTemplate ';
import { Code, Web, Storage, Security, BugReport, Cloud } from '@mui/icons-material';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building interactive and responsive user interfaces.',
    icon: <Web fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?frontend',
    details: 'Our frontend development services focus on creating interactive and responsive user interfaces using modern technologies like HTML, CSS, and JavaScript. We ensure that the user interface is both visually appealing and functional, providing an excellent user experience across different devices and platforms.'
  },
  {
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side applications.',
    icon: <Storage fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?backend',
    details: 'Our backend development services include creating robust and scalable server-side applications using languages like Node.js, Python, and PHP. We focus on building secure and efficient APIs, databases, and server logic to support your application’s frontend and ensure seamless performance.'
  },
  {
    title: 'Web Security',
    description: 'Ensuring your web application is secure from threats.',
    icon: <Security fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?security',
    details: 'Our web security services aim to protect your web applications from various security threats. We conduct thorough security audits, implement best practices for data protection, and use advanced tools to detect and mitigate vulnerabilities, ensuring your application is secure and compliant with industry standards.'
  },
  {
    title: 'Bug Fixing & Maintenance',
    description: 'Providing ongoing support and maintenance for your web applications.',
    icon: <BugReport fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?maintenance',
    details: 'Our bug fixing and maintenance services ensure that your web applications run smoothly and efficiently. We offer ongoing support to identify and fix bugs, update software components, and improve performance, keeping your application reliable and up-to-date with the latest technologies.'
  },
  {
    title: 'Cloud Integration',
    description: 'Integrating your web applications with cloud services.',
    icon: <Cloud fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?cloud',
    details: 'Our cloud integration services help you connect your web applications with various cloud platforms such as AWS, Google Cloud, and Azure. We enable seamless data synchronization, scalable infrastructure, and enhanced performance, allowing your applications to leverage the full potential of cloud computing.'
  },
  {
    title: 'Custom Web Development',
    description: 'Creating tailored web solutions to meet your specific needs.',
    icon: <Code fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?custom',
    details: 'Our custom web development services are designed to create unique and tailored solutions that meet the specific requirements of your business. From custom CMS development to bespoke web applications, we deliver high-quality solutions that align with your goals and provide a competitive edge in the market.'
  }
];
const WebDevelopmentPage = () => <PageTemplate title="Our Web Development Services" services={services} />;

export default WebDevelopmentPage;
