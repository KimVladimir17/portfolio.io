import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  // При загрузке подтягиваем язык из localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ko" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <motion.button
      onClick={toggleLang}
      whileTap={{ scale: 0.9 }}
      className=" relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-between px-2 cursor-pointer shadow-md transition"
    >
      <AnimatePresence mode="wait" initial={false}>
        {lang === "en" ? (
          <motion.span
            key="en"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-3 text-sm top-1.5"
          >
            US
          </motion.span>
        ) : (
          <motion.span
            key="ko"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-3 text-sm top-1.5"
          >
            KR
          </motion.span>
        )}
      </AnimatePresence>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`absolute w-6 h-6 bg-white rounded-full shadow-sm  ${
          lang === "en" ? "right-1" : "left-1"
        }`}
      >
        <img
          src={`${lang === "en" ? "/flag_usa.png" : "/flag_kr.png"}`}
          alt=""
        />
      </motion.div>
    </motion.button>
  );
}
