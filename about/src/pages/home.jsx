import React, { useEffect, useMemo, useRef, useState } from "react";
import '../App.css';
import '../components/components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faReact,
  faPython,
  faNodeJs,
  faWhatsapp,
  faLinkedin,
  faMeta,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faWallet,
  faEnvelope,
  faRightLeft,
  faServer,
  faCode,
  faLocationDot,
  faDice,
  faEarthAmerica,
  faPassport,
  faMinus,
  faPlus,
  faFileDownload,
  faRocket,
  faLayerGroup,
  faGraduationCap,
  faBriefcase,
  faAddressCard,
  faArrowUpRightFromSquare,
  faUserShield,
  faPhone,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import selfie from '../img/AdiYd2.jpeg';
import sedg from '../img/sedg.svg';
import taskomatic from "../img/taskomatic.svg";
import tau2 from '../img/TAU_Logo.png';
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Carousel3DImages } from "../components/Carousel3D";

// Import showcase images
import dash1 from "../img/showcase/dash1.png";
import dash2 from "../img/showcase/dash2.png";
import dash3Dark from "../img/showcase/dash3_dark.png";
// import dash4 from "../img/showcase/dash4.png";
import mobileApp from "../img/showcase/mobileApp.jpeg";
import mobileApp2 from "../img/showcase/mobileApp2.jpeg";
import mobileApp3 from "../img/showcase/mobileApp3.jpeg";
import pivot1 from "../img/showcase/pivot1.png";
import pivot2 from "../img/showcase/pivot2.png";
import pivot3 from "../img/showcase/pivot3.png";
import pivot5 from "../img/showcase/pivot5.png";

export const themeIconify = {
    light: 'ph:sun-bold',
    dark: 'ph:moon-bold',
    system: 'ph:desktop-bold',
    cupcake: 'mdi:cupcake',
    bumblebee: 'lucide-lab:bee',
    emerald: 'fa6-solid:gem',
    corporate: 'mdi:office-building',
    synthwave: 'mdi:sine-wave',
    retro: 'fa-solid:camera-retro',
    cyberpunk: 'mdi:robot',
    valentine: 'mdi:heart',
    halloween: 'mdi:halloween',
    garden: 'mdi:flower',
    forest: 'mdi:pine-tree',
    aqua: 'mdi:water',
    lofi: 'mdi:fantasy',
    pastel: 'mdi:palette-swatch',
    fantasy: 'mdi:wizard-hat',
    wireframe: 'mdi:pencil-ruler',
    black: 'mdi:circle',
    luxury: 'mdi:crown',
    cmyk: 'mdi:printer',
    autumn: 'mdi:leaf-maple',
    business: 'mdi:briefcase',
    acid: 'mdi:flask',
    night: 'mdi:weather-night',
    winter: 'mdi:snowflake',
    dracula: 'game-icons:vampire-dracula',
};

// ─── Reusable animated section wrapper ─────────────────────────────────────────
function Section({ children, className = '', id }) {
    const ref = useRef(null);
    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        className={`${className}`}
        style={{ transformPerspective: 1000 }}
      >
        {children}
      </motion.section>
    );
}

// ─── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ icon, label }) {
    return (
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
          <FontAwesomeIcon icon={icon} />
        </span>
        <h2 className="!text-xl !font-semibold text-primary tracking-tight">
          {label}
        </h2>
        <div className="flex-1 h-px bg-base-content/10 ml-2" />
      </div>
    );
}

// ─── Skill pill ────────────────────────────────────────────────────────────────
function SkillPill({ label, icon, color = "", index = 0, iconClassName = "" }) {
  return (
    <motion.div
      className={`skill-pill ${color}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          delay: index * 0.05,
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        },
      }}
      viewport={{ once: true, margin: "-30px" }}
    >
      <span className={`skill-pill-icon ${iconClassName}`}>{icon}</span>
      <span className="skill-pill-label">{label}</span>
    </motion.div>
  );
}

// ─── Timeline entry ────────────────────────────────────────────────────────────
function TimelineEntry({
  title,
  place,
  period,
  children,
  logo,
  icon,
  isLast = false,
  imagesClassName = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -60px 0px",
    amount: 0.3,
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={
        isInView
          ? {
              opacity: 1,

              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.8,
              },
            }
          : {
              opacity: 0,
              scale: 0.9,
            }
      }
      whileHover={{
        scale: 1.02,
        y: 5,
        transition: { duration: 0.2 },
      }}
      className="relative"
      style={{ transformPerspective: 1200 }}
    >
      {/* Timeline line */}
      {/* {!isLast && <div className="absolute left-[11px] top-6 bottom-0 w-px bg-base-content/10" />} */}
      {/* Dot */}
      {/* <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
            </div> */}

      <div className="card text-start mb-6 p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div className="flex flex-col items-start gap-3">
            {logo && (
              <img
                src={logo}
                alt={place}
                className={`h-10 w-auto min-w-10 object-cover opacity-80 ${imagesClassName}`}
              />
            )}
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className="text-2xl text-primary/80"
              />
            )}
            <div>
              <p className="font-semibold !text-base-content text-base leading-tight">
                {title}
              </p>
              <p className="text-xs text-primary mt-0.5">{place}</p>
            </div>
          </div>
          <span className="badge badge-sm badge-outline text-primary border-primary/40 whitespace-nowrap">
            {period}
          </span>
        </div>
        <div className="flex flex-col text-sm text-base-content/70 leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Product card ──────────────────────────────────────────────────────────────
function ProductCard({ name, desc, tags = [], icon, logo, link }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '0px 0px -50px 0px', amount: 0.4 });
    return (
        <motion.a
            ref={ref}
            href={link || '#'}
            target={link ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ 
                opacity: 0, 
                y: 60,
                scale: 0.8,
                filter: 'blur(8px)'
            }}
            animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateY: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: {
                    duration: 0.7,
                    ease: [0.34, 1.56, 0.64, 1],
                    filter: { duration: 0.5 }
                }
            } : {
                opacity: 0,
                scale: 0.8,
                filter: 'blur(8px)'
            }}
            whileHover={{ 
                scale: 1.01,
                rotateY: 5,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="card p-5 flex flex-col gap-3 group hover:border-primary/40* hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer no-underline"
            style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
        >
            <div className="flex items-center justify-between">
                {icon && <span className="text-2xl">{icon}</span>}
                {logo && <img src={logo} alt={name} className="h-6 w-auto min-w-6 object-cover opacity-80" />}
                {link && (
                    <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-xs cursor-pointer text-base-content/30 group-hover:text-primary transition-colors"
                    />
                )}
            </div>
            <div className="text-left">
                <p className="font-bold !text-base-content text-base">{name}</p>
                <p className="text-sm* text-base-content/70 mt-1.5 leading-relaxed text-left">{desc}</p>
            </div>
            <motion.div 
                className="flex flex-wrap gap-1.5 mt-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05
                        }
                    }
                }}
            >
                {tags.map((t, idx) => (
                    <motion.span 
                        key={t} 
                        className="badge badge-xs badge-outline opacity-70"
                        variants={{
                            hidden: { opacity: 0, scale: 0, y: 10 },
                            visible: { 
                                opacity: 0.7, 
                                scale: 1, 
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }
                        }}
                        whileHover={{ scale: 1.02, opacity: 1 }}
                    >
                        {t}
                    </motion.span>
                ))}
            </motion.div>
        </motion.a>
    );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function Home({ showPdf = false }) {
  const [isRolling, setIsRolling] = useState(false);
  const [showDice, setShowDice] = useState(false);
  const [themeName, setThemeName] = useState(null);
  const [minimizeButtons, setMinimizeButtons] = useState(false);
  const [activeNav, setActiveNav] = useState("about");
  const usedThemes = useRef(new Set(["night"])); // Start with these as "used" to ensure they show up first

  useEffect(() => {
    debugFunction();
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeRandomTheme = async () => {
    setIsRolling(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const preferThemeMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || preferThemeMode;
    const themesByMode = {
      light: ["light", "cupcake", "retro", "autumn", "winter", "fantasy"],
      dark: ["halloween", "synthwave", "dracula", "night", "forest"],
    };
    const currentThemeMode = themesByMode.light.includes(currentTheme)
      ? "light"
      : "dark";
    const nextThemeMode = currentThemeMode === "light" ? "dark" : "light";
    if (!themeName && nextThemeMode === "dark") {
      setThemeName("night");
      usedThemes.current.add("night");
      document.documentElement.setAttribute("data-theme", "night");
      setIsRolling(false);
      return;
    } else if (
      (!themeName && nextThemeMode === "light") ||
      (themeName === "night" && nextThemeMode === "light")
    ) {
      setThemeName("autumn");
      usedThemes.current.add("autumn");
      document.documentElement.setAttribute("data-theme", "autumn");
      setIsRolling(false);
      return;
    }
    let availableThemes = themesByMode[nextThemeMode]?.filter(
      (t) => !usedThemes.current.has(t),
    );
    if (availableThemes.length === 0)
      availableThemes = themesByMode[nextThemeMode].filter(
        (t) => t !== themeName,
      );
    const randomTheme =
      availableThemes[Math.floor(Math.random() * availableThemes.length)];
    if (themeName === randomTheme) {
      changeRandomTheme();
      return;
    }
    setThemeName(randomTheme);
    usedThemes.current.add(randomTheme);
    document.documentElement.setAttribute("data-theme", randomTheme);
    setIsRolling(false);
  };

  // ── skill icon helpers ──
  const si = (iconName) => <Icon icon={iconName} className="w-4 h-4" />;
  const fa = (icon) => <FontAwesomeIcon icon={icon} className="w-4 h-4" />;

  const skillGroups = {
    Frontend: {
      color: "text-primary",
      items: [
        {
          label: "React",
          icon: fa(faReact),
          iconClassName:
            "group-hover:animate-spin group-hover:text-blue-500 transition-all duration-500",
        },
        { label: "Next.js", icon: si("akar-icons:nextjs-fill") },
        { label: "TypeScript", icon: si("akar-icons:typescript-fill") },
        { label: "CSS", icon: si("fa-brands:css3") },
        { label: "Tailwind", icon: si("teenyicons:tailwind-solid") },
        { label: "Shadcn", icon: si("simple-icons:shadcnui") },
        { label: "daisyUI", icon: si("simple-icons:daisyui") },
        { label: "Radix UI", icon: si("simple-icons:radixui") },
        { label: "MUI", icon: si("simple-icons:mui") },
      ],
    },
    "Backend & Cloud": {
      color: "text-secondary",
      items: [
        { label: "Node.js", icon: fa(faNodeJs) },
        { label: "Python", icon: fa(faPython) },
        { label: "GCP", icon: si("devicon-plain:googlecloud") },
        { label: "AWS", icon: si("mdi:aws") },
        { label: "MongoDB", icon: si("simple-icons:mongodb") },
        { label: "PostgreSQL", icon: si("akar-icons:postgresql-fill") },
        { label: "Firebase", icon: si("simple-icons:firebase") },
        //   { label: "Supabase", icon: si("ri:supabase-line") },
        { label: "Auth", icon: fa(faUserShield) },
        { label: "Server", icon: fa(faServer) },
      ],
    },
    "AI & API": {
      color: "text-accent",
      items: [
        { label: "Anthropic", icon: si("simple-icons:anthropic") },
        { label: "Gemini", icon: si("ri:gemini-fill") },
        { label: "OpenAI", icon: si("simple-icons:openai") },
        { label: "Agents", icon: fa(faBrain) },
        { label: "GitHub", icon: fa(faGithub) },
        { label: "Payments", icon: fa(faWallet) },
        { label: "Whatsapp", icon: fa(faWhatsapp) },
        { label: "Meta", icon: fa(faMeta) },
        { label: "REST API", icon: fa(faRightLeft) },
        //   { label: "Code", icon: fa(faCode) },
      ],
    },
  };

  const products = [
    // {
    //     name: 'Webly',
    //     desc: 'AI-powered website engine & digital agency platform. End-to-end from design to deployment.',
    //     tags: ['Next.js', 'AI', 'SaaS'],
    //     icon: '🌐',
    //     link: 'https://webly.digital'
    // },
    {
      name: "Taskomatic",
      desc: "Smart marketing App based on AI automation, APIs and agents, multi-platform integrations and team workflows.",
      tags: ["Next.js", "TypeScript", "GCP", "AWS", "APIs"],
      // icon: '⚡',
      logo: taskomatic,
      link: "https://taskomatic.net",
    },
    // {
    //     name: 'Math Mentor',
    //     desc: 'Interactive tutoring platform for high school mathematics with real-time feedback.',
    //     tags: ['React', 'Education', 'AI'],
    //     icon: '📐',
    // },
    {
      name: "Custom Apps & SaaS",
      desc: "Multiple client-facing AI SaaS tools spanning fintech, edtech and productivity - built & shipped.",
      tags: [
        "Full-stack",
        "Cloud",
        "DevOps",
        "AI",
        "Innovation",
        "Architecture",
      ],
      icon: "🚀",
    },
  ];

  //   Randomize showcase images order on each visit to keep it fresh
  const showcaseImages = useMemo(
    () =>
      [
        {
          id: 1,
          src: dash1,
          alt: "Dashboard Light Theme",
          width: 220,
          height: 190,
        },
        {
          id: 2,
          src: dash2,
          alt: "Dashboard Settings",
          width: 220,
          height: 190,
        },
        {
          id: 3,
          src: dash3Dark,
          alt: "Dashboard Dark Theme",
          width: 220,
          height: 190,
        },
        // {
        //   id: 4,
        //   src: dash4,
        //   alt: "Dashboard Overview",
        //   width: 220,
        //   height: 160,
        // },
        {
          id: 5,
          src: mobileApp,
          isMobileApp: true,
          alt: "Mobile App Stock View",
          width: 180,
          height: 220,
        },
        {
          id: 6,
          src: mobileApp2,
          isMobileApp: true,
          alt: "Mobile App Details",
          width: 180,
          height: 220,
        },
        {
          id: 7,
          src: mobileApp3,
          isMobileApp: true,
          alt: "Mobile App Search",
          width: 180,
          height: 220,
        },
        {
          id: 8,
          src: pivot1,
          alt: "Pivot Orders View",
          width: 220,
          height: 190,
        },
        {
          id: 9,
          src: pivot2,
          alt: "Pivot Management",
          width: 220,
          height: 190,
        },
        {
          id: 10,
          src: pivot3,
          alt: "Pivot Chat Interface",
          width: 220,
          height: 190,
        },
        {
          id: 11,
          src: pivot5,
          alt: "Pivot Dark Mode",
          width: 220,
          height: 190,
        },
      ].sort(() => Math.random() - 0.5),
    [],
  );

  const navItems = useMemo(
    () => [
      { id: "about", label: "About", icon: faAddressCard },
      { id: "products", label: "Products", icon: faRocket },
      { id: "experience", label: "Experience", icon: faBriefcase },
      {
        id: "projects-gallery",
        label: "Gallery",
        icon: faImage,
        hideMobile: true,
      },
      { id: "skills", label: "Skills", icon: faLayerGroup },
      { id: "education", label: "Education", icon: faGraduationCap },
      { id: "contact", label: "Contact", icon: faPhone }, // Add this line
    ],
    [],
  );

  const scrollTo = (id) => {
    setActiveNav(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <div className="home-page z-10 py-16 px-2 sm:px-6 max-w-7xl mx-auto">
      {/* ── Sticky nav ─────────────────────────────────────────────────── */}
      <nav className="sticky-nav">
        {navItems.map(({ id, label, icon, hideMobile }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`nav-btn ${activeNav === id ? "nav-btn-active" : ""} ${hideMobile ? "max-sm:!hidden" : ""}`}
          >
            <FontAwesomeIcon icon={icon} className="text-xs" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
        {/* Divider */}
        <div className="border-l h-5 rounded-full border-primary/60" />
        {/* Theme roller */}
        <button
          className="nav-btn w-[50px] flex justify-center"
          onClick={changeRandomTheme}
          onMouseEnter={() => setShowDice(true)}
          onMouseLeave={() => setShowDice(false)}
          title={themeName || "Change theme"}
        >
          {isRolling || showDice ? (
            <FontAwesomeIcon
              icon={faDice}
              className={`text-sm ${isRolling ? "animate-spin" : ""}`}
            />
          ) : (
            <Icon
              icon={
                themeIconify[
                  themeName ||
                    document.documentElement.getAttribute("data-theme") ||
                    "night"
                ]
              }
              className="text-sm"
            />
          )}
        </button>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        className="hero-card space-y-4 card mb-8 p-7 sm:p-10 relative overflow-hidden scroll-mt-20"
        style={{ transformPerspective: 1200 }}
      >
        {/* Decorative glow */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start gap-6 relative">
          {/* Avatar */}
          <div className="avatar shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ring-2 hover:ring-amber-600/40 hover:shadow-amber-300/40 ring-primary/30 ring-offset-2 ring-offset-base-200 overflow-hidden shadow-xl">
              <img
                src={selfie}
                alt="Adi Yehuda"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="!text-3xl sm:!text-4xl !font-bold tracking-tight">
                Adi Yehuda
              </h1>
              {showPdf && (
                <a
                  href="https://adiyd.github.io/About/assets/Adi Yehuda-CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download CV"
                  className="btn btn-xs btn-outline btn-primary ml-1"
                >
                  <FontAwesomeIcon icon={faFileDownload} className="" />
                </a>
              )}
            </div>

            <p className="text-sm* text-base-content/60 font-medium mb-3 tracking-wide uppercase*">
              Application Engineer · Tech Lead · Entrepreneur
            </p>

            <motion.div
              className="flex flex-wrap gap-4 text-xs text-base-content/60 mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {[
                { icon: faLocationDot, text: "Tel Aviv, Israel" },
                { icon: faEarthAmerica, text: "EN · HE" },
                { icon: faPassport, text: "EU · IL" },
              ].map((item, idx) => (
                <motion.span
                  key={idx}
                  className="flex items-center gap-1.5"
                  variants={{
                    hidden: { opacity: 0, x: -20, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-primary/70"
                  />
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <div>
          <p className="text-sm* text-base-content/75 leading-relaxed mb-3">
            I build Full-Stack Applications for Web and Mobile, AI-powered
            platforms and scalable SaaS tools. With a strong technical
            background in SW and HW Engineering, combined with architecture and
            product oriented thinking, I transform my applications into clean,
            fast, scalable and user-friendly products.
          </p>
          <p className="text-sm* text-base-content/70 leading-relaxed">
            Currently running{" "}
            <strong className="text-base-content">Taskomatic</strong>, an AI
            marketing agent for SMB and agencies. As well as consulting on data
            pipelines, cloud architecture and tech strategy for startups.
          </p>

          {/* Contact badges */}
          <motion.div
            className="flex flex-wrap gap-2.5 mt-5"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {[
              {
                icon: faEnvelope,
                label: "Email",
                href: "mailto:Admin@webly.digital",
              },
              {
                icon: faLinkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/adiyd",
              },
              {
                icon: faGithub,
                label: "GitHub",
                href: "https://github.com/AdiYd",
              },
              {
                icon: faWhatsapp,
                label: "WhatsApp",
                href: "https://wa.me/972527242775",
              },
            ].map(({ icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-xs btn-outline hover:btn-primary gap-1.5 transition-all"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,

                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.1,

                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={icon} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="flex justify-center mt-6 text-base-content/80"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, 12, 0],
            transition: {
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            },
          }}
        >
          <Icon icon={"mynaui:chevrons-down"} className="text-lg" />
        </motion.div>
      </motion.div>

      <div className="space-y-8">
        {/* ── Products / Ventures ─────────────────────────────────────────── */}
        <Section id="products" className="section-class">
          <SectionHeading icon={faRocket} label="Products & Ventures" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {products.map((p, index) => (
              <ProductCard key={p.name} {...p} index={index} />
            ))}
          </motion.div>
        </Section>

        {/* ── Experience ──────────────────────────────────────────────────── */}
        <Section id="experience" className="section-class">
          <SectionHeading icon={faBriefcase} label="Experience" />

          <TimelineEntry
            title="Co-Founder & CTO"
            place="Taskomatic LTD"
            period="2025 – Present"
            logo={taskomatic}
          >
            Co-Founding of Taskomatic LTD. Technical leading of a full scale
            Application for web and mobile with AI automation, multi-platform
            integrations and team workflows. Responsible for architecture,
            development, deployment and scaling.
          </TimelineEntry>

          <TimelineEntry
            title="SW Engineer"
            place="Self-Employed"
            period="2023 – 2025"
            icon={faCode}
          >
            Building and shipping full-stack Applications and AI-powered
            platforms. Leading end-to-end architecture, data models, frontend,
            backend, cloud infrastructure, DevOps, and product strategy. Stack:
            <br />
            <AnimatePresence mode="wait">
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 20, rotateX: -30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.05,
                  },
                }}
                viewport={{ once: false, margin: "-20px" }}
                className="flex flex-wrap gap-1 mt-2"
              >
                {[
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "Express",
                  "GCP",
                  "AWS",
                  "AI",
                  "APIs",
                ].map((tech, index) => (
                  <React.Fragment key={index}>
                    <motion.code
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: index * 0.08,
                          type: "spring",
                          stiffness: 200,
                        },
                      }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.code>
                    {index < 8 && <span className="mx-1 opacity-50">·</span>}
                  </React.Fragment>
                ))}
              </motion.div>
            </AnimatePresence>
          </TimelineEntry>

          <TimelineEntry
            title="Hardware & Product Engineer"
            place="SolarEdge R&D"
            period="2019 – 2023"
            imagesClassName="bg-white rounded-sm"
            logo={sedg}
          >
            Led multidisciplinary development of advanced analog/digital
            hardware systems for renewable energy. Owned full product cycle:
            design → prototype → mass production. Built automated test
            frameworks with:
            <AnimatePresence mode="wait">
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                }}
                viewport={{ once: false, margin: "-20px" }}
                className="flex flex-wrap gap-1 mt-2"
              >
                {["Python", "C#", "Automation"].map((lang, index) => (
                  <React.Fragment key={index}>
                    <motion.code
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: index * 0.1,
                          type: "spring",
                        },
                      }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      viewport={{ once: true }}
                    >
                      {lang}
                    </motion.code>
                    {index < 2 && <span className="mx-1 opacity-50">·</span>}
                  </React.Fragment>
                ))}
              </motion.div>
            </AnimatePresence>
            Deep cross-team collaboration: firmware, QA, manufacturing.
          </TimelineEntry>

          <TimelineEntry
            title="Teaching Assistant - Math & Physics"
            place="Tel Aviv University"
            period="2019 – 2020"
            logo={tau2}
          >
            Frontal lectures for engineering students, marathon sessions, and
            problem-solving workshops. Drove measurable improvement in exam
            success rates.
          </TimelineEntry>

          <TimelineEntry
            title="Senior Tutor - Math & Physics"
            place="Archimedes LTD"
            period="2016 – 2019"
            isLast
          >
            Group and private sessions for high-school students. Bagrut
            preparation marathons.
          </TimelineEntry>
        </Section>

        {/* ── Projects Gallery ────────────────────────────────────────────── */}
        <Section
          id="projects-gallery"
          className="section-class max-sm:pb-8 max-sm:hidden"
        >
          <SectionHeading icon={faImage} label="Gallery" />
          <div className="">
            <Carousel3DImages
              images={showcaseImages}
              cardWidth={280}
              cardHeight={220}
              translateZ={480}
              rotateX={-6}
              perspective={1000}
              animationDuration={42}
            />
          </div>
        </Section>

        {/* ── Skills ──────────────────────────────────────────────────────── */}
        <Section id="skills" className="section-class">
          <SectionHeading icon={faLayerGroup} label="Skills" />
          <div className="flex flex-col gap-5">
            {Object.entries(skillGroups).map(([group, { color, items }]) => (
              <div key={group}>
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${color} opacity-70`}
                >
                  {group}
                </p>
                <div className="flex flex-wrap group gap-2">
                  {items.map(({ label, icon, iconClassName }, index) => (
                    <SkillPill
                      key={label}
                      label={label}
                      icon={icon}
                      iconClassName={iconClassName}
                      color={color}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Education ───────────────────────────────────────────────────── */}
        <Section id="education" className="section-class">
          <SectionHeading icon={faGraduationCap} label="Education" />

          <TimelineEntry
            title="B.Sc. Electrical & Electronics Engineering"
            place="Tel Aviv University"
            period="2014 – 2019"
            logo={tau2}
          >
            Majors in computers, control systems, and EM waves. Core CS: <br />
            <AnimatePresence mode="wait">
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20, rotateY: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                }}
                viewport={{ once: false, margin: "-20px" }}
                className="flex flex-wrap gap-1 mt-2"
              >
                {[
                  "Python",
                  "C++",
                  "Algorithms",
                  "OS",
                  "Networks",
                  "Cryptography",
                ].map((skill, index) => (
                  <React.Fragment key={skill}>
                    <motion.code
                      className=""
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                        transition: {
                          delay: index * 0.07,
                          type: "spring",
                          stiffness: 150,
                        },
                      }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.code>
                    {index < 5 && <span className="mx-1 opacity-50">·</span>}
                  </React.Fragment>
                ))}
              </motion.div>
            </AnimatePresence>
          </TimelineEntry>

          <TimelineEntry
            title="AI Engineering for Developers"
            place="Microsoft Learn"
            period="2024"
          >
            Prompt engineering, model optimization, caching, AI agents, MCP
            servers. Hands-on with <br />
            <AnimatePresence mode="wait">
              <motion.div
                key="tools"
                initial={{ opacity: 0, x: -50, skewX: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                }}
                viewport={{ once: false, margin: "-20px" }}
                className="flex flex-wrap gap-1 mt-2"
              >
                {["OpenAI", "Anthropic", "Azure AI", "Gemini"].map(
                  (tool, index) => (
                    <React.Fragment key={tool}>
                      <motion.code
                        className=""
                        initial={{ opacity: 0, y: 20, scale: 0 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          },
                        }}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: { duration: 0.3 },
                        }}
                        viewport={{ once: true }}
                      >
                        {tool}
                      </motion.code>
                      {index < 3 && <span className="mx-1 opacity-50">·</span>}
                    </React.Fragment>
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </TimelineEntry>

          <TimelineEntry
            title="Advanced React & Next.js"
            place="Udemy · Coursera"
            period="2023 – 2024"
          >
            SSR, authentication, databases, performance, and modern UI systems.
          </TimelineEntry>

          <TimelineEntry
            title="UI/UX & Web Design"
            place="Udemy"
            period="2023"
            isLast
          >
            Figma, typography, color theory, responsive design, and design
            systems.
          </TimelineEntry>
        </Section>

        {/* ── Contact Me ──────────────────────────────────────────────────── */}
        <Section id="contact" className="section-class">
          <SectionHeading icon={faEnvelope} label="Contact Me" />

          <div className="card p-6 sm:p-8 text-center space-y-6">
            <p className="text-base-content/80 leading-relaxed max-w-2xl mx-auto">
              Interested in working together or have a question? Feel free to
              reach out through any of the channels below.
            </p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-30px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {[
                {
                  icon: faEnvelope,
                  label: "Email",
                  href: "mailto:Admin@webly.digital",
                  color: "btn-primary",
                },
                {
                  icon: faLinkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/adiyd",
                  color: "btn-secondary",
                },
                {
                  icon: faGithub,
                  label: "GitHub",
                  href: "https://github.com/AdiYd",
                  color: "btn-accent",
                },
                {
                  icon: faWhatsapp,
                  label: "WhatsApp",
                  href: "https://wa.me/972527242775",
                  color: "btn-success",
                },
              ].map(({ icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline ${color} gap-2 rounded-2xl flex w-full transition-all`}
                  variants={{
                    hidden: { opacity: 0, scale: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={icon} className="text-lg" />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </Section>
      </div>

      {/* ── Floating action buttons ──────────────────────────────────────── */}
      <div className="floatingContact">
        <AnimatePresence>
          {minimizeButtons && (
            <motion.div
              className="flex flex-col gap-2"
              initial={{ x: 120, scale: 0.7, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              exit={{ x: 120, scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {[
                {
                  href: "https://www.linkedin.com/in/adiyd",
                  icon: faLinkedin,
                  cls: "btn-secondary",
                },
                {
                  href: "https://github.com/AdiYd",
                  icon: faGithub,
                  cls: "btn-accent",
                },
                {
                  href: "https://wa.me/972527242775",
                  icon: faWhatsapp,
                  cls: "btn-success",
                },
              ].map(({ href, icon, cls }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-circle backdrop-blur-lg btn-outline ${cls}`}
                >
                  <FontAwesomeIcon size="lg" icon={icon} />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="btn btn-circle btn-primary backdrop-blur-lg btn-outline shakeHover"
          title={themeName || "Change theme"}
          onClick={changeRandomTheme}
          onMouseEnter={() => setShowDice(true)}
          onMouseLeave={() => setShowDice(false)}
        >
          {isRolling || showDice ? (
            <FontAwesomeIcon
              icon={faDice}
              size="lg"
              className={isRolling ? "animate-spin" : ""}
            />
          ) : (
            <Icon
              icon={
                themeIconify[
                  themeName ||
                    document.documentElement.getAttribute("data-theme") ||
                    "night"
                ]
              }
              className="text-xl"
            />
          )}
        </button>

        <button
          className="btn mx-auto btn-primary scale-90 backdrop-blur-lg btn-outline btn-square transition-all duration-300 hover:scale-105"
          onClick={() => setMinimizeButtons((p) => !p)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={minimizeButtons ? "minus" : "plus"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FontAwesomeIcon
                icon={minimizeButtons ? faMinus : faPlus}
                size="lg"
              />
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

export const debug = (...args) => { console.log(...args); };

export const debugFunction = () => {
    const s = 'font-weight:bold;font-size:18px;color:#FF00FF;background:#0D0221;padding:8px 16px;border-radius:4px;border:1px solid #7F5AF0';
    console.log('%c🚀 Thanks for checking my Logs!', s);
};
