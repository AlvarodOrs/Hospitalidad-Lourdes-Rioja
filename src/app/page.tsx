import { getPageContent } from "@/lib/content/loadPage";

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
  const content = getPageContent("inicio");

  return (
    <>
    <Nav theme={theme.nav} data={content.nav}/>
    <Cover theme={theme.cover} data={content.cover} />
    <Metrics theme={theme.metrics} data={content.metrics}/>
    <Intro theme={theme.intro} data={content.intro}/>
    <Overview theme={theme.overview} data={content.overview}/>
    <HighlightsDates theme={theme.highlightsDates} data={content.highlightsDates}/>
    <Testimonial theme={theme.testimonial} data={content.testimonial}/>
    <More theme={theme.more} data={content.more}/>
    <Media theme={theme.media} data={content.media}/>
    <Contact theme={theme.contact} data={content.contanct}/>
    <Footer theme={theme.footer} footerNav={false} data={content.footer}/>
    </>
  );
}
// import Slider from "@/hooks/Slider";
// import slidesData from "@/lib/content/slides.json";

// import Testimonials from "@/hooks/Testimonials";
// import testimonialData from "@/lib/content/quotes.json";