export const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  