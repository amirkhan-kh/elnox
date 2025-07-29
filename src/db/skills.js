// skills.jsx
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular, FaVuejs,
  FaSass, FaBootstrap,
  FaNodeJs
} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoPostgresql } from "react-icons/bi";
import {
  SiRedux, SiChakraui, SiAstro, SiTypescript, SiNextui,
  SiAntdesign,  SiMobx, SiReactquery, SiShadcnui, SiQuasar, SiJquery, SiSwift, SiUikit, SiVite, SiVitest, SiMongodb,
  SiExpress,
  SiNestjs,
  SiSocketdotio
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { TbBrandFramerMotion, TbBrandThreejs, TbBrandNextjs } from "react-icons/tb";
import { MdAnimation, MdStairs } from "react-icons/md";

export const skills = [
    { icon: FaJsSquare, title: "JavaScript" },
    { icon: SiTypescript, title: "TypeScript" },
    { icon: FaReact, title: "React" },
    { icon: TbBrandNextjs, title: "Next.js" },
    { icon: SiAstro, title: "Astro" },
    { icon: FaVuejs, title: "Vue.js" },
    { icon: FaAngular, title: "Angular" },
    { icon: SiSocketdotio, title: "WebSocket" },
    { icon: SiRedux, title: "Redux Toolkit" },
    { icon: SiMobx, title: "MobX" },
    { icon: SiReactquery, title: "TanStack Query" },
    { icon: SiShadcnui, title: "Shadcn UI"},
    { icon: SiSwift, title: "Swift" },
    { icon: SiChakraui, title: "Chakra UI" },
    { icon: SiQuasar, title: "Quasar"},
    { icon: SiUikit, title: "UIkit" },
    { icon: SiNextui, title: "NextUI" },
    { icon: SiAntdesign, title: "Ant Design" },
    { icon: BiLogoTailwindCss, title: "Tailwind CSS" },
    { icon: FaHtml5, title: "HTML" },
    { icon: FaCss3Alt, title: "CSS" },
    { icon: FaSass, title: "Sass" },
    { icon: FaBootstrap, title: "Bootstrap" },
    { icon: SiJquery , title: "jQuery" },
];


export const frontendStacks = [
  { icon: FaReact, title: "React", valueExperience: 93 },
  { icon: TbBrandNextjs, title: "Next.js", valueExperience: 90 },
  { icon: SiAstro, title: "Astro", valueExperience: 84 },
  { icon: FaVuejs, title: "Vue.js", valueExperience: 83 },
  { icon: FaAngular, title: "Angular", valueExperience: 60 },
  { icon: FaHtml5, title: "HTML", valueExperience: 95 },
  { icon: FaCss3Alt, title: "CSS", valueExperience: 95 },
];

export const languages = [
  { icon: FaJsSquare, title: "JavaScript", valueExperience: 93 },
  { icon: SiTypescript, title: "TypeScript", valueExperience: 90 },
];

export const statManagement = [
  { icon: SiRedux, title: "Redux Toolkit", valueExperience: 93 },
  { icon: GiBearFace, title: "Zustund", valueExperience: 90 },
  { icon: SiReactquery, title: "React Query", valueExperience: 85 },
  { icon: SiMobx, title: "MobX", valueExperience: 90 },
];

export const tools = [
  { icon: SiVite, title: "Vite", valueExperience: 90 },
  { icon: SiVitest, title: "Vitest", valueExperience: 80 },
];

export const styling = [
  { icon: BiLogoTailwindCss, title: "Tailwind CSS", valueExperience: 95 },
  { icon: FaBootstrap, title: "Bootstrap", valueExperience: 95 },
];

export const animation = [
  { icon: TbBrandFramerMotion, title: "Framer Motion", valueExperience: 89 },
  { icon: TbBrandThreejs, title: "Three.js", valueExperience: 88 },
  { icon: MdAnimation, title: "GSAP", valueExperience: 84 },
  { icon: MdStairs, title: "Lottie", valueExperience: 95 },
];

export const database = [
  { icon: SiMongodb, title: "MongoDB", valueExperience: 74 },
  { icon: BiLogoPostgresql, title: "PostgreSQL", valueExperience: 70 },
];

export const mobile = [
  { icon: SiSwift, title: "Swift", valueExperience: 40 },
  { icon: SiUikit, title: "UIkit", valueExperience: 43 },
];

export const design = [
  { icon: SiNextui, title: "NextUI", valueExperience: 90 },
  { icon: SiAntdesign, title: "Ant Design", valueExperience: 95 },
  { icon: SiShadcnui, title: "Shadcn UI", valueExperience: 93 },
  { icon: SiChakraui, title: "Chakra UI", valueExperience: 90 },
  { icon: SiQuasar, title: "Quasar", valueExperience: 83 },
];

export const featureStacks = [
  { icon: FaNodeJs, title: "Node.js" },
  { icon: SiExpress, title: "Express" },
  { icon: SiNestjs, title: "NestJS" },
]