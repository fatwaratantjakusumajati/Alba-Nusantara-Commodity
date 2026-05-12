import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};

const setMetaTag = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>("link[rel=\"canonical\"]");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

const Seo = ({ title, description, image, noIndex = false }: SeoProps) => {
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const fullUrl = `${window.location.origin}${location.pathname}`;

    document.title = title;
    document.documentElement.lang = lang;

    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", noIndex ? "noindex,follow" : "index,follow");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:site_name", "Alba Nusantara Commodity");

    if (image) {
      setMetaTag("property", "og:image", image);
      setMetaTag("name", "twitter:image", image);
    }

    setCanonical(fullUrl);
  }, [title, description, image, lang, location.pathname, noIndex]);

  return null;
};

export default Seo;
