import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "#catalog" },
    { name: "About", href: "/about" },
  ];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Diacos Restaurant Supply"
      ctaButton={{
        text: "Contact",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Diacos Restaurant Supply Group"
      columns={[
        {
          title: "Store",
          items: [
            {
              label: "All Products",
              href: "#catalog",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
            {
              label: "Sale",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Shipping",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Diacos Restaurant Supply Group. All rights reserved."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Twitter",
          href: "#",
        },
        {
          label: "Pinterest",
          href: "#",
        },
      ]}
      imageSrc="https://picsum.photos/seed/1622822201/1200/800"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
