// @flow strict

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full rounded-xl border border-[#1b2c68a0] bg-gradient-to-b from-[#0d1224] to-[#0a0d37] overflow-hidden hover:border-violet-500 transition-colors duration-300 group">
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header: name + role */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#16f2b3] font-semibold text-lg leading-snug">
            {project.name}
          </h3>
          <span className="w-fit text-xs font-medium px-3 py-1 rounded-full bg-violet-900/40 text-violet-300 border border-violet-700/40">
            {project.role}
          </span>
        </div>

        {/* Description */}
        <ul className="flex flex-col gap-1 flex-1">
          {project.description.split('. ').filter(Boolean).map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"></span>
              <span>{point.endsWith('.') ? point : point + '.'}</span>
            </li>
          ))}
        </ul>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-[#1a1443] text-amber-300 border border-[#2a2463]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-[#1b2c68a0]">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 text-sm text-white hover:text-[#16f2b3] transition-colors duration-200"
            >
              <FaExternalLinkAlt size={13} />
              Live Demo
            </Link>
          )}
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              className="flex items-center gap-2 text-sm text-white hover:text-[#16f2b3] transition-colors duration-200"
            >
              <FaGithub size={15} />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;