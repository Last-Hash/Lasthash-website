import { useServices } from '../contexts/ServiceContext';

export function useServiceData() {
  const services = useServices();

  const getServiceBySlug = (slug) => {
    // Search through all services and solutions
    for (const category of ['services', 'solutions']) {
      for (const sectionKey in services[category].sections) {
        const section = services[category].sections[sectionKey];
        const item = section.items.find(item => item.link === `/services/${slug}` || item.link === `/solutions/${slug}`);
        if (item) {
          return {
            ...item,
            category,
            section: section.title
          };
        }
      }
    }
    return null;
  };

  const getAllServices = () => {
    const allServices = [];
    for (const category of ['services', 'solutions']) {
      for (const sectionKey in services[category].sections) {
        const section = services[category].sections[sectionKey];
        section.items.forEach(item => {
          allServices.push({
            ...item,
            category,
            section: section.title
          });
        });
      }
    }
    return allServices;
  };

  return {
    services,
    getServiceBySlug,
    getAllServices
  };
}