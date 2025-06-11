import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  // Default SEO values
  const defaultTitle = "AYRAJ Interiors - Luxury Interior Solutions in New Delhi";
  const defaultDescription = "Transform your space with AYRAJ Interiors - premium interior solutions including luxury wooden flooring, designer wallpapers, and custom furniture in New Delhi, India.";

  // Skip to main content for accessibility
  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <>
      <Helmet>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <link rel="canonical" href={`https://ayrajinteriors.com${path}`} />
      </Helmet>

      {/* Skip to main content button - visible only when focused */}
      <button
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Skip to main content
      </button>

      <div className="flex min-h-screen flex-col">
        <header role="banner" className="relative z-50">
          {/* Your existing header/navigation component */}
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          role="main"
          className="flex-grow"
        >
          {children}
        </main>

        <footer role="contentinfo" className="relative z-40">
          {/* Your existing footer component */}
        </footer>
      </div>
    </>
  );
};

export default Layout; 