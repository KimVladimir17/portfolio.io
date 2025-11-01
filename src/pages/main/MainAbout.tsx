import { technology } from "../../constans/technology";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation, Trans } from "react-i18next";
export default function MainAbout() {
  const [isWide, setIsWide] = useState(window.innerWidth > 1050);

  const { t } = useTranslation();
  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 1050);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about" className="main-about bg-gray-50 ">
      <div className="container">
        <div className={`main-about__content  py-20`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 main-header__title-name ">
            {t("about.title")}
          </h1>
          <p>
            <Trans
              i18nKey={t("about.subTitle")}
              components={{
                strong: <span className="text-blue-600 font-semibold" />,
              }}
            />
          </p>
          <div className="main-about__info mt-16">
            <div
              className={`main-about__info-block flex  ${
                isWide ? "mb-20" : "0"
              }`}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                <Trans
                  i18nKey={t("about.textOne")}
                  components={{
                    strong: <span className="text-blue-600 font-semibold" />,
                  }}
                />
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <Trans
                  i18nKey={t("about.textTwo")}
                  components={{
                    strong: <span className="text-blue-600 font-semibold" />,
                  }}
                />
              </p>
            </div>
            <div className="main-about__info-block  flex gap-6 ">
              {isWide ? (
                technology.map((item) => (
                  <div
                    className="main-about__info-block-item bg-white flex items-center rounded-xl animate-neon "
                    key={item.key}
                    style={
                      {
                        color: item.color,
                        "--glow": item.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="main-about__info-block-item-icon">
                      {item.icon}
                    </div>
                    <div className="main-about__info-block-item-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={5}
                  spaceBetween={20}
                  grabCursor={true}
                  loop={true}
                  autoplay={{ delay: 1500, disableOnInteraction: false }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    500: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                  }}
                  className="w-full swiper-absolute "
                >
                  {technology.map((item) => (
                    <SwiperSlide
                      key={item.key}
                      className="animate-neon z-2  py-20"
                      style={
                        {
                          color: item.color,
                          "--glow": item.color,
                        } as React.CSSProperties
                      }
                    >
                      <div className="main-about__info-block-item bg-white flex items-center  rounded-xl  ">
                        <div className="main-about__info-block-item-icon">
                          {item.icon}
                        </div>
                        <div className="main-about__info-block-item-text">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
