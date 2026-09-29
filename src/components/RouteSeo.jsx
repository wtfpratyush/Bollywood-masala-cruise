import { useLocation } from "react-router-dom";
import { popularCruises, allPackages } from "../mock";

// Keep in sync with public/index.html's static defaults.
const SITE_NAME = "Bollywood Masala Cruise";
const DEFAULT_IMAGE = "/images/hero-cruise-ship.jpg";

const toSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");

// Wording below is taken directly from each page's own <PageBanner>/hero copy
// (see src/pages/*.jsx) so descriptions stay accurate to what's on the page.
const STATIC_ROUTES = {
  "/": {
    title: `${SITE_NAME} | Luxury Bollywood-Themed Cruise Experience`,
    description:
      "Sail into a world of luxury, entertainment, and unforgettable moments aboard the Bollywood Masala Cruise — everything you need for the perfect getaway, all in one place.",
  },
  "/about": {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Discover the story, passionate vision, and dedicated team behind the premier Bollywood Masala Cruise.",
  },
  "/packages": {
    title: `Cruise Packages | ${SITE_NAME}`,
    description:
      "Experience luxury Bollywood-themed cruising with gourmet Indian dining, star performances, and breathtaking ports of call.",
  },
  "/onboard": {
    title: `Onboard Experience | ${SITE_NAME}`,
    description:
      "From Bollywood nights to sunrise deck walks — every moment aboard is crafted for joy.",
  },
  "/gallery": {
    title: `Gallery | ${SITE_NAME}`,
    description:
      "Real moments from real cruises — parties, performances, destinations and memories that last a lifetime.",
  },
  "/testimonials": {
    title: `Testimonials | ${SITE_NAME}`,
    description:
      "Real stories and unfiltered experiences from guests who sailed with Bollywood Masala Cruise.",
  },
  "/faq": {
    title: `FAQ | ${SITE_NAME}`,
    description: "Everything you need to know before you set sail with us.",
  },
  "/contact": {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      "Have a question or ready to book? Our cruise experts are here to help.",
  },
};

function getPackageSeo(slug) {
  const all = [...(popularCruises || []), ...(allPackages || [])];
  const cruise = all.find((c) => toSlug(c.title) === slug);

  if (!cruise) {
    // Falls back to the generic packages description; CruiseDetail itself
    // renders a "Cruise not found" state for unknown slugs.
    return STATIC_ROUTES["/packages"];
  }

  const description =
    cruise.details?.tagline ||
    `${cruise.title} — ${cruise.subtitle}. ${(cruise.features || []).join(", ")}.`;

  return {
    title: `${cruise.title} | ${SITE_NAME}`,
    description,
    image: cruise.details?.banner || cruise.image,
  };
}

const toAbsolute = (origin, path) =>
  !path ? "" : path.startsWith("http") ? path : `${origin}${path}`;

/**
 * Renders per-route document metadata using React 19's native support for
 * <title>/<meta>/<link> — these are hoisted into <head> automatically no
 * matter where in the tree they're rendered. Must be rendered inside
 * <BrowserRouter> so useLocation is available.
 */
const RouteSeo = () => {
  const { pathname } = useLocation();

  const isPackageDetail =
    pathname.startsWith("/packages/") && pathname !== "/packages/";
  const seo = isPackageDetail
    ? getPackageSeo(pathname.split("/packages/")[1]?.split("/")[0])
    : STATIC_ROUTES[pathname] || STATIC_ROUTES["/"];

  const origin =
    typeof window !== "undefined" && window.location
      ? window.location.origin
      : "";
  const canonical = `${origin}${pathname}`;
  const image = toAbsolute(origin, seo.image) || toAbsolute(origin, DEFAULT_IMAGE);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default RouteSeo;
