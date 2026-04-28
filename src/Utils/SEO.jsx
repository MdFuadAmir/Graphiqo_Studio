import { Helmet } from "react-helmet";

const SEO = ({
  title = "Graphiqo Studio | Creative Graphic Design & Branding",
  description = "Graphiqo Studio creates powerful visual identities, branding systems, and high-quality graphic design solutions that make brands stand out.",
  keywords = "Graphiqo Studio, graphic design, branding, logo design, visual identity, creative studio",
  image = "/preview.png",
  url = "",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Graphiqo Studio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="author" content="Graphiqo Studio" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
