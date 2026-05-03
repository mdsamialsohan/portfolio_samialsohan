// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10">

      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-700 rounded-full filter blur-[140px] opacity-15 -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-700 rounded-full filter blur-[140px] opacity-15 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900 rounded-full filter blur-[180px] opacity-10 -z-10" />

      {/* ── LEFT: Text content ── */}
      <div className="flex flex-col gap-7 flex-1 z-10">

        {/* Status badge */}
        {/*<div className="flex items-center gap-2 w-fit">*/}
        {/*  <span className="relative flex h-2.5 w-2.5">*/}
        {/*    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75"></span>*/}
        {/*    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16f2b3]"></span>*/}
        {/*  </span>*/}
        {/*  <span className="text-[#16f2b3] text-xs font-semibold tracking-widest uppercase">*/}
        {/*    Available for opportunities*/}
        {/*  </span>*/}
        {/*</div>*/}

        {/* Name & title */}
        <div className="flex flex-col gap-3">
          {/*<p className="text-gray-500 text-base tracking-widest uppercase font-medium">*/}
          {/*  Hello, I&apos;m*/}
          {/*</p>*/}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-none tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="h-[2px] w-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full" />
            <h2 className="text-lg md:text-xl font-semibold text-[#16f2b3] tracking-widest uppercase">
              {personalData.designation}
            </h2>
          </div>
        </div>

        <br/>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {[
            { href: personalData.github,      icon: <BsGithub size={20} />,        label: "GitHub"       },
            { href: personalData.linkedIn,    icon: <BsLinkedin size={20} />,      label: "LinkedIn"     },
            { href: personalData.facebook,    icon: <FaFacebook size={20} />,      label: "Facebook"     },
            { href: personalData.leetcode,    icon: <SiLeetcode size={20} />,      label: "LeetCode"     },
            { href: personalData.twitter,     icon: <FaTwitterSquare size={20} />, label: "Twitter"      },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-pink-500 hover:text-pink-500 hover:scale-110 transition-all duration-300"
            >
              {icon}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white overflow-hidden border border-violet-500 hover:border-pink-500 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Contact Me</span>
            <RiContactsFill size={16} className="relative" />
          </Link>

          <Link
            href={personalData.resume}
            target="_blank"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-violet-600 hover:from-violet-600 hover:to-pink-500 shadow-lg shadow-pink-500/20 transition-all duration-300 hover:shadow-violet-500/30 hover:gap-3"
          >
            <span>Get Resume</span>
            <MdDownload size={16} />
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Profile image ── */}
      <div className="flex items-center justify-center flex-shrink-0 z-10">
        <div className="hero-float relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">

          {/* Outer spinning ring */}
          <svg
            className="hero-spin absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)]"
            viewBox="0 0 400 400"
          >
            <circle
              cx="200" cy="200" r="190"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="1.5"
              strokeDasharray="12 8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner spinning ring */}
          <svg
            className="hero-spin-reverse absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]"
            viewBox="0 0 400 400"
          >
            <circle
              cx="200" cy="200" r="190"
              fill="none"
              stroke="url(#ringGrad2)"
              strokeWidth="1"
              strokeDasharray="4 20"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glow behind photo */}
          <div className="hero-glow absolute inset-2 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 blur-2xl opacity-40" />

          {/* Photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <Image
              src={personalData.profile}
              alt={personalData.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Accent dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
          <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
          <div className="absolute top-1/2 -right-5 w-2 h-2 rounded-full bg-[#16f2b3] shadow-lg shadow-[#16f2b3]/50" />
        </div>
      </div>

    </section>
  );
}

export default HeroSection;