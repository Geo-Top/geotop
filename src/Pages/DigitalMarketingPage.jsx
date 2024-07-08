import PageTemplate from '../components/PageTemplate ';
import { Campaign, Analytics, Email, Search, SocialDistance, AttachMoney } from '@mui/icons-material';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Boost your online presence with targeted social media strategies.',
    icon: <SocialDistance fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?social-media',
    details: 'Our social media marketing services help you boost your online presence and engage with your audience through targeted strategies on various platforms such as Facebook, Instagram, Twitter, and LinkedIn.'
  },
  {
    title: 'SEO',
    description: 'Improve your website ranking on search engines.',
    icon: <Search fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?seo',
    details: 'Our SEO services improve your website’s ranking on search engines like Google. We use proven techniques to increase your visibility and drive organic traffic to your site.'
  },
  {
    title: 'Email Marketing',
    description: 'Create effective email campaigns to reach your customers.',
    icon: <Email fontSize="large" color="success" />,
    image: 'https://source.unsplash.com/random?email-marketing',
    details: 'Our email marketing services help you create effective email campaigns that reach your customers and drive conversions. We design and manage your email campaigns to ensure maximum engagement.'
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with high-quality content.',
    icon: <Campaign fontSize="large" color="error" />,
    image: 'https://source.unsplash.com/random?content-marketing',
    details: 'Our content marketing services create high-quality content that engages your audience and promotes your brand. We produce blogs, articles, videos, and other content tailored to your business needs.'
  },
  {
    title: '(PPC) Advertising',
    description: 'Increase traffic and sales with PPC campaigns.',
    icon: <AttachMoney fontSize="large" color="warning" />,
    image: 'https://source.unsplash.com/random?ppc',
    details: 'Our PPC advertising services help you increase traffic and sales through targeted PPC campaigns on platforms like Google Ads and Facebook Ads. We manage your campaigns to maximize your ROI.'
  },
  {
    title: 'Web Analytics',
    description: 'Analyze and improve your online performance.',
    icon: <Analytics fontSize="large" color="info" />,
    image: 'https://source.unsplash.com/random?web-analytics',
    details: 'Our web analytics services help you analyze and improve your online performance. We use advanced analytics tools to track your website traffic, user behavior, and key metrics to inform your marketing strategy.'
  }
];
const DigitalMarketingPage = () => <PageTemplate title="Our Digital Marketing Services" services={services} />;

export default DigitalMarketingPage