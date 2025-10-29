import React from "react";
import { FaFigma, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCss3 } from "react-icons/tb";

const skills = [
  {
    name: "Figma", desc: "UI Design, Prototyping", icon: FaFigma, iconBg: "bg-blue-50", iconColor: "text-blue-500",
  },
  {
    name: "JavaScript", desc: "Front-End Development", icon: IoLogoJavascript, iconBg: "bg-yellow-50", iconColor: "text-yellow-500",
  },
  {
    name: "React", desc: "Web Apps & SPA", icon: FaReact, iconBg: "bg-blue-50", iconColor: "text-blue-400",
  },
  {
    name: "HTML & CSS", desc: "Responsive Design", icon: TbBrandCss3, iconBg: "bg-pink-50", iconColor: "text-pink-500",
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Keahlian
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Saya menguasai berbagai tools dan teknologi untuk membangun produk
            digital yang modern.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
              >
                <div
                  className={`${skill.iconBg} w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4`}
                >
                  <Icon className={`${skill.iconColor} w-5 h-5 sm:w-7 sm:h-7`} />
                </div>
                <h3 className="text-gray-900 font-semibold text-sm sm:text-base mb-1 sm:mb-1.5">
                  {skill.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
