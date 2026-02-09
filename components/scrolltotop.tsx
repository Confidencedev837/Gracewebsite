import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
 
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      
      window.scrollTo(0, 0);
    } catch (error) {
     
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname]);

  return null; 
};

export default ScrollToTop;