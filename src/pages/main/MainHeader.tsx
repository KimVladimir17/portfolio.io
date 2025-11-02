import { IoCodeSlashSharp } from "react-icons/io5";
import { useTranslation, Trans } from "react-i18next";

export default function MainHeader() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="main-header flex">
        <div className="absolute inset-0 gradient-bg opacity-5 animate-gradient"></div>
        <div className="main-header__block flex items-center">
          <div className="main-header__info">
            <p>{t("home.hi")}</p>
            <h1 className="main-header__title text-5xl font-bold leading-tight ">
              {t("home.firstName")}
              <span className="main-header__title-name">
                {t("home.lastName")}
              </span>
            </h1>
            <p className="main-header__subtitle text-gray-600 text-5xl font-bold">
              {t("home.position")} <span> {t("home.developer")}</span>
            </p>
            <p className="main-header__text text-gray-600 w-[90%]">
              <Trans
                i18nKey={t("home.text")}
                components={{
                  strong: <span className="text-blue-600 font-semibold" />,
                }}
              />
            </p>
          </div>
        </div>
        <div className="main-header__block ">
          <div className="main-header__photo">
            <img
              src="/photo_me-folio.jpg"
              className="photo-me shadow-2xl animate-float"
              alt=""
            />

            <div className="main-header__photo__icon animate-bounce-slow ">
              <IoCodeSlashSharp color="white" className="photo-me-icon " />
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float"></div>
      </div>
    </div>
  );
}
