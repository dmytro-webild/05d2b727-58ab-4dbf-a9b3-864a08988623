import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Diaco's Supply"
        navItems={navItems}
        ctaButton={{ text: "View Catalog", href: "/catalog" }}
      />

      <main>
        <HeroSplit
          tag="Restaurant & Bakery Supply"
          title="Quality Ingredients, Trusted by Restaurants and Bakeries"
          description="Diaco's Restaurant Supply Group is a wholesale supplier of premium bakery and food-service ingredients — flours, dairy, fillings, glazes, and chocolate. We keep kitchens stocked with reliable products from trusted brands, backed by fast fulfillment and dedicated support."
          primaryButton={{ text: "Explore Ingredients", href: "/catalog" }}
          secondaryButton={{ text: "Contact Sales", href: "/contact" }}
          imageSrc="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"
          textAnimation="slide-up"
        />

        <AboutTextSplit
          title="Best Ingredients, Better Quality, Better Customers"
          descriptions={[
            "We believe great food starts with great ingredients. That's why we partner with trusted names in the industry to bring restaurants and bakeries the flours, fillings, dairy, and chocolate they can depend on — at competitive wholesale prices, with the reliability commercial kitchens need."
          ]}
          primaryButton={{ text: "Our Product Line", href: "/catalog" }}
          textAnimation="fade-blur"
        />

        <FeaturesTaggedCards
          tag="Partner Brands"
          title="Trusted Industry Suppliers"
          description="We collaborate exclusively with leading manufacturers to guarantee consistent quality and kitchen performance."
          items={[
            {
              tag: "Flours & Mixes",
              title: "Pillsbury",
              description: "Premium bakery flours, specialty dough bases, and high-performance commercial cake mixes.",
              imageSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
            },
            {
              tag: "Dairy Specialties",
              title: "Philadelphia",
              description: "Cream cheese, cultured dairy, and velvet smooth fillings for cheesecakes and pastries.",
              imageSrc: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600"
            },
            {
              tag: "Patisserie & Chocolate",
              title: "Puratos",
              description: "European chocolate, artisan bread improvers, and rich specialty glazes for bakeries.",
              imageSrc: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
            },
            {
              tag: "Fillings & Icings",
              title: "Henry & Henry",
              description: "Real fruit fillings, mirror glazes, and ready-to-use icings engineered for volume baking.",
              imageSrc: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=600"
            }
          ]}
          textAnimation="slide-up"
        />

        <FeaturesIconCards
          tag="The Diaco Advantage"
          title="Why Work With Diaco's Restaurant Supply?"
          description="Built specifically for the demands of fast-paced commercial kitchens and high-volume wholesale bakeries."
          features={[
            {
              icon: "Truck",
              title: "Reliable Supply",
              description: "Consistent inventory stock and rapid fulfillment schedules so your kitchen never runs short."
            },
            {
              icon: "ShieldCheck",
              title: "Trusted Brands",
              description: "We only carry ingredients from proven suppliers that executive chefs and head bakers trust."
            },
            {
              icon: "BadgePercent",
              title: "Wholesale Pricing",
              description: "Transparent and competitive tiered pricing built for restaurants and bakeries ordering at volume."
            }
          ]}
          textAnimation="fade-blur"
        />

        <ContactCta
          tag="Get Started Today"
          text="Ready to Stock Your Kitchen?"
          primaryButton={{ text: "View Catalog", href: "/catalog" }}
          secondaryButton={{ text: "Request a Wholesale Quote", href: "/contact" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Diaco's Supply"
        columns={[
          {
            title: "Quick Links",
            items: navItems
          }
        ]}
        copyright="© 2025 Diaco's Restaurant Supply Group. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}