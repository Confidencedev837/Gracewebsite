"use client"
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

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
