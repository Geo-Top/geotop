import { PhoneAndroid, Build, Security, BugReport, CloudQueue, Code } from '@mui/icons-material';
import PageTemplate from '../components/PageTemplate ';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Creating high-performance mobile applications for iOS and Android.',
    icon: <PhoneAndroid fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?mobile-app',
    details: 'Our mobile app development services offer custom solutions for iOS and Android platforms. We focus on creating high-performance, user-friendly, and visually appealing mobile applications that cater to your business needs. Using the latest technologies, we ensure your app is responsive, secure, and scalable.'
  },
  {
    title: 'App Maintenance',
    description: 'Providing ongoing support and maintenance for mobile applications.',
    icon: <Build fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?maintenance',
    details: 'Our app maintenance services ensure your mobile applications remain up-to-date and function smoothly. We offer regular updates, bug fixes, performance improvements, and new feature integrations to keep your app running efficiently and effectively.'
  },
  {
    title: 'Mobile Security',
    description: 'Ensuring your mobile app is secure from various threats.',
    icon: <Security fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?security',
    details: 'Our mobile security services protect your applications from potential threats and vulnerabilities. We conduct thorough security audits, implement best practices for data protection, and use advanced tools to secure your app, ensuring the safety and privacy of your users.'
  },
  {
    title: 'Bug Fixing',
    description: 'Identifying and resolving issues in your mobile applications.',
    icon: <BugReport fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?bug-fixing',
    details: 'Our bug fixing services help identify and resolve issues in your mobile applications promptly. We focus on providing quick and efficient solutions to enhance the performance and reliability of your app, ensuring a seamless user experience.'
  },
  {
    title: 'Cloud Integration',
    description: 'Integrating your mobile applications with cloud services.',
    icon: <CloudQueue fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?cloud',
    details: 'Our cloud integration services enable seamless connectivity between your mobile applications and cloud platforms like AWS, Google Cloud, and Azure. We ensure efficient data synchronization, scalable infrastructure, and enhanced performance, leveraging the full potential of cloud computing for your app.'
  },
  {
    title: 'Custom Development',
    description: 'Creating tailored mobile solutions to meet your specific needs.',
    icon: <Code fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?custom-development',
    details: 'Our custom mobile development services cater to the unique requirements of your business. From bespoke mobile apps to specific feature integrations, we deliver high-quality solutions that align with your objectives, providing a competitive edge in the market.'
  }
];

const MobileDevelopmentPage = () => <PageTemplate title="Our Mobile Application Services" services={services} />;

export default MobileDevelopmentPage;