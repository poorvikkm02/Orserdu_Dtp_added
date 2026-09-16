import localFont from "next/font/local";
import "./globals.css";
import "@/styles/fonts.css";
import dynamic from "next/dynamic";
import { StoreContextProvider } from "@/context/SlideUpContext";
import { ResponsiveContextProvider } from "@/context/ResponsiveContext";
import Script from "next/script";
import { Suspense } from "react";

const Navbar = dynamic(() => import("@/components/navbars/Navbar"), { ssr: false });
const FooterPopUp = dynamic(() => import("@/components/footer/FooterPopup"), { ssr: false });
const OrientationGuard = dynamic(() => import("@/components/OrientationGuard"), { ssr: false });
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), { ssr: false });
const DataLayerTracker = dynamic(() => import("@/components/DataLayer/datalayer"), { ssr: false });
const CookieSettingsInit = dynamic(() => import("@/components/cookiesetting/CookieSetting"), { ssr: false });

export const metadata = {
  title: "ORSERDU® (elacestrant) | FDA-Approved Treatment for ESR1-Mutated mBC",
  description:
    "Discover ORSERDU® (elacestrant), an FDA-approved prescription treatment specifically for ESR1-mutated ER+/HER2- metastatic breast cancer ",
  authors: [{ name: "ORSERDU® (elacestrant)" }],
  robots: "index, follow",
  keywords:
    "ORSERDU, elacestrant, ESR1-mutated breast cancer, ER+/HER2- metastatic breast cancer, FDA-approved breast cancer treatment, ESR1 mutation therapy",
  verification: {
    google: "Y3XuUulSkQtx4MSuCuqsKWsW2GI-4tcybWompqTrClE",
  },
  openGraph: {
    title: "ORSERDU® (elacestrant) | FDA-Approved Treatment for ESR1-Mutated mBC",
    description:
      "Discover ORSERDU® (elacestrant), an FDA-approved prescription treatment specifically for ESR1-mutated ER+/HER2- metastatic breast cancer ",
    url: "https://www.orserdu.com/",
    images: [{ url: "https://www.orserdu.com/images/logos/orserdu-logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORSERDU® (elacestrant) | FDA-Approved Treatment for ESR1-Mutated mBC",
    description:
      "Discover ORSERDU® (elacestrant), an FDA-approved prescription treatment specifically for ESR1-mutated ER+/HER2- metastatic breast cancer ",
    images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"],
  },
  alternates: {
    canonical: "https://www.orserdu.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/Image/favicon.ico" />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KW6J9LB');
          `}
        </Script>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KW6J9LB"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {/* OneTrust Cookies Consent */}
        <Script 
          src="https://cdn.cookielaw.org/consent/d625a6e7-7ed3-4386-a2ba-0be63aa9ef38/OtAutoBlock.js"
          strategy="afterInteractive"
        />
        <Script 
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          strategy="afterInteractive"
          data-document-language="true"
          data-domain-script="e381d75a-bc22-4967-a5fa-0a87cad1e1d9"
        />
        <Script id="one-trust-wrapper" strategy="afterInteractive">
          {`
            function OptanonWrapper() {
              // Your OneTrust wrapper function
            }
          `}
        </Script>
        
        {/* AIM Tag */}
        <Script 
          src="https://aim-tag.hcn.health/js/client.js?dl=aimDataLayer&target=ie11"
          strategy="afterInteractive"
          noModule
        />
        <Script 
          src="https://aim-tag.hcn.health/js/client.js?dl=aimDataLayer"
          strategy="afterInteractive"
          type="module"
        />
        <Script id="aim-tag-init" strategy="afterInteractive">
          {`
            window.aimDataLayer = window.aimDataLayer || [];
            function aimTag() { aimDataLayer.push(arguments); }
            aimTag('372c58a1-e577-4f25-82c7-7f6fae331789', 'pageview');
            
            // If your contract includes signal, then callback will include personal information on the visitor
            aimTag('372c58a1-e577-4f25-82c7-7f6fae331789', 'signal', function(err, success) {
                if (err) {
                    // This will occur if we disable your API Key
                    console.log(err);
                } else {
                    console.log(success);
                    if (success.identity_type === "AUT") {
                        // Handle signal callback here
                    }
                }
            });
          `}
        </Script>

        <StoreContextProvider>
          <ResponsiveContextProvider>
            {/* Add NoScript alternative for Google Tag Manager */}
            <noscript>
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-KW6J9LB"
                height="0" 
                width="0" 
                style={{display: 'none', visibility: 'hidden'}}
              />
            </noscript>
            
            <Suspense fallback={null}>
              <OrientationGuard />
            </Suspense>
            
            <DataLayerTracker />
            <CookieSettingsInit />
            <GoogleAnalytics />
            
            <Navbar />
            {children}
            <FooterPopUp />
          </ResponsiveContextProvider>
        </StoreContextProvider>
      </body>
    </html>
  );
}