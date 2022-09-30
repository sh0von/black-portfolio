const title = 'Shovon'

const description = "Hi, my name is Shovon and I'm still figuring things out.";

const SEO = {
  title,
  description,
  canonical: "https://crywolf.me",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://crywolf.me",
    title,
    description,
    images: [
      {
        url: "https://crywolf.me/media/banner.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@shovon",
    site: "@shovon",
    cardType: "summary_large_image",
  },
};

export default SEO;