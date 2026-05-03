// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";

const highlights = [
  {
    icon: <HiOutlineLocationMarker size={20} />,
    label: "Location",
    value: "London, UK",
  },
  {
    icon: <MdOutlineSchool size={20} />,
    label: "Education",
    value: "MSc Data Analytics",
  },
  {
    icon: <HiOutlineMail size={20} />,
    label: "Email",
    value: personalData.email,
  },
  {
    icon: <MdOutlineWorkOutline size={20} />,
    label: "Status",
    value: "Open to Work",
  },
];

function AboutSection() {
  const paragraphs = personalData.description
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean)
    .reduce((acc, sentence) => {
      const last = acc[acc.length - 1];
      if (last && last.length < 120) {
        acc[acc.length - 1] = last + " " + sentence;
      } else {
        acc.push(sentence);
      }
      return acc;
    }, []);

  return (
    <div id="about" className="mt-6 mb-16 lg:mb-24">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white shrink-0">About Me</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1a1443] via-violet-500/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Description — wider column */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-400 text-sm md:text-base leading-7">
              {para}
            </p>
          ))}
        </div>

        {/* Info cards — narrower column */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 p-4 rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] hover:border-violet-500/50 transition-colors duration-300"
            >
              <div className="mt-0.5 text-[#16f2b3] shrink-0">{icon}</div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                <span className="text-sm text-white font-medium truncate">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;