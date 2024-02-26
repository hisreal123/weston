import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageLayout = () => {
  const location = useLocation();

  // Define an array of paths where you want to hide Navigation and Footer
  const hideNavigationFooterPaths = ["/blog", "/blog/:_id"];

  // Check if the current path is in the hideNavigationFooterPaths array
  const shouldHideNavigationFooter = hideNavigationFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div>
      {!shouldHideNavigationFooter && <Navigation />}
      <Outlet />
      {!shouldHideNavigationFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
