// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSplitSection from './AboutPage/sections/HeroSplit';
import AboutTextSplitSection from './AboutPage/sections/AboutTextSplit';
import SocialProofMarqueeSection from './AboutPage/sections/SocialProofMarquee';
import FeaturesIconCardsSection from './AboutPage/sections/FeaturesIconCards';
import ContactCtaSection from './AboutPage/sections/ContactCta';

export default function AboutPage(): React.JSX.Element {
  return (
<>
      <HeroSplitSection />
      <AboutTextSplitSection />
      <SocialProofMarqueeSection />
      <FeaturesIconCardsSection />
      <ContactCtaSection />
    </>
  );
}
