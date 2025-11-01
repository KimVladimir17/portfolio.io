import { useTranslation } from "react-i18next";
import { skills } from "../../constans/technology";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const { t } = useTranslation();
  return (
    <div id="skills" className="py-12  bg-gray-50">
      <div className="container ">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-2  main-header__title-name ">
          {t("skills.title")}
        </h2>
        <p className="text-xl text-gray-600 text-center  mb-10">
          {t("skills.subTitle")}
        </p>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span
                  className="text-gray-600 font-bold "
                  style={{
                    color: skill.bg,
                  }}
                >
                  {skill.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-3 rounded-full"
                  style={{
                    backgroundColor: skill.bg,
                  }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.value}% ` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
