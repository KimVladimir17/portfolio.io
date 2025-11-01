import { IoCodeSlashSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const CV_LINK = import.meta.env.VITE_CV_LINK;
const GITHUB_MAIN_URL1 = import.meta.env.VITE_GITHUB_MAIN_URL1;

export default function MainHeaderNav() {
  const { t } = useTranslation();
  return (
    <div className="header-nav flex  backdrop-blur-md  border-b border-gray-200 bg-white/80 ">
      <div className="header-nav__logo flex  items-center ">
        <div className="header-nav__icon w-10 h-10  rounded-lg flex items-center justify-center">
          <a href="#home">
            <IoCodeSlashSharp color="white" />
          </a>
        </div>
        <p className="text-xl font-bold text-gray-900 header-nav__none">
          DevFolio
        </p>
      </div>
      <div className="header-nav__links flex items-center">
        <a href="#about" className="hover">
          {t("header.about")}
        </a>
        <a href="#projects" className="hover">
          {t("header.projects")}
        </a>
        <a href="#skills" className="hover">
          {t("header.skills")}
        </a>
        <a href="#playground" className="hover">
          {t("header.playground")}
        </a>
        <a href="#contact" className="hover">
          {t("header.contact")}
        </a>
      </div>
      <div className="header-nav__btns flex items-center">
        <a
          href={GITHUB_MAIN_URL1}
          target="_blank"
          rel="noopener noreferrer"
          className="header-nav__btn-icon header-nav__none "
        >
          <FaGithub className="icon hover" />
        </a>
        <a href={CV_LINK} className="header-nav__btn  rounded-lg buttons ">
          {t("header.download")}
        </a>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
