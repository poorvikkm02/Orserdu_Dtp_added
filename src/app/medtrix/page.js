"use client";
import React from "react";
import HeroContainer from "@/components/wrappers/HeroContainer";
import medtrixImg from "@/assets/images/medtrix/medtrix.png";
import logoImg from "@/assets/images/medtrix/logo.png";
import placeholder from "@/assets/images/medtrix/place.webp";
import berlineChemie from "@/assets/images/medtrix/Berline_chemie.png";
import abbvie from "@/assets/images/medtrix/abbvie.png";
import allergan from "@/assets/images/medtrix/allergan.png";
import cell from "@/assets/images/medtrix/cell.png";
import { useEffect, useState } from "react";

const clients = [
  { src: abbvie, alt: "AbbVie" },
  { src: allergan, alt: "Allergan" },
  { src: berlineChemie, alt: "Berlin Chemie" },
  { src: cell, alt: "Cell" },
];

const Medtrix = () => {
  const imageUrl = medtrixImg.src;
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [openStudy, setOpenStudy] = useState(null);
  const [resourceFilter, setResourceFilter] = useState("All");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const filteredResources =
    resourceFilter === "All"
      ? data.resources
      : data.resources.filter(
          (resource) => resource.category === resourceFilter
        );

  return (
    <HeroContainer
      img={imageUrl}
      imgClassName="w-full max-h-[500px] xl:max-h-[420px] object-cover object-center"
      navLink={"/savings-and-support"}
      navText={"Savings & resources"}
      alt={"MedTrix banner"}
    >
      {/* Hero Text + Images Section */}
      <div className="flex xl:flex-row flex-col items-center gap-6 p-6 xl:p-8">
        {/* Left: Text */}
        <div className="w-full xl:w-1/2">
          <h1 className="text-3xl xl:text-4xl font-bold text-dark_green mb-4">
            MedTrix — Catalyzing Healthcare
          </h1>
          <p className="text-[18px] leading-[26px] text-gray-700 mb-4 font-light">
            MedTrix is a growth catalyst for pharmaceutical and life science companies.
            We work with the science you've built, the teams you've assembled, and the brands
            you've invested in, to drive outcomes that are faster, bigger, and precise.
          </p>
          <p className="text-[18px] leading-[26px] text-gray-700 font-light">
            Our proven mix of science, creativity, technology, and strategy accelerates
            compliant, high-impact engagement across Medical Affairs and Commercial
            functions—exponentially. From launch through the lifecycle, we don't just
            support your growth. We Catalyze it.
          </p>
        </div>

        {/* Right: Logo + Placeholder side by side */}
        <div className="w-full xl:w-1/2 flex flex-row items-center justify-center gap-3 xl:gap-4">
          <img
            src={logoImg.src}
            alt="MedTrix Logo"
            className="w-1/2 max-w-[320px] h-auto object-contain"
          />
          <img
            src={placeholder.src}
            alt="MedTrix"
            className="w-1/2 max-w-[320px] h-auto object-contain rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* API Data Section */}
      <div id="resources" className="px-6 xl:px-10 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Medical Information
          </p>

          <h1 className="text-4xl xl:text-5xl font-bold text-dark_green">
            {data.drug.brandName}
          </h1>

          <p className="text-xl text-gray-600 mt-2">
            {data.drug.genericName}
          </p>
        </div>

        {/* Drug Information */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          <div className="bg-light_mint_green rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-2">Manufacturer</p>
            <p className="font-semibold text-dark_green">{data.drug.manufacturer}</p>
          </div>

          <div className="bg-light_mint_green rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-2">Drug Class</p>
            <p className="font-semibold text-dark_green">{data.drug.drugClass}</p>
          </div>

          <div className="bg-light_mint_green rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-2">Route</p>
            <p className="font-semibold text-dark_green">{data.drug.route}</p>
          </div>

          <div className="bg-light_mint_green rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-2">Recommended Dose</p>
            <p className="font-semibold text-dark_green">{data.dosage.recommended}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              ["overview", "Overview"],
              ["clinical", "Clinical Data"],
              ["dosage", "Dosage"],
              ["resources", "Resources"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`pb-4 whitespace-nowrap font-medium transition ${
                  activeTab === value
                    ? "text-dark_green border-b-2 border-dark_green"
                    : "text-gray-500 hover:text-dark_green"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <section>
            <h2 className="text-3xl font-semibold text-dark_green mb-4">
              Indication
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <p className="text-lg leading-8 text-gray-700">
                {data.indication.description}
              </p>
            </div>

            <h2 className="text-3xl font-semibold text-dark_green mb-4">
              About {data.drug.brandName}
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              {data.drug.brandName} ({data.drug.genericName}) is an
              oral treatment. Explore the clinical information,
              dosing information, and available resources using
              the sections above.
            </p>
          </section>
        )}

        {/* CLINICAL DATA */}
        {activeTab === "clinical" && (
          <section>
            <h2 className="text-3xl font-semibold text-dark_green mb-6">
              Clinical Studies
            </h2>

            <div className="space-y-4">
              {data.clinicalData.map((study, index) => {
                const isOpen = openStudy === index;

                return (
                  <div
                    key={study.name}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenStudy(isOpen ? null : index)
                      }
                      className="w-full flex justify-between items-center p-6 text-left"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-dark_green">
                          {study.name}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {study.type} · {study.status}
                        </p>
                      </div>

                      <span className="text-2xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-7">
                          {study.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* DOSAGE */}
        {activeTab === "dosage" && (
          <section>
            <h2 className="text-3xl font-semibold text-dark_green mb-6">
              Dosage & Administration
            </h2>

            <div className="bg-light_mint_green rounded-2xl p-6">
              <p className="text-gray-500 mb-2">Recommended dosage</p>

              <p className="text-2xl font-semibold text-dark_green mb-6">
                {data.dosage.recommended}
              </p>

              <p className="text-gray-500 mb-2">Administration</p>

              <p className="text-lg text-gray-700">
                {data.dosage.administration}
              </p>
            </div>
          </section>
        )}

        {/* RESOURCES */}
        {activeTab === "resources" && (
          <section>
            <h2 className="text-3xl font-semibold text-dark_green mb-6">
              Resources
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "All",
                "Healthcare Professionals",
                "Dosing",
                "Patients",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setResourceFilter(category)}
                  className={`px-5 py-2 rounded-full border transition ${
                    resourceFilter === category
                      ? "bg-dark_green text-white border-dark_green"
                      : "border-gray-300 text-gray-600 hover:border-dark_green"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Resource cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="border border-gray-200 rounded-2xl p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold text-dark_green">
                      {resource.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {resource.category}
                    </p>
                  </div>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark_green font-medium hover:underline"
                  >
                    View →
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Clients Section */}
      <div id="clients" className="mt-6 xl:mt-10 px-6 xl:px-8 pb-8">
        {/* Section Header */}
        <div className="mb-6 xl:mb-8">
          <p className="text-[30px] xl:text-[36px] font-[600] leading-[36px] xl:leading-[42px] text-dark_green mb-2">
            Our Clients
          </p>
          <p className="text-[18px] font-light text-gray-600 leading-[24px]">
            Trusted by leading pharmaceutical and life science companies worldwide.
          </p>
        </div>

        {/* 4 Client Logo Cards: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 items-center mt-[50px]">
          {clients.map(({ src, alt }) => (
            <div
              key={alt}
              className="flex items-center justify-center p-5 bg-dark_green rounded-2xl shadow-md w-full h-[100px] xl:h-[110px] hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src={src.src}
                alt={alt}
                className="max-h-[65px] max-w-[150px] w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>

        {/* Solutions paragraph after logos */}
        <div className="mt-8 xl:mt-10 bg-light_mint_green rounded-2xl p-4 md:p-[30px]">
          <p className="text-[20px] xl:text-[22px] font-[500] text-dark_green leading-[28px] mb-3">
            What we deliver for our clients
          </p>
          <p className="text-[18px] font-light text-gray-700 leading-[26px] mb-3">
            From AbbVie to Berlin Chemie, our clients trust MedTrix to drive meaningful outcomes
            across their Medical Affairs and Commercial functions. We partner with global pharma
            leaders to design and execute strategies that accelerate HCP engagement, strengthen
            brand positioning, and ensure compliant, high-impact communication at every stage of
            the product lifecycle.
          </p>
          <p className="text-[18px] font-light text-gray-700 leading-[26px]">
            Whether it's a pre-launch strategy, a lifecycle optimization plan, or a targeted
            Medical Education program — MedTrix brings the science, creativity, and precision
            your brand deserves.
          </p>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Medtrix;
