import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-TFS4CQ42GT";

// Analytics component to track page views on route change
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event to Google Analytics every time the route changes
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // This component does not render anything
  return null;
};

export default Analytics;
