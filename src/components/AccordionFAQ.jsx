"use client";
import React, { useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * AccordionFAQ
 *
 * Two usage modes:
 *
 * 1) Flat list — pass a single group of items:
 *      <AccordionFAQ items={[{ question, answer }]} />
 *
 * 2) Grouped sections — pass sections with titles:
 *      <AccordionFAQ sections={[{ sectionTitle, items: [{ question, answer }] }]} />
 *
 * Both `question` and `answer` support HTML strings (rendered via dangerouslySetInnerHTML).
 *
 * Optional props:
 *   className  — extra class on the root wrapper
 */

// ─── Single accordion item ───────────────────────────────────────────────────

const AccordionItem = ({ item, isOpen, onToggle, onLinkClick, isLast = false }) => {
  const router = useRouter();
  const handleAnswerClick = (e) => {
    const anchor = e.target.closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("http") || anchor.target === "_blank") return;
    e.preventDefault();
    if (onLinkClick) onLinkClick();
    router.push(href);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${isLast ? "" : "border-b-[1px] border-[#00000028]"}`}>
      {/* Trigger row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full relative overflow-hidden flex items-center gap-2 text-left py-5 px-0 focus:outline-none`}
      >
        <span
          className={`text-[18px] leading-[20px] font-[400] ${isOpen ? "text-black" : "text-black"
            }`}
          dangerouslySetInnerHTML={{ __html: item.question }}
        />

        {/* Chevron — right (collapsed) → down (expanded) */}
        <span
          className={`flex-shrink-0 text-dark_green transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
            }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </button>

      {/* Collapsible answer */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
          transition: "grid-template-rows 0.35s ease, opacity 0.3s ease",
        }}
      >
        <div className="overflow-hidden">
          <div
            onClick={handleAnswerClick}
            className={`pb-5 text-[18px] leading-[20px] text-gray-800 font-light space-y-3 `}
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      </div>
    </div>
  );
};

// ─── Group of items sharing one open-at-a-time state ─────────────────────────

const AccordionGroup = ({ items, openKeys, onToggle, onLinkClick, sectionIndex }) => (
  <>
    {items.map((item, i) => (
      <AccordionItem
        key={i}
        item={item}
        isOpen={openKeys.has(`${sectionIndex}-${i}`)}
        onToggle={() => onToggle(`${sectionIndex}-${i}`)}
        onLinkClick={onLinkClick}
        isLast={i === items.length - 1}
      />
    ))}
  </>
);

// ─── Public component ─────────────────────────────────────────────────────────

const AccordionFAQContent = ({ items, sections, className = "" }) => {
  const [openKeys, setOpenKeys] = useState(new Set());
  const searchParams = useSearchParams();

  React.useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const faqOpen = searchParams.get("faqOpen") || params.get("faqOpen");
      const scrollPos = searchParams.get("scrollPos") || params.get("scrollPos");
      
      if (faqOpen) {
        setOpenKeys(new Set(faqOpen.split(",")));
        // Clean up the URL so it doesn't persist if they refresh
        params.delete("faqOpen");
        params.delete("scrollPos");
        const newUrl = Array.from(params.keys()).length > 0 
          ? `${window.location.pathname}?${params.toString()}` 
          : window.location.pathname;
        window.history.replaceState(null, "", newUrl);

        if (scrollPos) {
          const pos = parseFloat(scrollPos);
          // Restore scroll immediately and after animation finishes
          const doScroll = () => window.scrollTo(0, pos);
          doScroll();
          setTimeout(doScroll, 10);
          setTimeout(doScroll, 100);
          setTimeout(doScroll, 350);
          setTimeout(doScroll, 800);
          setTimeout(doScroll, 1500);
        }
      }
    } catch (e) {}
  }, [searchParams]);

  const handleToggle = (key) => setOpenKeys((prev) => {
    const next = new Set(prev);
    next.has(key) ? next.delete(key) : next.add(key);
    return next;
  });

  const handleLinkClick = () => {
    try {
      if (openKeys.size > 0) {
        const params = new URLSearchParams(window.location.search);
        params.set("faqOpen", Array.from(openKeys).join(","));
        params.set("scrollPos", window.scrollY.toString());
        window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
      }
    } catch (e) {}
  };

  const normalisedSections =
    sections && sections.length > 0
      ? sections
      : [{ sectionTitle: null, items: items ?? [] }];

  return (
    <div className={`w-full ${className}`}>
      {normalisedSections.map((section, si) => (
        <div key={si}>
          {/* Yellow divider BETWEEN sections — not before the first */}
          {si > 0 && <div className="w-full h-[1px] bg-[#FFD506] mb-5" />}

          {section.sectionTitle && (
            <p className="text-[22px] xl:text-[22px] font-medium text-dark_green leading-[24px] mb-1">
              {section.sectionTitle}
            </p>
          )}
          <AccordionGroup items={section.items} openKeys={openKeys} onToggle={handleToggle} onLinkClick={handleLinkClick} sectionIndex={si} />
        </div>
      ))}
    </div>
  );
};

const AccordionFAQ = (props) => {
  return (
    <Suspense fallback={null}>
      <AccordionFAQContent {...props} />
    </Suspense>
  );
};

export default AccordionFAQ;
