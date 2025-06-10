import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  RocketIcon,
  ShieldCheckIcon,
  PaintbrushIcon,
  CodeIcon,
  NetworkIcon,
  LockIcon,
  MusicIcon,
  BarChartIcon,
  MessageCircleIcon
} from "lucide-react";

// Import the features JSON file
import featuresData from '../features.json';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFeatures, setFilteredFeatures] = useState([]);

  const features = featuresData.features;

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter features based on the search query
    const filtered = features.filter(
      (feature) =>
        feature.title.toLowerCase().includes(query) ||
        feature.desc.toLowerCase().includes(query)
    );
    setFilteredFeatures(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-black via-purple-900 to-black text-white font-sans">
      <section className="text-center px-6 py-32 relative z-10" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-purple-500/5 blur-3xl rounded-full w-full h-full -z-10 opacity-20" />
        <h2 className="text-6xl font-extrabold leading-tight mb-6 text-transparent bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text ">
          All Your Everyday Tools,
          <br className="hidden md:block" /> One Unified Platform
        </h2>
        <p className="text-purple-100/80 text-lg max-w-2xl mx-auto mb-10">
          Boost your productivity with ToolSuite — a centralized, stylish, and futuristic utility.
        </p>

        <div className="max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Search features..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-6 py-3 rounded-full bg-[#1c1f2a] border border-purple-700/30 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {searchQuery && filteredFeatures.length > 0 && (
            <div className="mt-4 bg-[#1c1f2a] text-white rounded-xl shadow-md p-4 max-h-60 overflow-y-auto">
              {filteredFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-950/30">
                    {/* You can choose to display different icons based on the feature */}
                    <RocketIcon size={28} />
                  </div>
                  <div>
                    <Link to={feature.page}>
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                    </Link>
                    <p className="text-sm text-purple-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 hover:brightness-110 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl transition duration-300 animate-bounce hover:shadow-purple-600/40">
          Get Started for Free
        </button>
      </section>

      <section id="features" className="px-6 py-24 relative z-10">
        <h3 className="text-4xl font-bold text-center mb-16 text-purple-100 drop-shadow-md" data-aos="fade-up">
          Why ToolSuite?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto border border-purple-50 p-4 rounded-3xl backdrop-blur-3xl shadow-lg shadow-purple-50">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-950/60 backdrop-blur-sm p-8 rounded-3xl border border-purple-300 shadow-md transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-950/30 text-purple-300 rounded-full p-3">
                  {/* You can choose to display different icons based on the feature */}
                  <RocketIcon size={28} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center text-purple-100 mb-2">
                <Link to={feature.page}>{feature.title}</Link>
              </h4>
              <p className="text-sm text-purple-200 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center mb-16 text-purple-100" data-aos="fade-up">
          Extended Tools & Productivity Suite
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[{ icon: <BarChartIcon />, title: "Analytics & SEO", desc: "Meta tags, sitemaps & keyword analyzers.", color: "text-yellow-400" },
          { icon: <MessageCircleIcon />, title: "User Requested Features", desc: "Custom tools, made just for you.", color: "text-orange-400" }
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-purple-950/30 rounded-3xl p-6 shadow-xl hover:shadow-purple-600/20 transform hover:-translate-y-2 transition duration-300 border border-purple-700/20"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mb-4 ${tool.color}`}>
                {tool.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{tool.title}</h4>
              <p className="text-purple-100/70 text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0b0f1a] text-purple-300/80 border-t border-purple-800 py-8 text-center text-sm relative">
        <div className="absolute top-0 left-0 w-full h-full blur-2xl bg-gradient-to-r from-purple-500/10 via-purple-500/10 to-indigo-500/10 opacity-20 -z-10" />
        © {new Date().getFullYear()} ToolSuite. All rights reserved.
      </footer>
    </div>
  );
}
