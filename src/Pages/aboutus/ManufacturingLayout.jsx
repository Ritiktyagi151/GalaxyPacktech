import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Users, Target, Brain, Info } from "lucide-react";

const tabList = [
  { id: "about", label: "ABOUT GALAXY PACK TECH", icon: Info },
  { id: "leadership", label: "OUR LEADERSHIP", icon: Users },
  { id: "vision", label: "VISION & MISSION", icon: Target },
  { id: "philosophy", label: "PHILOSOPHY", icon: Brain },
];

const ManufacturingLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = location.pathname.split("/")[1];

  return (
    <div className="flex max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Sidebar */}
      <div className="w-64 space-y-2 sticky top-35 h-fit">
        {tabList.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(`/${tab.id}`)}
            className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-all ${
              currentTab === tab.id
                ? "bg-orange-600 text-white font-semibold"
                : "bg-orange-50 hover:bg-orange-100 text-gray-700"
            }`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <div className="flex-1 ml-8 space-y-16">
        <Outlet />
      </div>
    </div>
  );
};

export default ManufacturingLayout;
