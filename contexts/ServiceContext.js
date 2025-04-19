import { createContext, useContext } from 'react';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import BusinessIcon from '@mui/icons-material/Business';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import UpdateIcon from '@mui/icons-material/Update';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TokenIcon from '@mui/icons-material/Token';
import RouterIcon from '@mui/icons-material/Router';

export const servicesData = {
  services: {
    cols: 3,
    sections: {
      webDev: {
        title: 'Web Development',
        icon: <WebIcon />,
        description: 'Modern web solutions for your business',
        items: [
          { 
            title: 'Frontend Development',
            icon: <CodeIcon />,
            description: 'Responsive and interactive user interfaces',
            link: '/services/frontend-development',
            featured: true
          },
          { 
            title: 'Backend Development',
            icon: <TerminalIcon />,
            description: 'Scalable server-side solutions',
            link: '/services/backend-development',
            featured: true
          },
          { 
            title: 'Full Stack Development',
            icon: <WebAssetIcon />,
            description: 'End-to-end web applications',
            link: '/services/fullstack-development',
            featured: true
          },
          { 
            title: 'E-commerce Solutions',
            icon: <ShoppingCartIcon />,
            description: 'Custom online store development',
            link: '/services/ecommerce',
            featured: true
          }
        ]
      },
      mobileDev: {
        title: 'Mobile Development',
        icon: <PhoneIphoneIcon />,
        description: 'Native and cross-platform apps',
        items: [
          { 
            title: 'iOS Development',
            icon: <AppleIcon />,
            description: 'Native iOS applications',
            link: '/services/ios-development'
          },
          { 
            title: 'Android Development',
            icon: <AndroidIcon />,
            description: 'Native Android applications',
            link: '/services/android-development'
          }
        ]
      },
      cloudServices: {
        title: 'Cloud & DevOps',
        icon: <CloudIcon />,
        description: 'Cloud infrastructure solutions',
        items: [
          { 
            title: 'AWS Solutions',
            icon: <StorageIcon />,
            description: 'Amazon Web Services integration',
            link: '/services/aws'
          },
          { 
            title: 'DevOps Implementation',
            icon: <BuildIcon />,
            description: 'Streamline your development pipeline',
            link: '/services/devops'
          }
        ]
      }
    }
  },
  solutions: {
    cols: 2,
    sections: {
      enterprise: {
        title: 'Enterprise Solutions',
        icon: <BusinessIcon />,
        description: 'Enterprise-grade digital solutions',
        items: [
          { 
            title: 'Digital Transformation',
            icon: <AutorenewIcon />,
            description: 'Modernize your business processes',
            link: '/solutions/digital-transformation'
          },
          { 
            title: 'Legacy Modernization',
            icon: <UpdateIcon />,
            description: 'Update legacy systems',
            link: '/solutions/legacy-modernization'
          }
        ]
      },
      specialized: {
        title: 'Specialized Solutions',
        icon: <PsychologyIcon />,
        description: 'Cutting-edge technology solutions',
        items: [
          { 
            title: 'AI & ML Solutions',
            icon: <PsychologyIcon />,
            description: 'Intelligent automation solutions',
            link: '/solutions/ai-ml'
          },
          { 
            title: 'Blockchain',
            icon: <TokenIcon />,
            description: 'Decentralized applications',
            link: '/solutions/blockchain'
          },
          { 
            title: 'IoT Solutions',
            icon: <RouterIcon />,
            description: 'Connected device ecosystems',
            link: '/solutions/iot'
          }
        ]
      }
    }
  }
};

const ServiceContext = createContext();

export function ServiceProvider({ children }) {
  return (
    <ServiceContext.Provider value={servicesData}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
}

export default ServiceContext;