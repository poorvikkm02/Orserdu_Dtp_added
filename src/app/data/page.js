"use client";

import { useEffect, useState } from "react";
import HeroContainer from "@/components/wrappers/HeroContainer";
import Preloader from "@/components/Loaders/Preloader";

export default function DataPage() {
  const [data, setData] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/nfhs")
      .then((res) => res.json())
      .then((result) => {
        setData(result.districts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredData =
    selectedDistrict === "All"
      ? data
      : data.filter((item) => item.district === selectedDistrict);

  const selectedData = filteredData[0];

//   if (loading) {
//     return (
//     //   <main className="min-h-screen flex items-center justify-center">
//     //     <p className="text-gray-500">Loading health data...</p>
//     //   </main>
//      return <Preloader />;
//     );
//   }

if (loading) {
    return <Preloader />;
  }


  return (
    <main className="min-h-screen bg-gray-50">
 <HeroContainer
      
      navLink={"/real-stories/"}
      navText={"1 for me stories"}
      alt={"MedTrix banner"}
    >
      {/* Hero */}
      <section className="bg-white border-b mt-[120px] md:mt-[250px] lg:mt-[125px]">
        <div className="max-w-7xl mx-auto px-6 py-12 pt-16 md:pt-12">
          <p className="text-sm font-medium text-blue-600 mb-3 pt-0 md:pt-12">
            NATIONAL FAMILY HEALTH SURVEY
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Karnataka Health Data
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Explore district-level health, nutrition and demographic
            indicators from NFHS-5 (2019–21).
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Filters */}
        <section className="bg-white rounded-2xl border p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-5">

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select District
              </label>

              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Districts</option>

                {data.map((district) => (
                  <option
                    key={district.district}
                    value={district.district}
                  >
                    {district.district}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gray-50 rounded-lg px-5 py-3">
              <p className="text-xs text-gray-500">Survey</p>
              <p className="font-semibold text-gray-900">
                NFHS-5 · 2019–21
              </p>
            </div>

          </div>
        </section>

        {/* Overview cards */}
        {selectedData && (
          <>
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedDistrict === "All"
                  ? "Karnataka District Data"
                  : selectedData.district}
              </h2>

              <p className="text-gray-500 mt-1">
                Key health and demographic indicators
              </p>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

              <StatCard
                title="Households Surveyed"
                value={selectedData.households}
              />

              <StatCard
                title="Sex Ratio"
                value={selectedData.sexRatio}
                suffix=" / 1000"
              />

              <StatCard
                title="Women Literacy"
                value={selectedData.womenLiteracy}
                suffix="%"
              />

              <StatCard
                title="Institutional Births"
                value={selectedData.institutionalBirths}
                suffix="%"
              />

            </section>

            {/* Child Health */}
            <section className="mb-10">

              <SectionTitle
                title="Child Health & Nutrition"
                description="Health and nutritional indicators among children under five."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <HealthCard
                  title="Stunted"
                  value={selectedData.stunted}
                  description="Children under 5"
                />

                <HealthCard
                  title="Wasted"
                  value={selectedData.wasted}
                  description="Children under 5"
                />

                <HealthCard
                  title="Underweight"
                  value={selectedData.underweight}
                  description="Children under 5"
                />

              </div>
            </section>

            {/* Women's Health */}
            <section className="mb-10">

              <SectionTitle
                title="Women's Health"
                description="Selected health indicators among women aged 15–49 and 15+."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                <HealthCard
                  title="Anaemia"
                  value={selectedData.womenAnemia}
                  description="Women age 15–49"
                />

                <HealthCard
                  title="High Blood Sugar"
                  value={selectedData.womenHighBloodSugar}
                  description="Women age 15+"
                />

                <HealthCard
                  title="High Blood Pressure"
                  value={selectedData.womenHighBloodPressure}
                  description="Women age 15+"
                />

                <HealthCard
                  title="Tobacco Use"
                  value={selectedData.womenTobacco}
                  description="Women age 15+"
                />

              </div>
            </section>

            {/* Other indicators */}
            <section className="mb-10">

              <SectionTitle
                title="Lifestyle Indicators"
                description="Tobacco and alcohol consumption among adults."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                <HealthCard
                  title="Women Tobacco"
                  value={selectedData.womenTobacco}
                />

                <HealthCard
                  title="Men Tobacco"
                  value={selectedData.menTobacco}
                />

                <HealthCard
                  title="Women Alcohol"
                  value={selectedData.womenAlcohol}
                />

                <HealthCard
                  title="Men Alcohol"
                  value={selectedData.menAlcohol}
                />
                  
              </div>
            </section>
          </>
        )}

        {/* District table */}
        <section className="bg-white rounded-2xl border overflow-hidden">

          <div id="District" className="p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                District Comparison
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Compare selected NFHS-5 indicators across Karnataka districts.
              </p>
            </div>
            
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full w-fit flex items-center gap-1 md:hidden">
              Swipe left / right to compare →
            </span>
          </div>

          <div className="overflow-x-auto relative">

            <table className="w-full text-xs sm:text-sm min-w-[600px] border-collapse">

              <thead className="bg-[#f9fafb] border-b">
                <tr>
                  <th className="sticky left-0 bg-[#f9fafb] z-30 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.15)] text-left px-4 md:px-6 py-3.5 font-semibold">
                    District
                  </th>

                  <th className="bg-[#f9fafb] text-left px-4 md:px-6 py-3.5 font-semibold">
                    Sex Ratio
                  </th>

                  <th className="bg-[#f9fafb] text-left px-4 md:px-6 py-3.5 font-semibold">
                    Women Literacy
                  </th>

                  <th className="bg-[#f9fafb] text-left px-4 md:px-6 py-3.5 font-semibold">
                    Vaccination
                  </th>

                  <th className="bg-[#f9fafb] text-left px-4 md:px-6 py-3.5 font-semibold">
                    Stunted
                  </th>

                  <th className="bg-[#f9fafb] text-left px-4 md:px-6 py-3.5 font-semibold">
                    Anaemia
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">

                {data.map((district) => (
                  <tr
                    key={district.district}
                    className="hover:bg-gray-50 transition group"
                  >

                    <td className="sticky left-0 bg-white group-hover:bg-gray-50 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.15)] px-4 md:px-6 py-3.5 font-medium text-gray-900">
                      {district.district}
                    </td>

                    <td className="px-4 md:px-6 py-3.5 whitespace-nowrap">
                      {district.sexRatio}
                    </td>

                    <td className="px-4 md:px-6 py-3.5 whitespace-nowrap">
                      {district.womenLiteracy}%
                    </td>

                    <td className="px-4 md:px-6 py-3.5 whitespace-nowrap">
                      {district.fullyVaccinated}%
                    </td>

                    <td className="px-4 md:px-6 py-3.5 whitespace-nowrap">
                      {district.stunted}%
                    </td>

                    <td className="px-4 md:px-6 py-3.5 whitespace-nowrap">
                      {district.womenAnemia}%
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </section>

      </div>
      </HeroContainer>
    </main>
  );
}


/* ---------------- Components ---------------- */

function StatCard({ title, value, suffix = "" }) {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-bold text-gray-900">
          {value ?? "—"}
        </span>

        {suffix && (
          <span className="text-sm text-gray-500 mb-1">
            {suffix}
          </span>
        )}
      </div>

    </div>
  );
}


function HealthCard({ title, value, description }) {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-gray-600">
            {title}
          </p>

          {description && (
            <p className="text-xs text-gray-400 mt-1">
              {description}
            </p>
          )}
        </div>

      </div>

      <div className="mt-5">
        <span className="text-3xl font-bold text-gray-900">
          {value ?? "—"}
        </span>

        <span className="text-gray-500 ml-1">
          %
        </span>
      </div>

    </div>
  );
}


function SectionTitle({ title, description }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {description}
      </p>
    </div>
    // <HeroContainer>
  );
}