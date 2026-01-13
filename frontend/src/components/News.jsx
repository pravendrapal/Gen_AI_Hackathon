import React from "react";
import News from "./News";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      author: "Shivam Dwivedi",
      handle: "@shivam_dwivedi ",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
      content:
        "Hidden Cracks Policymakers Must Fix: A Blueprint for Sustainable and Resilient Indian Agriculture",
      image:
        "https://kjcdn.gumlet.io/media/105619/indian-agriculture.jpg",
      timestamp: "10:16 AM · Oct 27, 2025",
    },
    {
      id: 2,
      author: "Ravi Kumar",
      handle: "@ravikumar_dev",
      avatar:
        "https://randomuser.me/api/portraits/men/54.jpg",
      content:
        "From Serving the Nation to Serving the Soil: Retired Army Officer Leads Organic Farming with High-Density Apple Orchard in Himachal",
      image:
        "https://kjcdn.gumlet.io/media/105791/4.jpg",
      timestamp: "4:30 PM · Nov 5, 2025",
    },
    {
      id: 3,
      author: "Anita Sharma",
      handle: "@anita_farms",
      avatar:
        "https://randomuser.me/api/portraits/women/43.jpg",
      content:
        "Excited to announce our partnership with FarmBoost to bring organic produce directly to consumers 🍅💚.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.mtyNL3QXDVotGFwsNS-4FQHaDt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      timestamp: "7:20 PM · Nov 3, 2025",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#008585]">
            Latest News & Updates
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Stay updated with the latest innovations, success stories, and tech in modern farming.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {/* <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full border border-gray-200"
                  /> */}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.author}
                    </h3>
                    <span className="text-gray-500 text-sm">
                      {item.handle}
                    </span>
                  </div>
                </div>
                {/* <svg
                  className="w-5 h-5 text-[#008585]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg> */}
              </div>

              {/* Content */}
              <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                {item.content}
              </p>

              {/* Image */}
              <div className="rounded-xl overflow-hidden border border-gray-200 mb-3">
                <img
                  src={item.image}
                  alt="News visual"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Timestamp */}
              <div className="text-gray-500 text-xs">{item.timestamp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
