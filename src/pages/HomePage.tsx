import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import { Award, CheckCircle, Sparkles } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="home" data-section="home">
    <SectionErrorBoundary name="home">
          <HeroBillboardTiltedCarousel
      tag="Since 1984"
      title="Exquisite Supplies for Modern Life"
      description="Discover a curated selection of artisanal goods, crafted with precision and passion for your home and lifestyle."
      primaryButton={{
        text: "View Catalog",
        href: "#catalog",
      }}
      secondaryButton={{
        text: "Our Story",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-working-with-flowers_23-2149591604.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-desk-concept_23-2147791084.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646558.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-style-metal-with-different-metallic-textures_1048-13647.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646508.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-autumn-composition-with-decorative-details-candles_169016-23374.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Artisanal Integrity"
      title="Crafted to Last"
      description="Every item in our collection is hand-selected from artisans who value quality over volume. We bridge the gap between tradition and modern necessity."
      items={[
        {
          icon: CheckCircle,
          title: "Handcrafted Excellence",
          description: "Strict quality control on every batch.",
        },
        {
          icon: Sparkles,
          title: "Curated Design",
          description: "Pieces that tell a unique story.",
        },
        {
          icon: Award,
          title: "Legacy Quality",
          description: "Built to endure decades of use.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/laptop-skincare-supplies_23-2147711561.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="catalog" data-section="catalog">
    <SectionErrorBoundary name="catalog">
          <FeaturesImageBento
      tag="Collections"
      title="Shop the Collection"
      description="Explore our curated categories, each representing a facet of refined modern living."
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263160.jpg",
          title: "Ceramics",
          description: "Hand-turned clay pieces.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646500.jpg",
          title: "Textiles",
          description: "Ethically sourced fabrics.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-dining-table-arrangement_23-2150312214.jpg",
          title: "Lighting",
          description: "Ambient, warm glow.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-restoring-wooden-chair_23-2150062422.jpg",
          title: "Decor",
          description: "Statement accessories.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ceramic-pottery-tools-still-life_23-2150197292.jpg",
          title: "Tools",
          description: "Utility meets design.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-beach-bag-ready-travel_23-2150440675.jpg",
          title: "Storage",
          description: "Organize in elegance.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-pots-near-bag-with-gardening-tools_23-2147714847.jpg",
          title: "Seasonal",
          description: "Limited batch arrivals.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="The Impact"
      title="Measured by Quality"
      description="Numbers reflect our commitment to excellence."
      metrics={[
        {
          value: "12k+",
          title: "Items Curated",
          features: [
            "Validated origin",
            "Sustainable sourcing",
            "Quality inspected",
          ],
        },
        {
          value: "450+",
          title: "Partner Artisans",
          features: [
            "Fair trade practices",
            "Long-term relationships",
            "Direct support",
          ],
        },
        {
          value: "98%",
          title: "Satisfaction Rate",
          features: [
            "Lifetime support",
            "Easy returns",
            "Quality assured",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Kind Words"
      title="Stories from Our Community"
      description="Trusted by discerning individuals worldwide."
      testimonials={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-casully-dressed-young-latin-woman-sitting-windowsill-kitchen-holding-cell-phone-checking-newsfeed-via-social-network-typing-text-message-having-rest-technology-communication_344912-2094.jpg",
          name: "Elena Ross",
          role: "Designer",
          company: "Studio N",
          rating: 5,
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/influencer-holding-coffee-cup-recording-podcast-home-studio_482257-7797.jpg",
          name: "Mark Vane",
          role: "Architect",
          company: "Vane Associates",
          rating: 5,
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-bearded-man-with-cheerful-expression-pointing-thumb-his-girlfriend-sunglasses-while-telling-jokes_273609-6608.jpg",
          name: "Sarah Lee",
          role: "Collector",
          company: "Independent",
          rating: 5,
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-with-eyeglasses-holding-shopping-bags_23-2147823601.jpg",
          name: "James K.",
          role: "Chef",
          company: "Bistro 4",
          rating: 5,
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-people-modeling-photoshoot_273609-12739.jpg",
          name: "Chloe B.",
          role: "Stylist",
          company: "Mode",
          rating: 5,
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="In Partnership"
      title="Selected Partners"
      description="Collaborating with visionaries globally."
      names={[
        "Studio Co",
        "Modern Home",
        "Design Hub",
        "Artisan Lab",
        "Urban Living",
        "Decor Daily",
        "Refined Life",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Support"
      title="Frequently Asked"
      description="Everything you need to know about our sourcing."
      items={[
        {
          question: "Are products artisanal?",
          answer: "Yes, every single piece is hand-finished.",
        },
        {
          question: "What is the return policy?",
          answer: "We offer returns within 30 days of delivery.",
        },
        {
          question: "Can I request custom items?",
          answer: "Certain artisans accept custom commissions.",
        },
        {
          question: "Where do you ship?",
          answer: "We ship globally to over 50 countries.",
        },
        {
          question: "Are materials sustainable?",
          answer: "We prioritize eco-friendly and reclaimed materials.",
        },
        {
          question: "What is the lead time?",
          answer: "In-stock items ship within 48 hours.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in touch"
      text="Ready to bring artisanal quality to your space? Let's connect."
      primaryButton={{
        text: "Email Us",
        href: "mailto:hello@diacos.com",
      }}
      secondaryButton={{
        text: "Call Support",
        href: "tel:+1234567890",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
