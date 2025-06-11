import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO: FC<SEOProps> = ({
  title = "AYRAJ Interiors - Luxury Interior Solutions in New Delhi",
  description = "Transform your space with AYRAJ Interiors - premium interior solutions including luxury wooden flooring, designer wallpapers, and custom furniture in New Delhi, India.",
  keywords = "interior design, luxury interiors, wooden flooring, designer wallpapers, custom furniture, New Delhi",
  image = "/og-image.jpg",
  url = "https://ayrajinteriors.com",
  type = "website",
  schema,
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://ayrajinteriors.com${url}`;
  const imageUrl = image.startsWith('http') ? image : `https://ayrajinteriors.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AYRAJ Interiors" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 