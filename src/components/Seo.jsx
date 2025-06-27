import { Helmet } from "@dr.pogodin/react-helmet";

// Universal SEO component can be ​​used on every page
const Seo = ({
  title,
  description,
  url,
  image = "https://kornet.dev/og-image.jpg",
  type = "website",
  canonical,
  jsonLd,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Author (optional) */}
    <meta name="author" content="Arkadiusz Rak" />

    {/* Canonical link (optional) */}
    {canonical && <link rel="canonical" href={canonical} />}

    {/* JSON-LD Structured Data (optional) */}
    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default Seo;
