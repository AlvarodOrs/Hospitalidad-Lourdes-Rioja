import Nav from "@/components/Nav";
import Cover from "@/components/sections/Cover";
import Metrics from "@/components/sections/Metrics";
import Intro from "@/components/sections/Intro";
import Overview from "@/components/sections/Overview";
import HighlightsDates from "@/components/sections/HighlightsDates";
import Testimonial from "@/components/sections/Testimonial";
import More from "@/components/sections/More";
import Media from "@/components/sections/Media";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

import themes from "@/lib/content/themes.json";

export default function HomePage() {
  const theme =themes.themes.inicio;

  return (
    <>
    <Nav theme={theme.nav} />
    <Cover theme={theme.cover} />
    <Metrics theme={theme.metrics} />
    <Intro theme={theme.intro} />
    <Overview theme={theme.overview} />
    <HighlightsDates theme={theme.highlightsDates} />
    <Testimonial theme={theme.testimonial} />
    <More theme={theme.more} />
    <Media theme={theme.media} />
    <Contact theme={theme.contact} />
    <Footer theme={theme.footer} footerNav={false} />
    </>
  );
}
// import Slider from "@/hooks/Slider";
// import slidesData from "@/lib/content/slides.json";

// import Testimonials from "@/hooks/Testimonials";
// import testimonialData from "@/lib/content/quotes.json";