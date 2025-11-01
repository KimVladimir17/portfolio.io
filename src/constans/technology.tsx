import { FaHtml5 } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
import { FaGulp } from "react-icons/fa";

const GIT_DEMO_MOVIE = import.meta.env.VITE_GIT_DEMO_MOVIE;
// const GIT_DEMO_MORAGO = import.meta.env.VITE_GIT_DEMO_;
// const GIT_DEMO_BOOK = import.meta.env.VITE_GIT_DEMO_;
const GIT_DEMO_ACTIVE = import.meta.env.VITE_GIT_DEMO_ACTIVE;
const GIT_DEMO_COFFE = import.meta.env.VITE_GIT_DEMO_COFFE;
const GIT_DEMO_MOGO = import.meta.env.VITE_GIT_DEMO_MOGO;
const GIT_DEMO_PIZZA = import.meta.env.VITE_GIT_DEMO_PIZZA;

const GIT_CODE_MOVIE = import.meta.env.VITE_GIT_CODE_MOVIE;
const GIT_CODE_MORAGO = import.meta.env.VITE_GIT_CODE_MORAGO;
const GIT_CODE_BOOK = import.meta.env.VITE_GIT_CODE_BOOK;
const GIT_CODE_ACTIVE = import.meta.env.VITE_GIT_CODE_ACTIVE;
const GIT_CODE_COFFE = import.meta.env.VITE_GIT_CODE_COFFE;
const GIT_CODE_MOGO = import.meta.env.VITE_GIT_CODE_MOGO;
const GIT_CODE_PIZZA = import.meta.env.VITE_GIT_CODE_PIZZA;

const colors = {
  html: { color: "#E34F26", bg: "#fff6f2" },
  js: { color: "#eab307", bg: "#fffdeb" },
  ts: { color: "#3178C6", bg: "#f3f7ff" },
  css: { color: "#1572B6", bg: "#f2f8ff" },
  bootstrap: { color: "#7952B3", bg: "#f8f3ff" },
  tailwind: { color: "#06B6D4", bg: "#f2fdff" },
  react: { color: "#61DAFB", bg: "#f2fdff" },
  next: { color: "#111827", bg: "#f9f9f9" },
  vue: { color: "#42B883", bg: "#f3fff8" },
  node: { color: "#339933", bg: "#f6fff6" },
  mysql: { color: "#4479A1", bg: "#f5faff" },
  spring: { color: "#6DB33F", bg: "#f4fff4" },
  webpack: { color: "#8DD6F9", bg: "#f4fbff" },
  gulp: { color: "#CF4647", bg: "#fff6f6" },
  git: { color: "#F05032" },
};

export const technology = [
  {
    key: "HTML",
    title: "HTML",
    icon: <FaHtml5 color={colors.html.color} />,
    color: colors.html.color,
  },
  {
    key: "JavaScript",
    title: "JavaScript",
    icon: <FaSquareJs color={colors.js.color} />,
    color: colors.js.color,
  },
  {
    key: "TypeScript",
    title: "TypeScript",
    icon: <BiLogoTypescript color={colors.ts.color} />,
    color: colors.ts.color,
  },
  {
    key: "CSS",
    title: "CSS",
    icon: <FaCss3Alt color={colors.css.color} />,
    color: colors.css.color,
  },
  {
    key: "Bootstrap",
    title: "Bootstrap",
    icon: <FaBootstrap color={colors.bootstrap.color} />,
    color: colors.bootstrap.color,
  },
  {
    key: "Tailwind",
    title: "Tailwind",
    icon: <SiTailwindcss color={colors.tailwind.color} />,

    color: colors.tailwind.color,
  },
  {
    key: "React",
    title: "React",
    icon: <FaReact color={colors.react.color} />,
    color: colors.react.color,
  },
  {
    key: "Next.js",
    title: "Next.js",
    icon: <RiNextjsFill color={colors.next.color} />,
    color: colors.next.color,
  },
  {
    key: "Vue.js",
    title: "Vue.js",
    icon: <FaVuejs color={colors.vue.color} />,
    color: colors.vue.color,
  },

  {
    key: "Node",
    title: "Node.js",
    icon: <FaNodeJs color={colors.node.color} />,

    color: colors.node.color,
  },
  {
    key: "MySQL",
    title: "MySQL",
    icon: <GrMysql color={colors.mysql.color} />,

    color: colors.mysql.color,
  },
  {
    key: "Spring Boot",
    title: "Spring Boot",
    icon: <BiLogoSpringBoot color={colors.spring.color} />,

    color: colors.spring.color,
  },
  {
    key: "Webpack",
    title: "Webpack",
    icon: <SiWebpack color={colors.webpack.color} />,

    color: colors.webpack.color,
  },
  {
    key: "Gulp",
    title: "Gulp",
    icon: <FaGulp color={colors.gulp.color} />,

    color: colors.gulp.color,
  },
];

export const projects = [
  {
    key: "1",
    img: "/movie_app.png",
    buttons: {
      link: GIT_DEMO_MOVIE,
      git: GIT_CODE_MOVIE,
    },
    tech: [
      {
        key: "next",
        name: "Next.js",
        bg: colors.next.bg,
        color: colors.next.color,
      },
      {
        key: "ts",
        name: "TypeScript",
        bg: colors.ts.bg,
        color: colors.ts.color,
      },
      {
        key: "react",
        name: "React Hooks",
        bg: colors.react.bg,
        color: colors.react.color,
      },
      {
        key: "fetch",
        name: "Fetch/Axios",
        bg: colors.spring.bg,
        color: colors.spring.color,
      },
    ],
  },
  {
    key: "2",
    img: "/photo_morago.jpg",
    videoUrl: "/IMG_MORAGO.MP4",
    buttons: {
      git: GIT_CODE_MORAGO,
    },
    tech: [
      {
        key: "react",
        name: "React",
        bg: colors.react.bg,
        color: colors.react.color,
      },
      {
        key: "vite",
        name: "Vite.js",
        bg: colors.js.bg,
        color: colors.js.color,
      },
      {
        key: "tailwind",
        name: "Tailwind",
        bg: colors.tailwind.bg,
        color: colors.tailwind.color,
      },
      {
        key: "webRtcC",
        name: "WebRTC",
        bg: colors.gulp.bg,
        color: colors.gulp.color,
      },

      {
        key: "webSocket",
        name: "WebSocket",
        bg: colors.node.bg,
        color: colors.node.color,
      },
      {
        key: "jwt",
        name: "JWT",
        bg: colors.next.bg,
        color: colors.next.color,
      },
      {
        key: "mysql",
        name: "MySQL",
        bg: colors.mysql.bg,
        color: colors.mysql.color,
      },
      {
        key: "spring",
        name: "Spring Boot",
        bg: colors.spring.bg,
        color: colors.spring.color,
      },
    ],
  },
  {
    key: "3",
    img: "/photo_book.jpg",
    videoUrl: "/IMG_books.mp4",
    buttons: {
      git: GIT_CODE_BOOK,
    },
    tech: [
      {
        key: "next",
        name: "Next",
        bg: colors.next.bg,
        color: colors.next.color,
      },

      {
        key: "ts",
        name: "TypeScript",
        bg: colors.ts.bg,
        color: colors.ts.color,
      },
      {
        key: "node",
        name: "Node",
        bg: colors.node.bg,
        color: colors.node.color,
      },
      {
        key: "api",
        name: "API",
        bg: colors.next.bg,
        color: colors.next.color,
      },
    ],
  },
  {
    key: "5",
    img: "/ActiveBox.png",
    buttons: {
      link: GIT_DEMO_ACTIVE,
      git: GIT_CODE_ACTIVE,
    },
    tech: [
      {
        key: "html",
        name: "HTML",
        bg: colors.html.bg,
        color: colors.html.color,
      },
      {
        key: "css",
        name: "Css",
        bg: colors.css.bg,
        color: colors.css.color,
      },
      {
        key: "js",
        name: "JavaScript",
        bg: colors.js.bg,
        color: colors.js.color,
      },
      {
        key: "bootstrap",
        name: "Bootstrap",
        bg: colors.bootstrap.bg,
        color: colors.bootstrap.color,
      },
    ],
  },
  {
    key: "6",
    img: "/Coffee.png",
    buttons: {
      link: GIT_DEMO_COFFE,
      git: GIT_CODE_COFFE,
    },
    tech: [
      {
        key: "html",
        name: "HTML",
        bg: colors.html.bg,
        color: colors.html.color,
      },
      {
        key: "css",
        name: "Css",
        bg: colors.css.bg,
        color: colors.css.color,
      },
      {
        key: "js",
        name: "JavaScript",
        bg: colors.js.bg,
        color: colors.js.color,
      },
    ],
  },

  {
    key: "7",
    img: "/MoGo.png",
    buttons: {
      link: GIT_DEMO_MOGO,
      git: GIT_CODE_MOGO,
    },
    tech: [
      {
        key: "html",
        name: "HTML",
        bg: colors.html.bg,
        color: colors.html.color,
      },
      {
        key: "css",
        name: "Css",
        bg: colors.css.bg,
        color: colors.css.color,
      },
      {
        key: "js",
        name: "JavaScript",
        bg: colors.js.bg,
        color: colors.js.color,
      },
      {
        key: "bootstrap",
        name: "Bootstrap",
        bg: colors.bootstrap.bg,
        color: colors.bootstrap.color,
      },
    ],
  },

  {
    key: "8",
    img: "/Pizza.png",
    buttons: {
      link: GIT_DEMO_PIZZA,
      git: GIT_CODE_PIZZA,
    },
    tech: [
      {
        key: "html",
        name: "HTML",
        bg: colors.html.bg,
        color: colors.html.color,
      },
      {
        key: "css",
        name: "Css",
        bg: colors.css.bg,
        color: colors.css.color,
      },
      {
        key: "js",
        name: "JavaScript",
        bg: colors.js.bg,
        color: colors.js.color,
      },
    ],
  },
];

export const skills = [
  {
    name: "HTML & Bootstrap",
    value: 95,
    bg: colors.html.color,
  },
  {
    name: "CSS & Tailwind",
    value: 88,
    bg: colors.css.color,
  },
  {
    name: "TypeScript & JavaScript",
    value: 84,
    bg: colors.ts.color,
  },
  {
    name: "Gulp & Webpack",
    value: 68,
    bg: colors.gulp.color,
  },
  {
    name: "  React & Next.js ",
    value: 80,
    bg: colors.react.color,
  },
  {
    name: "Node.js & APIs",
    value: 70,
    bg: colors.node.color,
  },
  {
    name: "Git",
    value: 81,
    bg: colors.git.color,
  },
  { name: "Vue.js", value: 67, bg: colors.vue.color },
  {
    name: "Spring Boot",
    value: 35,
    bg: colors.spring.color,
  },
  {
    name: "MySQL",
    value: 33,
    bg: colors.mysql.color,
  },
];
